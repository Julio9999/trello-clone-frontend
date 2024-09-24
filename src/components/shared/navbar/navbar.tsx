import { CgMenuGridR } from "react-icons/cg"
import { FaTrello } from "react-icons/fa"
import { IoIosSearch } from "react-icons/io"
import { NavbarMoreDropdown } from "./navbar-more-dropdown"
import { NavbarPlusDropdown } from "./navbar-plus-dropdown"

export const Navbar = () => {
    return (
        <nav>
            <section className="bg-primary flex items-center px-4 py-2 gap-4">
                <CgMenuGridR size={23} />
                <div className="flex items-center gap-1">
                    <FaTrello />
                    <strong className="font-black">Trello</strong>
                </div>
                <div className="flex gap-3 bg-primary">
                    <NavbarMoreDropdown />

                    <NavbarPlusDropdown />

                </div>

                <div>
                    <IoIosSearch className="text-trelloBlue" size={22} />
                </div>

            </section>
        </nav>
    )
}
