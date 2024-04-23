import { appoimentDto } from '../dto/user.dto';
import { IAppointment } from "../interfaces/appoiment";
import { Turn } from '../entities/turn';
import { horarioModel, turnModel } from '../config/data-source';
import { Horario } from '../entities/horario';
const appointments: IAppointment[] = [];

export const GetAllAppointments = () : Promise<Turn[]> => {
    return turnModel.find();
}

export const GetAppointmentById = async (id: number) : Promise<Turn | null | undefined> => {
    try{
        const foundAppointment = await turnModel.findOneBy({id: id});
        return foundAppointment;
    }catch(error){
        console.log(error);   
    }
}

export const CreateAppointment = async (appointment: appoimentDto) : Promise<Turn | undefined > => {
   const { dia, time, timeEnd, userId , status } = appointment;

    try {
        //creamos turno
        const createAppointment =  turnModel.create({ status });
        const newAppointment = await turnModel.save(createAppointment);
        //creamos horario y asginamos a turno

        const newHorario : Horario = horarioModel.create({
            dia ,
            time,
            timeEnd,
            turn: newAppointment,
        });

        await horarioModel.save(newHorario);

        return newAppointment;

    } catch (error) {
        console.log(error);
    }
}

export const CancelAppointment = (id: number) => {
    const foundAppointment = appointments.find(appointment => appointment.id === id);
    if (foundAppointment) {
        foundAppointment.status = false;
    }
    return foundAppointment;
}
