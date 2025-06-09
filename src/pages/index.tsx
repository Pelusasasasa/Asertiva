import { About } from "@/components/About"
import { Contacto } from "@/components/Contacto"
import { Form } from "@/components/Form"
import ServicioCard from "@/components/ServicioCard"
import { Team } from "@/components/Team"
import { CiPen } from "react-icons/ci"
import { FiUsers } from "react-icons/fi"
import { VscMegaphone } from "react-icons/vsc"

 const servicios = [
  {
    title: "Redes Sociales",
    span: "Gesiton completa de redes sociales y community management",
    icon: VscMegaphone,
    bgColorIcon: 'bg-pink-100',
    textColorIcon: 'text-pink-600',
    items: [
      "Estrategia de contenido personalizada",
      "Community management profesional",
      "Análisis de métricas y engagement",
      "Gestión de crisis y reputación online",
      "Creación de contenido visual"
    ]
  },
  
  {
    title: "Consultoría Estratégica",
    span: "Asesoramiento personalizado para el crecimiento y posicionamiento de tu marca",
    icon: FiUsers,
    bgColorIcon: "bg-blue-100",
    textColorIcon: "text-blue-600",
    items: [
      "Análisis de mercado y competencia",
      "Estrategia de marca y posicionamiento",
      "Plan de marketing digital integral",
      "Mentoring empresarial",
      "Optimización de procesos",
      "Roadmap de crecimiento"
    ]
  },
  {
    title: "Diseño & Branding",
    span: "Creación de identidad visual única y materiales de comunicación impactantes",
    icon: CiPen,
    bgColorIcon: 'bg-green-100',
    textColorIcon: 'text-green-600',
    items: [
      "Diseño de logotipos y marca",
      "Identidad corporativa completa",
      "Material publicitario y promocional",
      "Diseño para redes sociales",
      "Packaging y etiquetas",
      "Guía de estilo de marca"
    ]
  },

 ]

 const index = () => {
  return (
    <>
      <section className="to-green-100 py-50 bg-gradient-to-br from-green-100">
        <h1 className="text-5xl md:text-6xl mb-6 text-gray-900 font-bold text-center">Impulsa tu marca al 
          <span className="text-transparent bg-clip-text fondo"> siguiente nivel</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 mx-auto max-w-3xl text-center ">Somos una agencia de marketing digital especializada en hacer crecer tu negocio a través de estrategias innovadoras y resultados medibles.</p>
      </section>

      <section className="py-20" id="servicios">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ofrecemos soluciones integrales de marketing digital para hacer crecer tu negocio</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
              servicios.map(elem => (
                <ServicioCard key={elem.title} title={elem.title} span={elem.span} items={elem.items} icon={elem.icon} bgColorIcon={elem.bgColorIcon} textColorIcon={elem.textColorIcon}/>
              ))
            }
           </div>
        </div>
      </section>

      <section id="nosotros" className="py-20 bg-gray-50">
        <About/>
      </section>

      <section id="equipo" className="py-20"> 
        <Team/>
      </section>

      <section id="contacto" className=" fondo">
        <Form/>
      </section>

      <footer id="footer" className="py-20 bg-gray-900">
        <Contacto />
      </footer>
    </>
  )
}


export default index