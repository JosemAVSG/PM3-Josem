import { turns } from "../helpers/misturnos";
import { useEffect, useState } from "react";
import Turn from "../components/Turn";
import { ITurn } from "../types/turn.interface";
const MisTurnos = () => {


  const [turn, setTurns] = useState<ITurn[]>([]);

  useEffect(() => {
    setTurns(turns);
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
