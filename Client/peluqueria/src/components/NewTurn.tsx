import { useForm, SubmitHandler } from "react-hook-form";
import { turnDto } from "../types/turn.interface";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Link, useNavigate } from "react-router-dom";
import { createTurnAction } from "../reducers/authSlice";
import styles from "../styles/newTurn.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
// import hero from '../assets/hero.jpg';
interface IFormInput {
  dia: Date;
  time: Date;
  timeEnd: Date;
  description: string;
}
const NewTurn: React.FC = () => {
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

    if (!userId) return;
    const turn: turnDto = {
      ...data,
      userId,
    };
    dispatch(createTurnAction(turn));
    navigate("/turns");
  };

  return (
    <div className="h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#043946_100%)] ">
      <div className={styles.container}>
        <div className={styles.close}>
          <Link to="/turns">
            {" "}
            <FontAwesomeIcon icon={faX} />{" "}
          </Link>
        </div>

        <div className={styles.hero}></div>
        <div className={styles.form_container}>
          <div className={styles.form_wrapper}>
            <h1>New Turn</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <label htmlFor="dia">Date</label>
              <input type="date" id="dia" {...register("dia")} />
              {errors.dia && <p>{errors.dia.message}</p>}
              <label htmlFor="time">Time</label>
              <input type="time" id="time" {...register("time")} />
              {errors.time && <p>{errors.time.message}</p>}
              <select  {...register("description")}>
                <option value="Peinado">Peinado</option>
                <option value="Corte de Barba">Corte de Barba</option>
                <option value='Cloronimetria'>Cloronimetria</option>
                <option value='Corte de Cabello'>Corte de Cabello</option>
                <option value='Manicura'>Manicura</option>
                <option value='Pedicura'>Pedicura</option>
              </select>
              
              {errors.description && <p>{errors.description.message}</p>}
              <button type="submit"> Enviar </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTurn;
