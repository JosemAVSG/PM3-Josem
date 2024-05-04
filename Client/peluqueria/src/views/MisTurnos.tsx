import { turnos } from "../helpers/misturnos";
import { useEffect, useState } from "react";
import Turn from "../components/Turn";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { ITurn } from "../types/turn.interface";
import { turnsAction } from "../reducers/authSlice";
import styles from "../styles/turns.module.scss";
// import { IUser } from "../types/user.interface";
const MisTurnos = () => {
  const dispatch = useAppDispatch();
  const turns = useAppSelector((state) => state.auth.userTurns);
  const user = useAppSelector((state) => state.auth.user);
  const [turn, setTurns] = useState<ITurn[]>([]);

  useEffect(() => {
    if(user){
      const {user:{id}} = user 
    dispatch(turnsAction(id ));
  }
  },[ dispatch, user ]);
  console.log( turns);

  useEffect(() => {
    if(turns){
      setTurns(turns);
    }
    setTurns(turnos);
  },[turns]);
  return (
    <>
  <div className={styles.container}>
    <div className={styles.turns}>
      {turn.map((turn) => (
        <Turn key={turn.id} {...turn} />
      ))}
    </div>
    
      </div>    
    
    </>
  );
};

export default MisTurnos;
