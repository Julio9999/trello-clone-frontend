import { Button } from "@/components/ui/button";
import { CgMenuGridR } from "react-icons/cg";
import { FaTrello } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { RxChevronDown } from "react-icons/rx";

export const NavbarTop = () => {
  return (
    <section className="bg-primary flex items-center px-4 py-2 gap-4">
      <CgMenuGridR size={23} />
      <div className="flex items-center gap-1">
        <FaTrello />
        <strong className="font-black">Trello</strong>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center gap-2 bg-trelloDarkLight px-3 py-1 rounded-sm text-sm">
          <p className="font-semibold">Más</p>
          <RxChevronDown size={20} />
        </div>

        <Button className="bg-trelloBlue text-primary rounded-sm py-0 px-1.5">
          <HiOutlinePlus size={20} />
        </Button>

      </div>

      <div>
        <IoIosSearch className="text-trelloBlue" size={22} />
      </div>

    </section>


  )
}
