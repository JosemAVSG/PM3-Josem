import React from "react";
import style from "../styles/login.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const Login: React.FC = () => {

 
  
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.box}>
          <h2>Login</h2>
          <form method="post" action="#" className={style.login}>
            <div className={style.form_group}>
              <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
              <label htmlFor="email" className={style.label}>Email</label>
              <input type="email" className={style.input} id="email" required  />
            </div>
            <div className={`${style.form_group} form_group `}>
              <FontAwesomeIcon icon={faLock} className={style.icon} />
              <label htmlFor="password" className={style.label}>Password</label>
              <input type="password" className={style.input} id="password" required />
            </div>
            <div className={style.remember}>
              <div >

              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#"> Forgot password?</a>
            </div>
            <button type="submit" className={style.btn}>
              Login
            </button>
            <div className={style.register}>
              <p>Don't have an account? <Link to="/register" >Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
