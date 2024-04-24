import { appoimentDto } from "../dto/user.dto";
import { IAppointment } from "../interfaces/appoiment";
import { Turn } from "../entities/turn";
import { horarioModel, turnModel, userModel } from "../config/data-source";
import { createHorario } from "./horarioServices";
import { Horario } from "../entities/horario";

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

export const CreateAppointment = async (appointment: appoimentDto):Promise<Turn | undefined> => {
  const { dia, time, timeEnd, userId, status } = appointment;
  try {
    //creamos turno
    const createAppointment = turnModel.create({ status });
    const newAppointment: Turn | undefined = await turnModel.save(createAppointment);

    const user = await userModel.findOneBy({ id: userId });
    
    const horario: Horario | undefined = await createHorario({
      date: dia,
      time: time,
      timeEnd: timeEnd,
      idturn: newAppointment.id,
    });

    if (user && horario) {
      user.turns = [...user.turns, newAppointment];
      horario.turns = [...horario.turns, newAppointment];
      await userModel.save(user);
      await horarioModel.save(horario);

      return newAppointment;
    }

    throw new Error("User or horario not found");
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
