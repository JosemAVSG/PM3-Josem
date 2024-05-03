import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyTokenAction } from "../reducers/authSlice";


const ProtectedRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(verifyTokenAction());
  }, [dispatch,isAuthenticated]);

useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return <Outlet></Outlet>;
};

export default ProtectedRoute;
