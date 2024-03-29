import { RiChatNewFill } from "react-icons/ri";
import { GoKebabHorizontal } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";

export default function NavBar() {
  return (
    <nav className="grid grid-cols-8 bg-slate-700 justify-items-end items-center text-gray-200 py-4 px-5">
      <img
        src={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        alt="#"
        className="h-12 w-12 rounded-full justify-self-start col-span-5"
      />
      <IoIosPeople size={35} />
      <RiChatNewFill size={30} />

      <GoKebabHorizontal size={33} style={{ transform: "rotate(90deg)" }} />
    </nav>
  );
}
