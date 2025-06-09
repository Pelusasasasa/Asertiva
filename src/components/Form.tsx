import React from 'react'

export const Form = () => {
  return (
    <div className='container mx-auto px-4 max-w-4xl py-16'>
      <div className='flex flex-col'>

        <div className='text-center text-white'>
          <h2 className='text-4xl pb-5'>Hablemos de tu proyecto</h2>
          <p className='text-2xl pb-5'>
            Cuéntanos sobre tu negocio
            y cómo podemos ayudarte a alcanzar tus objetivos de marketing.
          </p>
        </div>


        <form action="" className='grid md:grid-cols-2 gap-6 bg-white rounded-2xl p-8 shadow-2xl'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor="">
              Nombre Completo * 
            </label>
            <input type="text" name="nombre" id="nombre" placeholder='Tu Nombre'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors'  />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor="">
             Empresa * 
            </label>
            <input type="text" name="empresa" id="empresa" placeholder='Nombre de tu Empresa'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors'  />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor="">
              Email * 
            </label>
            <input type="email" name="email" id="email" placeholder='ejemplo@gmail.com.ar'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors'  />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor="">
              Telefono * 
            </label>
            <input type="text" name="telefono" id="telefono" placeholder='+54 3456 445977'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors'  />
          </div>

          <div className='md:col-span-2'>
            <label htmlFor="mensaje">Cuentanos sobre tu proyecto *</label>
            <textarea name="mensaje" placeholder='Describe tu proyecto, objetivos y como podemos ayudarte' id="mensaje" className='w-full border border-gray-400 rounded-lg p-2' cols={20} rows={5}></textarea>
          </div>

          <div className='md:col-span-2'>
            <button className='fondo w-full py-2 text-lg rounded-lg text-white'>Enviar Consulta</button>
          </div>
        </form>

      </div>
    </div>
  )
}
