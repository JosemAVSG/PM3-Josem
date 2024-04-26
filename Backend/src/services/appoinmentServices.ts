import { appoimentDto } from "../dto/user.dto";
import { IAppointment } from "../interfaces/appoiment";
import { Turn } from "../entities/turn";
import { createHorario } from "./horarioServices";
import { Horario } from "../entities/horario";
import { Historial } from "../entities/historial";
import { addHistorialService } from "./historialServices";
import horarioRepository from "../repositories/horarioRepository";
import turnRepository from "../repositories/turnRepository";
import userRepository from "../repositories/userRepository";
const appointments: IAppointment[] = [];

export const GetAllAppointments = async (): Promise<Turn[]> => {
  return await turnRepository.find();
};

export const GetAppointmentById = async (
  id: number
): Promise<Turn | null | undefined> => {
  try {
    const foundAppointment = await turnRepository.findOneBy({ id: id });
    return foundAppointment;
  } catch (error) {
    console.log(error);
  }
};

export const CreateAppointment = async (appointment: appoimentDto):Promise<Turn | undefined> => {
  const { dia, time, timeEnd, userId, status, description } = appointment;
  try {
    //creamos turno
    const createAppointment = turnRepository.create({ status, description });
    const newAppointment: Turn | undefined = await turnRepository.save(createAppointment);

    const user = await userRepository.findOneBy({ id: userId });
    console.log(newAppointment);
    
    const horario: Horario | undefined = await createHorario({
      date: dia,
      time: time,
      timeEnd: timeEnd,
      idturn: newAppointment.id,
    });

    if (user && horario) {

      user.turns= [newAppointment];
      newAppointment.horario=horario;
    
      await userRepository.save(user);
      await horarioRepository.save(horario);

      const historial : Historial | undefined = await addHistorialService({ idturn: newAppointment.id} )

      return newAppointment;
    }

    throw new Error("User or horario not found");
  } catch (error) {
    console.log(error);
  }
};

export const cancelAppointment = async (id: number): Promise<Turn | undefined> => {

  try {
      const foundAppointment = await turnRepository.findOneBy({ id: id });
     if(foundAppointment) {
        foundAppointment.status = false;
        await turnRepository.save(foundAppointment);

        return foundAppointment;
     }

    throw new Error("Appointment not found");
  } catch (error) {
    console.log(error);    
  }

};
