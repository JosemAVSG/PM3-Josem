import { useForm , SubmitHandler } from "react-hook-form"
import {  turnDto } from "../types/turn.interface";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Link, useNavigate } from "react-router-dom";
import { createTurnAction } from "../reducers/authSlice";

interface IFormInput {
  dia: string;
  time: Date;
  timeEnd: Date;
  description: string;
}
const NewTurn : React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userId = useAppSelector((state) => state.auth.userId);
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IFormInput>();


    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(userId);

      if(!userId) return;
      const turn: turnDto = {
        ...data,
        userId
      }
      dispatch( createTurnAction(turn) );
      navigate("/turns");
    };

  return (
    <div>
      <h1>New Turn</h1>
      <Link to="/turns"> Regresar </Link>
      <form onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor="dia">Date</label>
        <select  id="dia" {...register("dia")} >
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miercoles">Miercoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
        </select>
        {errors.dia && <p>{errors.dia.message}</p>}
        <label htmlFor="time">Time</label>
        <input type="time" id="time" {...register("time")} />   
          { errors.time && <p>{errors.time.message}</p>}
        <label htmlFor="timeEnd">Time End</label>
        <input type="time" id ="timeEnd" {...register("timeEnd")}  />
        { errors.timeEnd && <p>{errors.timeEnd.message}</p>}
        <label htmlFor="description">Description</label>
        <input type="text" id="description" {...register("description")} />
          { errors.description && <p>{errors.description.message}</p>}
        <input type="submit" />
      </form>

    </div>
  )
}

export default NewTurn
