import { Horario } from "../entities/horario";
import { horarioDto } from "../dto/user.dto";
import horarioRepository from "../repositories/horarioRepository";
import turnRepository from "../repositories/turnRepository";
export const createHorario = async (turntime: horarioDto): Promise<Horario | undefined> => {
  const { date, time, timeEnd, idturn } = turntime;

    try {
        // Buscar el turno por su ID
        const turno = await turnRepository.findOneBy({ id: idturn });
        if (!turno) {
            throw new Error('No se encontró el turno con el ID proporcionado');
        }

        // Crear y guardar el horario asociado al turno
        const newHorario = horarioRepository.create({
            date: date,
            time: time,
            timeEnd : timeEnd,
        })

        await horarioRepository.save(newHorario);

        if(turno){
            turno.horario = newHorario;
            await turnRepository.save(turno);
        }else{
            throw new Error('No se encontró el turno con el ID proporcionado');
        }

        return newHorario;
    } catch (error) {
        console.error('Error al crear el horario:', error);
        throw error;
    }
};
