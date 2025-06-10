import Image from 'next/image'
import { useRouter } from 'next/router'

export const About = () => {
    const { basePath } = useRouter();

    console.log(basePath)
  return (
    <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <main className='items-center text-center'>
                <h2 className='text-4xl text-center font-bold text-gray-900 mb-4'>Sobre nuestra Agencia</h2>
                <p className='text-xl text-gray-600 max-w-2xl mx-auto'>Somos una agencia especializada en redes sociales,
                    consultoría estratégica y diseño de marca. 
                    Nos enfocamos en crear conexiones auténticas entre las marcas y sus audiencias.
                </p>
                <br /> 
                <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                    Nuestro enfoque se basa en la combinación perfecta entre creatividad, estrategia y autenticidad.
                    Creemos que cada marca tiene una historia única que contar,
                    y nosotros sabemos cómo contarla de la manera más efectiva en el mundo digital.
                </p>
            </main>

            <picture className='bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8'>
                <Image className='w-full h-auto rounded-lg shadow-lg'  src={`${basePath}/About.jpg`} width={600}  height={400} alt='Agencia'/>
            </picture>
        </div>
    </div>
  )
}
