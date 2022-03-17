import { ClockIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import { AppContext } from '../App'

export default function ShowHistoryButton() {
    const context = useContext(AppContext)

    return (
        <button htmlFor="my-drawer-4" className="btn btn-sm gap-2"
            onClick={() => context.setDrawerOpen(true)}>
            <ClockIcon className="w-4 h-4" />
            <span>History</span>
        </button>
    )
}