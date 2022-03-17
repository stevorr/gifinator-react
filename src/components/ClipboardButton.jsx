import { ClipboardIcon } from '@heroicons/react/solid'
import { useState, useContext } from 'react'
import { AppContext } from '../App'

export default function CopyToClipboard() {
    const context = useContext(AppContext)
    const [tooltip, setTooltip] = useState(false)

    const copy = async () => {
        if (context.data) {
            await navigator.clipboard.writeText(context.data.images.original.webp);
            showToolTip()
        }
    }

    const showToolTip = () => {
        setTooltip(true)
        setTimeout(() => setTooltip(false), 1300);
    }

    return (
        <div className={`${tooltip && 'tooltip tooltip-primary tooltip-open'}`} data-tip="Copied!">
            <button className="btn btn-sm gap-2" onClick={copy}>
                <ClipboardIcon className="w-4 h-4" /><span>Copy</span>
            </button>
        </div>
    )
}