import { Router } from "express";
import { fakeDB, iaReponse } from "../db/fakeDb.js";
const router = Router();

router.get("/",(req,res)=>{
    const chats = fakeDB.fakeChats.chats
    return res.status(201).json(chats)
})
router.get("/:id",(req,res)=>{
    const chat = fakeDB.fakeChats.chats.find(c => c.id==req.params.id)
    if(!chat){
        return res.status(401).json({error:"Chat not found"})
    }
    res.json(chat)
})
router.post("/",(req,res)=>{
    let chat = req.body
    chat.id = fakeDB.fakeChats.nextId
    // IA peu changer le name par rapport au contenu de la question il doit mettre un name pas trop long
    chat.name = chat.name+chat.id
    chat.chat[0].reponse = iaReponse
    fakeDB.fakeChats.nextId+=1
    fakeDB.fakeChats.chats.push(chat)
    res.json(fakeDB.fakeChats.chats.find(c=>c.id==req.body.id))
})
router.put("/:id",(req,res)=>{
    const chat = fakeDB.fakeChats.chats.find(c => c.id==req.params.id)
    if(!chat){
        return res.status(401).json({error:"Chat not found"})
    }
    chat.chat.push({question: req.body.question,reponse:iaReponse})
    //const i = fakeDB.fakeChats.chats.findIndex(c => c.id==chat.id)
    res.json(chat)
})

export default router;