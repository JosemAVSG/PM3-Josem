import { appoimentDto } from "../dto/user.dto";
import { IAppointment } from "../interfaces/appoiment";
import { Turn } from "../entities/turn";
import { horarioModel, turnModel, userModel } from "../config/data-source";
import { createHorario } from "./horarioServices";
import { Horario } from "../entities/horario";
import { Historial } from "../entities/historial";
import { addHistorialService } from "./historialServices";

const appointments: IAppointment[] = [];

export const GetAllAppointments = async (): Promise<Turn[]> => {
  return await turnModel.find();
};

export const GetAppointmentById = async (
  id: number
): Promise<Turn | null | undefined> => {
  try {
    const foundAppointment = await turnModel.findOneBy({ id: id });
    return foundAppointment;
  } catch (error) {
    console.log(error);
  }
};

export const CreateAppointment = async (appointment: appoimentDto):Promise<Turn | undefined> => {
  const { dia, time, timeEnd, userId, status, description } = appointment;
  try {
    //creamos turno
    const createAppointment = turnModel.create({ status, description });
    const newAppointment: Turn | undefined = await turnModel.save(createAppointment);

    const user = await userModel.findOneBy({ id: userId });
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
    
      await userModel.save(user);
      await horarioModel.save(horario);

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
      const foundAppointment = await turnModel.findOneBy({ id: id });
     if(foundAppointment) {
        foundAppointment.status = false;
        await turnModel.save(foundAppointment);

        return foundAppointment;
     }

    throw new Error("Appointment not found");
  } catch (error) {
    console.log(error);    
  }

};
