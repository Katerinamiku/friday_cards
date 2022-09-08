import axios from "axios";
//---------------TYPES-----------------

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}
export enum TasksPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

//-------------API & Settings-----------
const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": ''
    }
}
const instance = axios.create({
    baseURL: 'https://someurltralala/',
    ...settings
})

export const API = {
    getTodolists() {
        return instance.get('todo-lists')
    },
    createTodolists(title: string) {
        return instance.post('todo-lists', {title: title})
    },
    deleteTodolists(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolists(title: string, todolistId: string) {
        return instance.put(`todo-lists/${todolistId}`, {title: title})
    }
}
//----------------DRAFT!!!!-------------
