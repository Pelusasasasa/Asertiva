import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export const Contacto = () => {

    const { basePath } = useRouter();
  return (
    <div className='container mx-auto px-10'>
        <div className='grid lg:grid-cols-4 mb-16 gap-5'>
            <div className='flex flex-col text-gray-400'>
                <div className='flex gap-2 mb-5 items-center'>
                    <Image width={600} height={400} alt='Logo Pie' src={`${basePath}/logo.jpg`} className='w-10 h-10 rounded-full'/>
                    <h3 className=''>Asertiva</h3>
                </div>
                <p className='max-w-2xl'>
                    Tu agencia de marketing digital de confianza para hacer crecer tu negocio.
                </p>
            </div>

            <div className='flex flex-col text-gray-400'>
                
                <h4 className='mb-5 text-white'>Servicios</h4>

                <ul className='space-y-2 text-gray-400'>
                    <li>Redes sociales</li>
                    <li>Community Management</li>
                    <li>Consultoria Estrategica</li>
                    <li>Diseño & Branding</li>
                </ul>
            </div>

            <div>
                <h4 className='mb-5 text-white'>Empresa</h4>

                <ul className='space-y-2 text-gray-400'>
                    <li>Sobre Nosotros</li>
                    <li>Nuestro Equipo</li>
                </ul>
            </div>

            <div>
                <h4 className='mb-5 text-white'>Contacto</h4>

                <ul className='space-y-2 text-gray-400'>
                    <li>info@asertiva.com.ar</li>
                    <li>+54 (3456) 445977</li>
                    <li>Calle Urquiza (3380)</li>
                    <li>Chajari, Argentina</li>

                </ul>
            </div>
        </div>

        <hr className='text-gray-500'/>

        <div>
            <h2 className='text-center text-gray-400 pt-5'>
                ©{new Date().getFullYear()} Asertiva. Todos los derechos reservados.
            </h2>
        </div>
    </div>
  )
}
