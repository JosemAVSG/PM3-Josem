import { NavLink } from "react-router-dom";
import styles from "../styles/nav.module.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../reducers/authSlice";
import {Link} from "react-router-dom";
import imguser from "../assets/user.svg";
interface IUserlogin {
  login: boolean;
  user: {
    name: string;
    email: string;
    birthdate: Date;
    nDni: number;
    image: string;
    
  };
}
const Navbar: React.FC = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user : IUserlogin | null = useAppSelector((state) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>BarberBay</div>

        <div className={styles.links} id="navbarNav">
          {isAuthenticated ? (
            <>
             <div className="dropdown relative md:static mr-6 ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-btn focus:outline-none focus:shadow-outline flex flex-wrap items-center"
            >
              <div className="w-10 h-10 overflow-hidden rounded-full">
                <img className="w-full h-full object-cover" src={ user?.user?.image ? user?.user?.image : imguser} />
              </div>
              <div className="ml-2 capitalize flex ">
                <h1 className="text-md text-black font-semibold m-0 p-0 leading-none">
                 Bienvenido {user?.user.name}
                </h1>
              </div>
              <FontAwesomeIcon
                icon={isOpen ? faChevronUp : faChevronDown}
                className="ml-2 text-xs leading-none"
              />
            </button>
            <div
              className={`absolute right-0 mt-2 w-48 bg-white text-neutral-900 rounded-lg py-2 shadow-xl ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <Link
                exact="true"
                to="/profile"
                className="px-4 py-2 block bg-white hover:bg-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out"
              >
                Mi perfil
              </Link>
              <hr></hr>
              <li className={styles.sesion}>
                <button onClick={() => handleLogout()}>Logout</button>
              </li>

            </div>
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
