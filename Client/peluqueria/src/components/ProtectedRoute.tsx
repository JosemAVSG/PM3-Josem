import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();


useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return <Outlet></Outlet>;
};

export default ProtectedRoute;
