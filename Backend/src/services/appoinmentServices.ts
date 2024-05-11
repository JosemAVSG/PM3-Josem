import { appoimentDto } from "../dto/user.dto";
import { Turn } from "../entities/turn";
import {  createHorarioService } from "./horarioServices";
import { Horario } from "../entities/horario";
import { Historial } from "../entities/historial";
import { addHistorialService } from "./historialServices";
import turnRepository from "../repositories/turnRepository";
import userRepository from "../repositories/userRepository";
import {AppDataSource} from "../config/data-source";



export const GetAllAppointments = async (): Promise<Turn[]> => {
  return await turnRepository.find({relations : {user:true , horario:true, historial:true}});
};

export const GetAppointmentByUserId = async (id: number): Promise<Turn[] | null | undefined> => {
  try {
    return await turnRepository.find({
      relations : { horario:true },
      where: { user:{id:id} },
    })
   
  } catch (error) {
    console.log(error);
  }
};

export const GetAppointmentById = async ( id: number ) : Promise<Turn | null | undefined> => {
          
  try {
    const foundAppointment = await turnRepository.findOneBy({ id: id });
    if(foundAppointment) {
      return foundAppointment;
    }
    throw new Error("Appointment not found");
  } catch (error) {
    console.log(error);
  }
}
export const CreateAppointment = async (appointment: appoimentDto):Promise<Turn | undefined> => {
  const { dia, time, userId, status, description } = appointment;
  
  
  try {

    //creamos turno
    const createAppointment = turnRepository.create({ status, description });
    const newAppointment: Turn | undefined = await turnRepository.save(createAppointment);
    
    const user = await userRepository.findOneBy({ id: userId });

    
    if(!newAppointment){
      throw new Error("Appointment not found");
    }
    const horario: Horario | undefined = await createHorarioService({
      date: dia,
      time:time,
      idturn: newAppointment.id,
    });
    const historial : Historial | undefined = await addHistorialService({ idturn: newAppointment.id} )

    if (user && horario && historial) {

      newAppointment.user=user;
      newAppointment.horario=horario;
      newAppointment.historial = historial;

      await turnRepository.save(newAppointment);

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
