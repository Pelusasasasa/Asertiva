import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
    nombre: string;
    rol: string;
    descripcion: string;
}

export const TeamCard = ({nombre, rol, descripcion}: Props) => {
    const { basePath } = useRouter();
  return (
    <div className="rounded-lg border border-gray-200  bg-white shadow-sm text-center hover:shadow-lg transition-shadow">
       <div className="p-6 pt-6">
            <picture>
                <Image className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" width={600} height={400} alt={rol} src={`${basePath}/placeholder.svg`}/>
            </picture>

            <h3 className="font-semibold text-lg text-gray-900">{nombre}</h3>
            <p className="text-purple-600 mb-2">{rol}</p>
            <span className="text-gray-600 text-center">{descripcion}</span>
       </div>
    </div>
  )
}
