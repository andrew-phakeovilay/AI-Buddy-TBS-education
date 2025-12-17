import { useCallback, useState, useEffect } from "react";
import { NavChat } from "../components/NavChat";
import { MenuSVG } from "../svgs/MenuSVG";
import { CloseSVG } from "../svgs/CloseSVG";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserStore } from "../context/auth";
import { useAuth } from "../context/AuthContext";

export function ChatPage() {
    const { t } = useTranslation();
    const { user } = useAuth()
    const [open,setOpen] = useState(false)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (!user) {
        navigate("/login");
        }
    }, [navigate]);

    const onClick = useCallback((id:number)=>{
        setOpen(false)
        navigate("/chat/"+id)
    },[navigate])


    



    return (

        <div className="flex h-full flex-col md:flex-row">
            
            <aside className={`${open?"fixed left-0 z-40 w-64":"hidden"} md:static md:block  w-full md:w-80 bg-rouge-bg2 text-noir`}>

                <div className={`${open?"absolute":"hidden"} md:hidden top-4 left-4`}
                onClick={()=>{setOpen(false)}}>
                    <CloseSVG/>
                </div>
                
                <nav className={`mt-10 flex flex-col `}>

                    <NavChat onClick={onClick} id={0} name={t("new-chat")} isDropDown={false}/>
                    <NavChat onClick={onClick} id={1} name="Chat 1"/>
                    <NavChat onClick={onClick} id={2} name="Chat 2"/>
                    <NavChat onClick={onClick} id={3} name="Chat 3"/>
                </nav>
            </aside>

            
            <div className="relative flex flex-1 h-full w-full flex-col bg-rouge-bg text-noir">
                <div className={`${open?"hidden":"absolute"} m-4 md:hidden z-10`}
                onClick={()=>{setOpen(true)}}>
                    <MenuSVG/>
                </div>
                <div className="text-center m-4 border-b-2 border-vivad-rouge pb-2">
                    <h1>AI Buddy</h1>
                </div>
                <main className="relative flex flex-col h-full flex-1 overflow-hidden">
                    {
                        params.id != "0" ?
                        <div className="flex flex-col overflow-auto pb-20 mb-20">
                            <div className="bg-vivad-rouge text-white m-4 p-4 ml-[30%] rounded-lg">Bonjour pourrez tu m'aider à trouver où faire les démarches pour la CAF</div>
                            <div className="bg-vivad-rouge text-white m-4 p-4 mr-[20%] rounded-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quae laboriosam! Quod assumenda labore veniam maiores! Repellendus nulla necessitatibus placeat atque obcaecati quod voluptatum odio ad eveniet nam, sunt perspiciatis.</div>
                            <div className="bg-vivad-rouge text-white m-4 p-4 ml-[30%] rounded-lg">Bonjour pourrez tu m'aider à trouver où faire les démarches pour la CAF</div>
                            <div className="bg-vivad-rouge text-white m-4 p-4 mr-[20%] rounded-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quae laboriosam! Quod assumenda labore veniam maiores! Repellendus nulla necessitatibus placeat atque obcaecati quod voluptatum odio ad eveniet nam, sunt perspiciatis.</div>
                        </div>:
                        <h1 className="mx-auto mt-[13%] mb-5 text-2xl font-semibold">En quoi puis-je vous aidez?</h1>
                    }
                    
                    <input id="chat" name="chat" type="text" 
                    className={`${params.id=="0"?"mx-auto ":"absolute z-20 bottom-25 md:bottom-20 -translate-x-1/2"}  text-white bg-rouge p-2 w-9/12 sm:w-1/2 left-1/2 rounded-2xl shadow-lg shadow-rouge`} 
                    placeholder={t("ask-prompt")} />

                </main>
            </div>
            
        </div>
    )
}
