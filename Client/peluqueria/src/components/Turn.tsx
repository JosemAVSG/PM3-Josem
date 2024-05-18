import { ITurn } from "../types/turn.interface"

const Turn = ( props : ITurn ) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Descripción</th>
          <th scope="col">Hora de inicio</th>
          <th scope="col">Hora de fin</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.description}</td>
          <td>{ props.horario.time.toString()}</td>
          <td>{props.status===true? "Activo" : "Inactivo"}</td>

        </tr>
      </tbody>
    </table>
  )
}

export default Turn