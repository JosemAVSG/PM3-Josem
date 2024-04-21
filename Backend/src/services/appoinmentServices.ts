import { appoimentDto } from '../dto/user.dto';
import { IAppointment } from "../interfaces/appoiment";


const appointments: IAppointment[] = [];

export const GetAllAppointments = () => {
    return appointments;
}

export const GetAppointmentById = (id: number) => {
    const foundAppointment = appointments.find(appointment => appointment.id === id);
    return foundAppointment;
}

export const CreateAppointment = (appointment: appoimentDto, userId: number) => {
    const newAppointment = {
        id: appointments.length + 1,
        date: appointment.date,
        time: appointment.time,
        status: appointment.status,
        userId
    }
    appointments.push(newAppointment);
    return newAppointment;
}

export const CancelAppointment = (id: number) => {
    const foundAppointment = appointments.find(appointment => appointment.id === id);
    if (foundAppointment) {
        foundAppointment.status = "cancelled";
    }
    return foundAppointment;
}
