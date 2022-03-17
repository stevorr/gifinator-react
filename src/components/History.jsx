import { useContext } from 'react'
import { AppContext } from '../App'

export default function History() {
    const context = useContext(AppContext)

    return (
        <div className=" items-center carousel carousel-vertical rounded-box">
            {context.history.map((item, i) => {
                return item &&
                    <div className="carousel-item h-40" key={i}>
                        <img src={item.images.original.url} alt={item.title} />
                    </div>
            })}
        </div>
    )
}