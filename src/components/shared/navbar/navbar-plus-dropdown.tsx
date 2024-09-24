import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FaTrello } from "react-icons/fa"
import { HiOutlinePlus } from "react-icons/hi"
export const NavbarPlusDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="bg-trelloBlue text-primary rounded-sm py-0 px-1.5 border-none" variant="outline">
                    <HiOutlinePlus size={20} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary w-[315px] text-trelloWhite py-3 px-2">
                <DropdownMenuItem className="flex gap-2 items-start flex-col">
                    <div className="flex items-center gap-2 pl-1">
                        <FaTrello />
                        <p className="text-sm">Crear Tablero</p>
                    </div>
                    <div>
                        <p className="text-xs">Un tablero es un conjunto de tarjetas ordenadas en listas. Úsalo para gestionar proyectos, realizar un seguimiento de la información u organizar cualquier actividad.</p>
                    </div>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex gap-2 items-start flex-col">
                    <div className="flex items-center gap-2 pl-1">
                        <FaTrello />
                        <p className="text-sm">Empieza con una plantilla</p>
                    </div>
                    <div>
                        <p className="text-xs">Ponte en marcha más rápido con una plantilla de tablero.</p>
                    </div>
                </DropdownMenuItem>
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
