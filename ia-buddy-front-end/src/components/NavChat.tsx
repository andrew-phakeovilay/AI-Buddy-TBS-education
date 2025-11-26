import { useParams } from "react-router-dom"
import { DropDownMenu } from "./DropDownsMenu"

export function NavChat({ name,id, isDropDown = true , onClick } : { id:number,name:string, isDropDown?:boolean ,onClick:(id: number) => void }){
    const params = useParams()
    const isActif = params.id ? parseInt(params.id)==id : false
    return(
        <div className={ `${isActif? "bg-vivad-rouge text-white":""} m-2 p-2 hover:bg-vivad-rouge hover:text-white rounded-md flex justify-between h-10 group`}>
            <button className="h-full w-[90%]" disabled={isActif} onClick={()=> onClick(id)}>
            {name}</button>
            {
                isDropDown && (<DropDownMenu className="hidden group-hover:block" />)
            }
            
        
        </div>
        
    )
}