 export interface ITurn {
    id: number
    description: string
    status: boolean
    user:number
    horario:{
        id: number
        description: string
        date: Date
        time: Date
        userId: number
    }
    historial: number

}

export interface  turnDto{
     dia: Date
     time: Date
     userId: number
     description: string
}