import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import style from "../styles/register.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

type IRegister = {
  FullName: string;
  email: string;
  birthday: Date;
  dni: number;
  username: string;
  password: string;
  remember: boolean;
};
const Register = () => {
  const { register, handleSubmit } = useForm<IRegister>();

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.box}>
          <h2>Register</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
            <div className={style.form_group}>
              <FontAwesomeIcon icon={faUser} className={style.icon} />
              <label htmlFor="FullName" className={style.label}>
                FullName
              </label>
              <input
                type="text"
                className={style.input}
                id="FullName"
                required
                {...register("FullName", { required: true })}
              />
            </div>
            <div className={style.form_group}>
              <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
              <label htmlFor="email" className={style.label}>
                Email
              </label>
              <input
                type="email"
                className={style.input}
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className={style.form_group}>
              <label htmlFor="birthday" className={style.label}>
                birthday
              </label>
              <input
                type="date"
                className={style.input}
                id="birthday"
                required
                {...register("birthday", { required: true })}
              />
            </div>
            <div className={style.form_group}>
              <FontAwesomeIcon icon={faIdCard} className={style.icon} />
              <label htmlFor="dni" className={style.label}>
                DNI
              </label>
              <input
                type="number"
                className={style.input}
                id="dni"
                required
                {...register("dni", { required: true })}
              />
            </div>
            <div className={style.form_group}>
              <FontAwesomeIcon icon={faUser} className={style.icon} />
              <label htmlFor="username" className={style.label}>
                Username
              </label>
              <input
                type="text"
                className={style.input}
                id="username"
                required
                {...register("username", { required: true })}
              />
            </div>
            <div className={style.form_group}>
              <FontAwesomeIcon icon={faLock} className={style.icon} />
              <label htmlFor="password" className={style.label}>
                Password
              </label>
              <input
                type="password"
                className={style.input}
                id="password"
                required
                {...register("password", { required: true })}
              />
            </div>
            <div className={style.remember}>
              <input type="checkbox" id="remember" required autoFocus  {...register("remember", { required: true })} />
              <label htmlFor="remember">
                I agree with terms and conditions
              </label>
            </div>
            <button type="submit" className={style.btn}>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
