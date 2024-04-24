import { Horario } from "../entities/horario";
import { horarioModel, turnModel } from "../config/data-source";
import { horarioDto } from "../dto/user.dto";
export const createHorario = async (turntime: horarioDto): Promise<Horario | undefined> => {
  const { date, time, timeEnd, idturn } = turntime;

    try {
        // Buscar el turno por su ID
        const turno = await turnModel.findOneBy({ id: idturn });
        if (!turno) {
            throw new Error('No se encontró el turno con el ID proporcionado');
        }

        // Crear y guardar el horario asociado al turno
        const newHorario = horarioModel.create({
            date: date,
            time: time,
            timeEnd : timeEnd,
        })

        await horarioModel.save(newHorario);

        if(turno){
            turno.horario = newHorario;
            await turnModel.save(turno);
        }else{
            throw new Error('No se encontró el turno con el ID proporcionado');
        }

        return newHorario;
    } catch (error) {
        console.error('Error al crear el horario:', error);
        throw error;
    }
};
