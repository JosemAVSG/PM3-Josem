import React, { useEffect } from "react";
import style from "../styles/login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useNavigate } from "react-router-dom";
import { IUserLogin } from "../types/user.interface";
import { signinUser } from "../reducers/authSlice";
const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const onSubmit: SubmitHandler<IUserLogin> = (data) => {
    dispatch(signinUser(data));
    navigate("/turns");
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/turns");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.box}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={style.login}>
            <div className={style.form_group}>
              <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
              <label htmlFor="email" className={style.label}>
                Email
              </label>
              <input
                type="email"
                className={style.input}
                id="email"
                required
                {...register("email", { required: "Email is required" })}
              />

              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className={`${style.form_group} form_group `}>
              <FontAwesomeIcon icon={faLock} className={style.icon} />
              <label htmlFor="password" className={style.label}>
                Password
              </label>
              <input
                type="password"
                className={style.input}
                id="password"
                required
                {...register("password", { required: "Password is required" })}
              />

              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className={style.remember}>
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#"> Forgot password?</a>
            </div>
            <button type="submit" className={style.btn}>
              Login
            </button>
            <div className={style.register}>
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
