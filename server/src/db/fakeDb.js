const fakeUser = {
    username: "admin",
    password: "1234",
};
const fakeChats = {
    nextId: 3,
    chats: [
        {
            id: 1,
            name:"Question sur la CAF",
            chat: [
                {
                    question:"Bonjour pourrez tu m'aider à trouver où faire les démarches pour la CAF",
                    reponse:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quae laboriosam! Quod assumenda labore veniam maiores! Repellendus nulla necessitatibus placeat atque obcaecati quod voluptatum odio ad eveniet nam, sunt perspiciatis."
                },{
                    question:"Question ?",
                    reponse:"Reponse suivant lorem ... "
                }
            ]
        },
        {
            id:2,
            name:"Test de chat",
            chat:[
                {
                    question:"Test de mon chat",
                    reponse:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quae laboriosam! Quod assumenda labore veniam maiores! Repellendus nulla necessitatibus placeat atque obcaecati quod voluptatum odio ad eveniet nam, sunt perspiciatis."
                },
                {
                    question:"Test numéro 2",
                    reponse:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, quae laboriosam! Quod assumenda labore veniam maiores! Repellendus nulla necessitatibus placeat atque obcaecati quod voluptatum odio ad eveniet nam, sunt perspiciatis."
                }
            ]
        }
    ]
} 

export const fakeDB = {
    fakeUser : fakeUser,
    fakeChats : fakeChats
}

export const iaReponse = "IA Non implémenter pas de réponse \nMerci d'attendre que l'équipe de développeur et data implemente le chatbot"
