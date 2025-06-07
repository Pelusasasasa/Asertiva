import React from 'react'
import { TeamCard } from './TeamCard'

const miembros = [
    {
        nombre: "Melisa Marsilli",
        rol: "Directora General",
        descripcion: "Especialista en branding y estrategia creativa con 8 años de experiencia."
    },
    {
        nombre: "Ojeda Sofia",
        rol: "Manejo de redes",
        descripcion: "Community manager especializada en estrategias de redes sociales."
    },
]

export const Team = () => {
  return (
    <div className='container mx-auto px-4'>
        <main className='flex flex-col justify-center'>

            <div className='mb-16 text-center '>
                <h2 className='text-4xl font-bold text-gray-900 mb-4'>Nuestro Equipo</h2>
                <p className='text-xl text-gray-600 max-w-2xl mx-auto'>Profesionales apasionados por el marketing digital y el crecimiento empresarial</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    miembros.map((elem) => (
                        <TeamCard key={elem.nombre} {...elem}/>
                    ))
                }
            </div>
        </main>
        
    </div>
  )
}
