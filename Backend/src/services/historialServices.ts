import { Historial } from "../entities/historial";
import { historialModel } from "../config/data-source";
import { historialDto } from "../dto/user.dto";
import { Turn } from "../entities/turn";
import { turnModel } from "../config/data-source";

export const addHistorialService = async (historial: historialDto): Promise<Historial | undefined> => {
        const{ idturn } = historial
        
    try {
        const turno : Turn | null = await turnModel.findOneBy({ id: idturn })
        if (!turno) {
            throw new Error('No se encontró el turno con el ID proporcionado');
        }

        const newHistorial = historialModel.create({
            fechaHora: new Date(),
            turns: [turno]
        })
        const historial = await historialModel.save(newHistorial)
        return historial;
    } catch (error) {
        console.log(error)
    }
};
