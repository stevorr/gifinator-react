import { useContext } from 'react'
import { AppContext } from '../App'

export default function Giphy() {
    const context = useContext(AppContext)

    return context.data &&
        <div className="m-3">
            <img src={context.data.data[0].images.original.url} alt={context.data.data[0].title} />
        </div>
}