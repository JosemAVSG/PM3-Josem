// import { useForm } from "react-hook-form"
// import { ITurn } from "../types/turn.interface";
// import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import { useNavigate } from "react-router-dom";
// import { SubmitHandler } from "react-hook-form";

const NewTurn : React.FC = () => {
//    const isAuthenticated= useAppSelector((state) => state.auth.isAuthenticated);
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();
    // const onsubmit: SubmitHandler<ITurn> = (data) => {
    // //   dispatch(signinUser(data));
    //   navigate("/turns");
    // };

  return (
    <div>
      <h1>New Turn</h1>

      <form action="">
        <label htmlFor="">Date</label>
        <input type="date" />

        <label htmlFor="">Time</label>
        <input type="time" />   

        <label htmlFor="">Time End</label>
        <input type="time" />

        <input type="submit" />
      </form>

    </div>
  )
}

export default NewTurn
