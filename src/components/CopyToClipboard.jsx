export default function CopyToClipboard({ data }) {

    const copy = async () => {
        await navigator.clipboard.writeText(data.data[0].images.original.url);
    }

    return data &&
        <button className="btn btn-sm gap-2" onClick={copy}>
            Copy to Clipboard
        </button>
}