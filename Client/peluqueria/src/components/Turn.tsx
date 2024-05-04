import { ITurn } from "../types/turn.interface"

const Turn = ( props : ITurn ) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.date}</td>
          <td>{props.time}</td>
          <td>{props.id}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Turn