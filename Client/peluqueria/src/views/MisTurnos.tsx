import { turnos } from "../helpers/misturnos";
import { useEffect, useState } from "react";
import Turn from "../components/Turn";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { ITurn } from "../types/turn.interface";
import { turnsAction } from "../reducers/authSlice";
// import { IUser } from "../types/user.interface";
const MisTurnos = () => {
  const dispatch = useAppDispatch();
  const turns = useAppSelector((state) => state.auth.userTurns);
  // const user = useAppSelector((state) => state.auth.user);
  const [turn, setTurns] = useState<ITurn[]>([]);

  useEffect(() => {
    dispatch(turnsAction());
  },[ dispatch]);
  console.log( turns);

  useEffect(() => {
    setTurns(turnos);
  },[]);
  return (
    <div>
      {turn.map((turn) => (
        <Turn key={turn.id} {...turn} />
      ))}
      <h2>hola</h2>
    </div>
  );
};

export default MisTurnos;
