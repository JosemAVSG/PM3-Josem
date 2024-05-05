import { NavLink } from "react-router-dom";
import styles from "../styles/nav.module.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import { logout } from "../reducers/authSlice";
const Navbar: React.FC = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Logo</div>

        <div className={styles.links} id="navbarNav">
          {isAuthenticated ? (
            <>
              <div>
                <button
                  onClick={() => handleLogout()}
                  className={styles.link_logout}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/turns" className="nav-link">
                Mis Turnos
              </NavLink>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
              <NavLink to="/login" className={styles.link_login}>
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
