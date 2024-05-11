import { Horario } from "../entities/horario";
import { horarioDto } from "../dto/user.dto";
import horarioRepository from "../repositories/horarioRepository";
import turnRepository from "../repositories/turnRepository";
import { AppDataSource } from "../config/data-source";
export const createHorarioService = async (  turntime: horarioDto): Promise<Horario | undefined> => {
  const { date, time, idturn } = turntime;
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();
  try {
    await queryRunner.startTransaction();
    // Buscar el turno por su ID

    const horainicio = new Date(date).setHours(9, 0, 0);
    const horafin = new Date(date).setHours(18, 0, 0);
    let horaTurno = new Date(date).setHours(
      parseInt(time.split(":")[0]),
      parseInt(time.split(":")[1]),
      0
    );

    if (/^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i.test(time)) {
      const [times, period] = time.split(" ");
      const [hourPart, minutePart] = times.split(":");

      const hourNumber = parseInt(hourPart, 10) % 12; // Obtener la hora en formato de 24 horas
      const adjustedHour =
        period.toLowerCase() === "pm" ? hourNumber + 12 : hourNumber;

      // Crear un nuevo objeto Date y establecer la hora
      horaTurno = new Date(date).setHours(
        adjustedHour,
        parseInt(minutePart, 10),
        0
      );
    }

    if (horaTurno < horainicio || horaTurno > horafin)
      throw new Error("La hora no es valida");

    const newHorario = horarioRepository.create({
      date: date,
      time: time,
    });

    await queryRunner.manager.save(newHorario);

    const turno = await turnRepository.findOneBy({ id: idturn });

    if (turno) {
      turno.horario = newHorario;
      await queryRunner.manager.save(turno);
      await queryRunner.commitTransaction();
      return newHorario;
    } else {
      throw new Error("No se encontró el turno con el ID proporcionado");
    }
  } catch (error) {
    console.error("Error al crear el horario:", error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
};
