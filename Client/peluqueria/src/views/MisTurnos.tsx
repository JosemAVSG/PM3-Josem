// import { turnos } from "../helpers/misturnos";
import { useEffect, useState } from "react";
// import Turn from "../components/Turn";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { ITurn } from "../types/turn.interface";
import { turnsAction } from "../reducers/authSlice";
import styles from "../styles/turns.module.scss";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
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


  useEffect(() => {
    if(turns && turns.length > 0){
      setTurns(turns);
    }else{
      setTurns([]);
    }
  },[turns,turn]);
  
  const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Descripción',
        selector: row => row.description,
        sortable: true,
    },
    {
        name: 'Hora de inicio',
        selector: row => row.horario.time.toString(),
        sortable: true,
    },
    {
        name: 'Hora de fin',
        selector: row => row.horario.timeEnd.toString(),
        sortable: true,
    },
    {
        name: 'Estado',
        selector: row => row.status === true ? "Activo" : "Inactivo",
        sortable: true,
    },
    {
        name: 'Acciones',
        cell: (row) => <button onClick={() => console.log(row)}>Editar</button>,
    }
]
  
  return (
    <>
  <div className={styles.container}>
    <div>
      <h2>Agregar turno</h2>
      <Link to="/turnForm">+</Link>
    </div>
{/* 
    <div className={styles.turns}>
      { turns?.length === 0 ? (<h2>No tienes turnos</h2> ) : (turn?.map((turn) => (
        <Turn key={turn.id} {...turn} />
      )))}
    </div> */}
    <div className={styles.turns}>
      { turns?.length === 0 ? (<h2>No tienes turnos</h2> ) : (
        
        <DataTable
        columns={columns}
        data={turn}
        pagination
        highlightOnHover
     />


      )}
    </div>
      </div>    
    
    </>
  );
};

export default MisTurnos;
