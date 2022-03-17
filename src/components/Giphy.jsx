import { useContext } from 'react'
import { AppContext } from '../App'

export default function Giphy() {
    const context = useContext(AppContext)

    return (
        <div className={`max-h-fit`}>
            <img src={context.data.images.original.url} alt={context.data.title} />
        </div>
    )
}