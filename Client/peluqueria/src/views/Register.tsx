import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faIdCard } from '@fortawesome/free-solid-svg-icons'
import style from '../styles/register.module.scss'
const Register = () => {
  return (
   <>
    <div className={style.wrapper}>
      <div className={style.box}>
        <h2>Register</h2>
        <form method="post" action="#" className={style.login}>
          <div className={style.form_group}>
            <FontAwesomeIcon icon={faUser} className={style.icon} />
            <label htmlFor="username" className={style.label}>Username</label>
            <input type="text" className={style.input} id="username" required />
          </div>
          <div className={style.form_group}>
            <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
            <label htmlFor="email" className={style.label}>Email</label>
            <input type="email" className={style.input} id="email" required />
          </div>
          <div className={style.form_group}>
            <FontAwesomeIcon icon={faLock} className={style.icon} />
            <label htmlFor="password" className={style.label}>Password</label>
            <input type="password" className={style.input} id="password" required />
          </div>
          <div className={style.form_group}>
            <FontAwesomeIcon icon={faIdCard} className={style.icon} />
            <label htmlFor="dni" className={style.label}>DNI</label>
            <input type="number" className={style.input} id="dni" required />
          </div>
          <div className={style.remember}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">I agree with terms and conditions</label>
          </div>
          <button type="submit" className={style.btn}>Register</button>
          </form>
      </div>
    </div>
   </>
  )
}

export default Register