import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { basePath } = useRouter();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <header className="relative z-30 border-b">

      <div className="border-b-gray-200 border-b flex justify-between px-5">
        <div className="flex gap-2 items-center py-2">
        <Image alt="logo" src={`${basePath}/logo.jpg`} height={40} width={40} className="rounded-full sm:w-12 sm:h-12" />
        <p className="font-bold text-2xl">Asertiva!</p>
      </div>

      <nav className="px-6 py-4 hidden sm:block">
        <ul className="flex gap-6">
          <li className="text-gray-500 hover:text-gray-800 text-xl"><Link href="#servicios">Servicios</Link></li>
          <li className="text-gray-500 hover:text-gray-800 text-xl"><Link href="#nosotros">Nosotros</Link></li>
          <li className="text-gray-500 hover:text-gray-800 text-xl"><Link href="#equipo">Equipo</Link></li>
          <li className="text-gray-500 hover:text-gray-800 text-xl"><Link href="#contacto">Contacto</Link></li>
        </ul>
      </nav>

      <div className="flex justify-center items-center sm:hidden">
        {!openMenu && <AiOutlineMenu size={25} onClick={handleMenu}/>}
        {openMenu && <MdOutlineClose size={25} onClick={handleMenu}/>}
      </div>
      </div>

      <div className={`absolute top-full left-0 right-0 z-20 p-2 shadow-lg bg-white ${openMenu ? 'flex' : 'hidden'} `}>
        <div className="container px-4 mx-auto">
          <ul className={`flex-col flex space-y-4`}>
            <li className="text-gray-500 border-b-1 border-gray-200 hover:text-gray-800 text-xl pb-2"><Link onClick={() => setOpenMenu(false)} href="#servicios">Servicios</Link></li>
            <li className="text-gray-500 border-b-1 border-gray-200 hover:text-gray-800 text-xl pb-2"><Link onClick={() => setOpenMenu(false)} href="#nosotros">Nosotros</Link></li>
            <li className="text-gray-500 border-b-1 border-gray-200 hover:text-gray-800 text-xl pb-2"><Link onClick={() => setOpenMenu(false)} href="#equipo">Equipo</Link></li>
            <li className="text-gray-500 hover:text-gray-800 text-xl pb-2"><Link onClick={() => setOpenMenu(false)} href="#contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>
    
    </header>
  )
}

export default Navbar


