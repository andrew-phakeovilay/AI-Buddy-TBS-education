import { ElDropdown, ElMenu } from "@tailwindplus/elements/react";
import { MoreSVG } from "../svgs/MoreSVG";
import { DeleteSVG } from "../svgs/DeleteSVG";

export function DropDownMenu({ className = "" } ){
    return(
        <div className={className}>
            <ElDropdown className="inline-block">
            <button className="inline-flex">
                <MoreSVG color="fill-custom-12"/>
            </button>
            <ElMenu anchor="bottom end" popover className="w-56 origin-top-right 
          divide-y divide-white/10 
          rounded-md 
          bg-vivad-rouge 
          outline-1 -outline-offset-1 outline-white/10 
          transition transition-discrete
          [--anchor-gap:--spacing(2)]  
          data-closed:scale-95 
          data-closed:transform 
          data-closed:opacity-0
          data-enter:duration-100 data-enter:ease-out 
          data-leave:duration-75 data-leave:ease-in" >
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-black focus:bg-white/5 focus:text-black focus:outline-hidden text-center" >Edit</a>
                    <a href="#" className="block px-4 py-2 text-sm text-red-800 focus:bg-white/5 focus:text-red-800 focus:outline-hidden "><div className="flex justify-center gap-1 hover:fill-red-800 fill-red-800 "><DeleteSVG color="fill-red-800"/> Supprimer</div></a>
                </div>
            </ElMenu>
        </ElDropdown>
        </div>
        
    )
}