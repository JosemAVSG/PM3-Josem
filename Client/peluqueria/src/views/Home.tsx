import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/hero.module.css";
import hero from "../assets/hero.jpg";
const Home: React.FC = () => {
  return (
    <>
      <section className={styles.hero}>
     <div className={styles.hero_container}>
        <div className={styles.hero_text}>
          <div className={styles.hero_title}>
            <h1> Bienvenidos a BarberBay!</h1>
          </div>
          <div className={styles.hero_paragraph}>
            <p>
              En nuestro salón, no solo transformamos tu cabello, sino que
              también queremos que tu experiencia sea tan fluida y conveniente
              como sea posible. Con nuestra plataforma de reserva de turnos en
              línea, puedes decir adiós a las largas esperas y reservar tu cita
              en solo unos pocos clics. Nuestro equipo de estilistas altamente
              capacitados está listo para brindarte el servicio que mereces,
              todo mientras te ahorramos tiempo y te ofrecemos la flexibilidad
              que necesitas.
            </p>
          </div>
          <div className={styles.hero_button}>
            <Link to="/login" className="btn-hero">
              !Reserva ahora y prepárate para lucir tu mejor version
            </Link>
          </div>
        </div>
        <div className={styles.hero_image}>
          <img src={hero} alt="hero-image" />  
         </div>
     </div>
      </section>
    </>
  );
};

export default Home;
