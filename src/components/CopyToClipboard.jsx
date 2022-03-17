import { useContext } from 'react'
import { AppContext } from '../App'

export default function CopyToClipboard() {
    const context = useContext(AppContext)

    const copy = async () => {
        await navigator.clipboard.writeText(context.data.data[0].images.original.url);
    }

    return context.data &&
        <button className="btn btn-sm gap-2" onClick={copy}>
            Copy to Clipboard
        </button>
}