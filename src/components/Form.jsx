import { SearchIcon } from '@heroicons/react/solid'
import { useState, useContext } from 'react'
import { AppContext } from '../App'

export default function Form() {
    const context = useContext(AppContext)
    const [input, setInput] = useState('')

    const handleEnterPress = (e) => {
        e.key === 'Enter' && handleSubmit()
    }

    const handleSubmit = () => {
        context.setQuery(input)
        setInput('')
    }

    return (
        <div className="form-control">
            <div className="input-group input-group-sm">
                <input type="text"
                    placeholder="Search…"
                    className="input input-bordered input-sm focus:outline-none"
                    value={input.query}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => handleEnterPress(e)} />
                <button className="btn btn-square btn-sm" onClick={handleSubmit}>
                    <SearchIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}