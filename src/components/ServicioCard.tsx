
interface Props {
    title: string,
    span: string,
    items: Array<string>
}

const ServicioCard = ({title, span, items} : Props) => {
  return (
    <div className="rounded-lg border border-gray-600 shadow-sm hover:shadow-lg trasintion-shadow ">
        <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
            <p className="text-sm text-gray-600">{span}</p>
            
        </div>
        <div className="p-6 pt-0">
            <ul className="space-y-2 text-sm text-gray-600">
                {
                    items.map(item => (
                        <li key={item}>. {item}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default ServicioCard