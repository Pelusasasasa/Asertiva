
interface Props {
    title: string,
    span: string,
    items: Array<string>,
    icon: React.ElementType,
    bgColorIcon: string,
    textColorIcon: string
}

const ServicioCard = ({title, span, items, icon: Icon, bgColorIcon, textColorIcon} : Props) => {
  return (
    <div className="rounded-lg border border-gray-600 shadow-sm hover:shadow-lg trasintion-shadow ">

        <div className="flex flex-col space-y-1.5 p-6">
            <div className={`${bgColorIcon} w-12 h-12  rounded-lg flex items-center justify-center mb-0`}>
                <Icon className={textColorIcon}/>
            </div>

            <div className="flex flex-col space-y-1.5 px-6 py-3">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
                <p className="text-sm text-gray-600">{span}</p>        
            </div>
        </div>
        <div className="px-6 py-2 pt-0">
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