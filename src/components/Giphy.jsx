import { useContext } from 'react'
import { AppContext } from '../App'

export default function Giphy() {
    const context = useContext(AppContext)

    return (
        <div className={`max-h-fit px-2 min-w-[40%]`}>
            <img className="shadow rounded-xl w-full" src={context.data.images.original.url} alt={context.data.title} />
        </div>
    )
}