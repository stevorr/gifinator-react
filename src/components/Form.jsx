import { SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react'

export default function Form({ setQuery }) {
    const [input, setInput] = useState('')

    const handleEnterPress = (e) => {
        e.key === 'Enter' && handleSubmit()
    }

    const handleSubmit = () => {
        setQuery(input)
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