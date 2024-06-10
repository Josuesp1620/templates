import { Earth } from "lucide-react"
import { styles } from "../constants/styles"
import { Link } from "react-router-dom"

export const PanelLayers = ({ helper }: { helper: any }) => {

    return (
        <div className="card h-full ">
            <div className="card-body">
                <h2 className="px-4 mb-1 text-15 text-slate-600">MAP LAYER STYLES</h2>
                <ul className="flex flex-col w-full gap-2 mb-4 text-sm font-medium shrink-0 nav-tabs">
                    {
                        styles.map((style) => (
                            <li className={`group grow ${helper.mapStyle.label === style.label ? 'active' : ''}`} key={style.label}>
                                
                                <Link to={""} onClick={() => helper.setMapStyle(style)} className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500  active:text-custom-500 -mb-[1px]"><Earth className="inline-block size-4 align-middle mr-1" /> <span className="align-middle">{style.label}</span></Link>
                            </li>
                        ))
                    }
                </ul>                            
            </div>
        </div>
    )
}