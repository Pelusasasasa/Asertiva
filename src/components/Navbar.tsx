import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";

const Navbar = () => {
  const { basePath } = useRouter();
  return (
    <header className="border-b-gray-200 border-b flex justify-between px-5">
      <div className="flex gap-2 items-center">
        <Image alt="logo" src={`${basePath}/logo.jpg`} height={50} width={50} className="rounded-full"/>
        <p className="font-bold text-2xl">Acertiva</p>
      </div>
      <nav className="px-6 py-4">
      <ul className="flex gap-6">
        <li className="text-gray-500 hover:text-gray-800 text-xl"><Link href="/">Inicio</Link></li>
        <li className="text-gray-500 hover:text-gray-800 text-xl"><Link href="#servicios">Servicios</Link></li>
        <li className="text-gray-500 hover:text-gray-800 text-xl"><Link href="#nosotros">Nosotros</Link></li>
        <li className="text-gray-500 hover:text-gray-800 text-xl"><Link href="#contacto">Contacto</Link></li>
      </ul>
    </nav>
    </header>
  )
}

export default Navbar


