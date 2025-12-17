import type { Chat } from "../interfaces/Chats"
import { fetch } from "./axiosFetch"

const chatsService = {
    getAllChat: async ()=>{
        return fetch.get<Chat[]>("/chats").then((res) => res.data)
    },
    getByIdChat: async (id:string)=>{
        return fetch.get<Chat>("/chats/"+id).then((res) => res.data)
    },
    setByIdChat: async (id:string, question:string)=>{
        return fetch.put<Chat>("/chats/"+id,{question:question}).then((res)=> res.data)
    },
    newChat: async (chat:Chat) => {
        return fetch.post<Chat>("/chats",chat).then((res)=>res.data)
    }
}
export default chatsService