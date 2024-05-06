import  DataTable  from 'react-data-table-component'
// import { ITurn } from '../types/turn.interface'


const DatatableComponent = (data) => {
    console.log(data)
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
     
        
        <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
         />
        
        
    )

}

export default DatatableComponent