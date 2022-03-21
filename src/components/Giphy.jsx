import { useContext } from 'react'
import { AppContext } from '../App'

export default function Giphy() {
    const context = useContext(AppContext)

    return (
        <div className={`max-h-fit px-2`}>
            <img className="rounded-xl" src={context.data.images.original.url} alt={context.data.title} />
        </div>
    )
}