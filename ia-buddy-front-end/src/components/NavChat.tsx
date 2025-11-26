import { useParams } from "react-router-dom"

export function NavChat({ name,id, onClick } : { id:number,name:string, onClick:(id: number) => void }){
    const params = useParams()
    const isActif = params.id ? parseInt(params.id)==id : false
    return(
        <button disabled={isActif} onClick={()=> onClick(id)} 
        className={ `${isActif? "bg-red-8":""} m-2 p-2 hover:bg-red-8 rounded-md`}>
            {name}
        </button>
    )
}