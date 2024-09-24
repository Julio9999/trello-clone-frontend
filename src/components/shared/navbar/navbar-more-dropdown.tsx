import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { RxChevronDown } from "react-icons/rx"

export const NavbarMoreDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 bg-trelloDarkLight px-3 py-1 rounded-sm text-sm">
                    <p className="font-semibold">Más</p>
                    <RxChevronDown size={20} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary w-[315px] text-trelloWhite">
                <DropdownMenuItem>
                    Espacios de trabajo
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Tableros recientes
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Tableros marcados
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Plantillas
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
