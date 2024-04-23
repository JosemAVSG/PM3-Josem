import { appoimentDto } from "../dto/user.dto";
import { IAppointment } from "../interfaces/appoiment";
import { Turn } from "../entities/turn";
import { horarioModel, turnModel } from "../config/data-source";
import { createHorario } from "./horarioServices";

const appointments: IAppointment[] = [];

export const GetAllAppointments = (): Promise<Turn[]> => {
  return turnModel.find();
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

export const CreateAppointment = async (appointment: appoimentDto):Promise<Turn | void | undefined> => {
  const { dia, time, timeEnd, userId, status } = appointment;
  try {
    //creamos turno
    const createAppointment = turnModel.create({ status });
    const newAppointment = await turnModel.save(createAppointment);

    const user = await turnModel.findOneBy({ id: userId });

    const horario: Horario | undefined = await createHorario({
      dia,
      time,
      timeEnd,
    });

    if (user) {
      newAppointment.user = user;
      await turnModel.save(newAppointment);
    }
    //creamos horario y asginamos a turno
  } catch (error) {
    console.log(error);
  }
};

export const CancelAppointment = (id: number) => {
  const foundAppointment = appointments.find(
    (appointment) => appointment.id === id
  );
  if (foundAppointment) {
    foundAppointment.status = false;
  }
  return foundAppointment;
};
