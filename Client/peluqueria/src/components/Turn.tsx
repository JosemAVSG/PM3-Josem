import { ITurn } from "../types/turn.d"

const Turn = ( props : ITurn ) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.id}</p>
    </div>
  )
}

export default Turn