import { useCallback, useState, useEffect, Fragment } from "react";
import { NavChat } from "../components/NavChat";
import { MenuSVG } from "../svgs/MenuSVG";
import { CloseSVG } from "../svgs/CloseSVG";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import type { Chat } from "../interfaces/Chats";
import chatsService from "../services/ChatsService";

export function ChatPage() {
    const { t } = useTranslation();
    const [chats, setChats] = useState<Chat[]>([])
    const { id } = useParams()
    const [chat, setChat] = useState<Chat>()
    const { user } = useAuth()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const params = useParams()

    const [message, setMessage] = useState("");
    const handleSend = () => {
        if (!message.trim()) return;
        if (id) {
            if (id == "0") {
                chatsService.newChat({id:0, name:"Chat n°",chat:[{question:message,reponse:""}]}).then((c)=>{
                    navigate("/chat/"+c.id)
                })
            } else {
                chatsService.setByIdChat(id, message).then((c) => {
                    setChat(c)
                })
            }

        }


        setMessage(""); // reset textarea
    };
    // HandleKeyDown -> Tapé Entree pour send 
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    // 
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);

        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };
    if (!id) {
        return (
            <>

            </>
        )
    }
    useEffect(() => {
        chatsService.getByIdChat(id).then(c => {
            setChat(c)
        })
    }, [setChat, navigate])

    useEffect(() => {
        chatsService.getAllChat().then(listChat => {
            setChats(listChat)
            console.log(listChat)
        })
    }, [setChats,navigate])
    /*
    useEffect(() => {
        if (!user) {
        navigate("/login");
        }
    }, [navigate]);
    */
    const onClick = useCallback((id: number) => {
        setOpen(false)
        navigate("/chat/" + id)
    }, [navigate])






    return (

        <div className="flex h-full flex-col md:flex-row">

            <aside className={`${open ? "fixed left-0 z-40 w-64" : "hidden"} md:static md:block  w-full md:w-80 bg-rouge-bg2 text-noir`}>

                <div className={`${open ? "absolute" : "hidden"} md:hidden top-4 left-4`}
                    onClick={() => { setOpen(false) }}>
                    <CloseSVG />
                </div>

                <nav className={`mt-10 flex flex-col `}>

                    <NavChat onClick={onClick} id={0} name={t("new-chat")} isDropDown={false} />
                    {chats.map((chat) => (
                        <NavChat key={chat.id} onClick={onClick} id={chat.id} name={chat.name} />
                    ))}

                </nav>
            </aside>

            {
                chat ? <div className="relative flex flex-1 h-full w-full flex-col bg-rouge-bg text-noir">
                    <div className={`${open ? "hidden" : "absolute"} m-4 md:hidden z-10`}
                        onClick={() => { setOpen(true) }}>
                        <MenuSVG />
                    </div>
                    <div className="text-center m-4 border-b-2 border-vivad-rouge pb-2">
                        <h1>AI Buddy</h1>
                    </div>
                    <main className="relative flex flex-col h-full flex-1 overflow-hidden">
                        {
                            params.id != "0" ?
                                <div className="flex flex-col overflow-auto pb-20 mb-20">
                                    {chat.chat.map((c, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <div className="bg-vivad-rouge text-white m-4 p-4 ml-[30%] rounded-lg whitespace-pre-line">{c.question} </div>
                                                <div className="bg-vivad-rouge text-white m-4 p-4 mr-[20%] rounded-lg whitespace-pre-line">{c.reponse} </div>
                                            </Fragment>
                                        )
                                    })}
                                </div> :
                                <h1 className="mx-auto mt-[13%] mb-5 text-2xl font-semibold">En quoi puis-je vous aidez?</h1>
                        }

                        <textarea
                            id="chat"
                            name="chat"
                            rows={1}
                            value={message}
                            onChange={handleInput}
                            onKeyDown={handleKeyDown}
                            placeholder={t("ask-prompt")}
                            className={`
                                resize-none overflow-hidden
                                text-white bg-rouge p-3
                                w-9/12 sm:w-1/2
                                rounded-2xl shadow-lg shadow-rouge
                                focus:outline-none
                                ${params.id == "0"
                                    ? "mx-auto"
                                    : "absolute z-20 bottom-20 md:bottom-20 left-1/2 -translate-x-1/2"
                                }
  `}
                        />

                    </main>
                </div> : <div></div>
            }


        </div>
    )
}
