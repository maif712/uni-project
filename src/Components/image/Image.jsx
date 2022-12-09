
import "./image.css"

export default function Image({url, name}) {
    return (
        <>
            <figure>
                <img src={url} alt="" />
                <span>{name}</span>
            </figure>
        </>
    )
}