export default function Giphy({ data }) {
    return data &&
        <div className="m-3">
            <img src={data.data[0].images.original.url} alt={data.data[0].title} />
        </div>
}