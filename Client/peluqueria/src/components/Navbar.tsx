import { NavLink } from "react-router-dom";
import styles from "../styles/nav.module.css";
const Navbar: React.FC = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Logo</div>

        <div className={styles.links} id="navbarNav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
          <NavLink to="/login" className={styles.link_login}>
            Login
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
