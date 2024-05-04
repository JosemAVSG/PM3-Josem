import { Horario } from "../entities/horario";
import { horarioDto } from "../dto/user.dto";
import horarioRepository from "../repositories/horarioRepository";
import turnRepository from "../repositories/turnRepository";
import {AppDataSource} from "../config/data-source";
export const createHorarioService = async (turntime: horarioDto): Promise<Horario | undefined> => {
  const { date, time, timeEnd, idturn } = turntime;
     const queryRunner = AppDataSource.createQueryRunner();
     await queryRunner.connect();
    try {
     await queryRunner.startTransaction();
        // Buscar el turno por su ID
        // Crear y guardar el horario asociado al turno
        const timein = new Date(time);
        const timeout = new Date(timeEnd);
       
        
        const newHorario = horarioRepository.create({
            date: date,
            time: timein,
            timeEnd : timeout,
        })
        
        await queryRunner.manager.save(newHorario);
       
        const turno = await turnRepository.findOneBy({ id: idturn });
        

        if(turno){
            turno.horario = newHorario;
            await queryRunner.manager.save(turno);
            await queryRunner.commitTransaction();
            return newHorario;
            
        }else{
            throw new Error('No se encontró el turno con el ID proporcionado');
        }
    } catch (error) {
        console.error('Error al crear el horario:', error);
        await queryRunner.rollbackTransaction();
    }finally{
        await queryRunner.release();
    }
};
