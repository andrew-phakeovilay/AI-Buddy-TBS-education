import { useCallback, useState, useEffect } from "react";
import { NavChat } from "../components/NavChat";
import { MenuSVG } from "../svgs/MenuSVG";
import { CloseSVG } from "../svgs/CloseSVG";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserStore } from "../context/auth";

export function ChatPage() {
    const { t } = useTranslation();
    
    const [open,setOpen] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const store = UserStore.getInstance();

    useEffect(() => {
        const user = UserStore.getInstance().getUser();

        if (!user) {
        navigate("/login");
        }
    }, [navigate]);

    const onClick = useCallback((id:number)=>{
        setOpen(false)
        navigate("/chat/"+id)
    },[navigate])


    function handleLogout() {
        store.logout();
        navigate("/login");
    }



    return (
        <div className="flex h-full flex-col md:flex-row" data-theme={getTheme(params.id)} >
            <button onClick={handleLogout}>{t("logout")}</button>
            <aside className={`${open?"fixed left-0 z-40 w-64":"hidden"} md:static md:block  w-full md:w-80 bg-custom-1 text-custom-12`}>
                <div className={`${open?"absolute":"hidden"} md:hidden top-4 left-4`}
                onClick={()=>{setOpen(false)}}>
                    <CloseSVG/>
                </div>
                
                <nav className={`mt-10 flex flex-col `}>
                    <NavChat onClick={onClick} id={0} name={t("new-chat")}/>
                    <NavChat onClick={onClick} id={1} name="Chat 1"/>
                    <NavChat onClick={onClick} id={2} name="Chat 2 - Red"/>
                    <NavChat onClick={onClick} id={3} name="Chat 3 - Bleu"/>
                    <NavChat onClick={onClick} id={4} name="Chat 4 - Green"/>
                    <NavChat onClick={onClick} id={5} name="Chat 5 - Sage"/>
                    <NavChat onClick={onClick} id={6} name="Chat 6 - Mint"/>
                </nav>
            </aside>

            
            <div className="relative flex flex-1 h-full w-full flex-col bg-custom-2 text-custom-12">
                <div className={`${open?"hidden":"absolute"} m-4 md:hidden z-10`}
                onClick={()=>{setOpen(true)}}>
                    <MenuSVG/>
                </div>
                <div className="text-center m-4 border-b-2 border-custom-6 pb-2">
                    <h1>AI Buddy</h1>
                </div>
                <main className="relative flex flex-col h-full flex-1 overflow-hidden">
                    {
                        params.id != "0" ?
                        <div className="flex flex-col overflow-auto pb-20 mb-20">
                            <div className="bg-custom-3 m-4 p-4 ml-[30%]">Bonjour pourrez tu m'aider à trouver où faire les démarches pour la CAF</div>
                            <div className="bg-custom-3 m-4 p-4 mr-[20%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quae laboriosam! Quod assumenda labore veniam maiores! Repellendus nulla necessitatibus placeat atque obcaecati quod voluptatum odio ad eveniet nam, sunt perspiciatis.</div>
                            <div className="bg-custom-3 m-4 p-4 ml-[30%]">Bonjour pourrez tu m'aider à trouver où faire les démarches pour la CAF</div>
                            <div className="bg-custom-3 m-4 p-4 mr-[20%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quae laboriosam! Quod assumenda labore veniam maiores! Repellendus nulla necessitatibus placeat atque obcaecati quod voluptatum odio ad eveniet nam, sunt perspiciatis.</div>
                        </div>:
                        <h1 className="mx-auto mt-[13%] mb-5 text-2xl font-semibold">En quoi puis-je vous aidez?</h1>
                    }
                    
                    <input id="chat" name="chat" type="text" 
                    className={`${params.id=="0"?"mx-auto ":"absolute z-20 bottom-25 md:bottom-20 -translate-x-1/2"}  bg-custom-3 p-2 w-9/12 sm:w-1/2 left-1/2  border border-custom-6`} 
                    placeholder={t("ask-prompt")} />
                </main>
            </div>
            
        </div>
    )
}

function getTheme(id:string|undefined){
    
    const theme = "default"
    if(!id) return theme
    switch(id){
        case "0": return "red"
        case "2": return "red"
        case "3": return "bleu"
        case "4": return "green"
        case "5": return "sage"
        case "6": return "mint"
    }
    return theme
}
