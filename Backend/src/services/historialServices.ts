import { Historial } from "../entities/historial";
import { historialDto } from "../dto/user.dto";
import { Turn } from "../entities/turn";
import historialRepository from "../repositories/historyRepository";
import turnRepository from "../repositories/turnRepository";
import {AppDataSource} from "../config/data-source";
export const addHistorialService = async (historial: historialDto): Promise<Historial | undefined> => {
        const{ idturn } = historial;
        const queryRunner = AppDataSource.createQueryRunner();
        await queryRunner.connect();
    try {
        await queryRunner.startTransaction();
        const turno : Turn | null = await turnRepository.findOneBy({ id: idturn })
        if (!turno) {
            throw new Error('No se encontró el turno con el ID proporcionado');
        }

        const newHistorial = historialRepository.create({
            fechaHora: new Date(),
            turns: [turno]
        })
        const historial = await queryRunner.manager.save(newHistorial)
        return historial;
    } catch (error) {
        console.log(error)
        await queryRunner.rollbackTransaction();
    }finally{
        await queryRunner.release();
    }
};
