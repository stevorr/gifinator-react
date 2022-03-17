import { useContext } from 'react'
import { AppContext } from '../App'

export default function Giphy() {
    const context = useContext(AppContext)

    return (
        <div className={`m-3`}>
            <img src={context.data.images.original.url} alt={context.data.title} />
        </div>
    )
}