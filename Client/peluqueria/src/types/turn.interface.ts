 export interface ITurn {
    id: number
    description: string
    status: boolean
    user:number
    horario:{
        id: number
        name: string
        date: Date
        time: Date
        timeEnd: Date
        userId: number
    }
    historial: number

}

export interface  turnDto{
     dia: string
     time: Date
     timeEnd: Date
     userId: number
     description: string
}