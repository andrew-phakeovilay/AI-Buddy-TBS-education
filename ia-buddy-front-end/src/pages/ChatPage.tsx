export function ChatPage(){
    return(
        
        <div className="flex h-full w-full flex-col bg-red-1 text-red-12">
            <div className="text-center m-4 border-b-2 border-red-6 pb-2">
                <h1>AI Buddy</h1>
            </div>
            <main className="relative flex flex-col h-full flex-1 overflow-hidden">
                <div className="flex flex-col overflow-auto pb-20">
                    <div className="bg-red-3 m-4 p-4 ml-[30%]">Bonjour pourrez tu m'aider à trouver où faire les démarches pour la CAF</div>
                    <div className="bg-red-3 m-4 p-4 mr-[20%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quae laboriosam! Quod assumenda labore veniam maiores! Repellendus nulla necessitatibus placeat atque obcaecati quod voluptatum odio ad eveniet nam, sunt perspiciatis.</div>
                    <div className="bg-red-3 m-4 p-4 ml-[30%]">Bonjour pourrez tu m'aider à trouver où faire les démarches pour la CAF</div>
                    <div className="bg-red-3 m-4 p-4 mr-[20%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quae laboriosam! Quod assumenda labore veniam maiores! Repellendus nulla necessitatibus placeat atque obcaecati quod voluptatum odio ad eveniet nam, sunt perspiciatis.</div>
                </div>
                <input type="text" className="absolute bottom-4 bg-red-3 p-2 w-9/12 sm:w-1/2 left-1/2 -translate-x-1/2 border border-red-6" placeholder="Poser une question"/>
            </main>
        </div>
        
    )
}