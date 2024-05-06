// import { turnos } from "../helpers/misturnos";
import { useEffect, useState } from "react";
// import Turn from "../components/Turn";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { ITurn } from "../types/turn.interface";
import { cancelTurnAction, turnsAction } from "../reducers/authSlice";
import styles from "../styles/turns.module.scss";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus,faTrash} from "@fortawesome/free-solid-svg-icons";



const MisTurnos = () => {
  const dispatch = useAppDispatch();
  const userid = useAppSelector((state) => state.auth.userId);
  const turns = useAppSelector((state) => state.auth.userTurns);
  const user = useAppSelector((state) => state.auth.user);
  const [turn, setTurns] = useState<ITurn[]>([]);

  useEffect(() => {
    if (user) {
      const {
        user: { id },
      } = user;
      dispatch(turnsAction(id));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (turns && turns.length > 0) {
      setTurns(turns);
    } else {
      setTurns([]);
    }
  }, [turns, turn]);

  const handleDelete = (id: number) => {
    if(userid){

      dispatch(cancelTurnAction(id,userid ));
    }
    else{
      return;
    }
  };

  const columns = [
   
    {
      name: "Descripción",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: `Hora de inicio`,
      selector: (row) => row.horario.time.toString(),
      sortable: true,
    },
    {
      name: "Hora de fin",
      selector: (row) => row.horario.timeEnd.toString(),
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => (row.status === true ? "Activo" : "Inactivo"),
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => <button onClick={() => handleDelete(row.id) }><FontAwesomeIcon className="size-6" icon={faTrash} /></button>,
  
    },
  ];

  return (
    <>
    <div className="h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#043946_100%)]  " > 
  
      <div className={styles.container}>
        <Link to="/turnForm" className={styles.button}>
          <h2>Agregar turno</h2>
          {<FontAwesomeIcon icon={faCalendarPlus} />}
        </Link>

        {/* 
    <div className={styles.turns}>
      { turns?.length === 0 ? (<h2>No tienes turnos</h2> ) : (turn?.map((turn) => (
        <Turn key={turn.id} {...turn} />
      )))}
    </div> */}
        <div className={styles.turns}>
          {turns?.length === 0 ? (
            <h2>No tienes turnos</h2>
          ) : (
            <DataTable
              title="Mis turnos"
              columns={columns}
              data={turn}
              pagination
              highlightOnHover
              responsive
             
            />
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default MisTurnos;
