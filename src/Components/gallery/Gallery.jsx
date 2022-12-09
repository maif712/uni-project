
import { useEffect, useState } from "react"
import Image from "../image/Image"
import "./gallery.css"

export default function Gallery() {


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    async function getData() {
        const res = await fetch("http://localhost:5000/images")
        const data = await res.json()
        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        // setTimeout(() => {
        //     getData()
        // }, 1000);

        setTimeout(() => {
            setLoading(false)
        }, 1000);

        // getData()
    }, [])


    return (
        <>
            <h1 className="title">Main Gallery</h1>

            {loading ? <div className="loader"></div> : <>

                <div className="main-gallery">
                    <figure className="item4">
                        <img src="../images/dell-Yu0e.jpg" alt="" />
                        <span>anita austvika</span>
                    </figure>
                    <figure className="item4">
                        <img src="../images/lukasz-rawa.jpg" alt="" />
                        <span>roman malik</span>
                    </figure>
                    <figure className="item4">
                        <img src="../images/nathan-watson.jpg" alt="" />
                        <span>vasilina sirotina</span>
                    </figure>
                    <figure className="item4">
                        <img src="../images/tom-morbey.jpg" alt="" />
                        <span>steve johnson</span>
                    </figure>
                </div>
                <div className="main-gallery">
                    <figure className="item4">
                        <img src="../images/anita-austvika.jpg" alt="" />
                        <span>anita austvika</span>
                    </figure>
                    <figure className="item4">
                        <img src="../images/roman-malik.jpg" alt="" />
                        <span>roman malik</span>
                    </figure>
                    <figure className="item4">
                        <img src="../images/vasilina-sirotina.jpg" alt="" />
                        <span>vasilina sirotina</span>
                    </figure>
                    <figure className="item4">
                        <img src="../images/steve-johnson.jpg" alt="" />
                        <span>steve johnson</span>
                    </figure>
                </div>
            </>
            }
            {/* <div className="col">
                <div className="main-gallery">
                    {loading ? <div className="loader"></div> : <>
                        {data.map(image => {
                            return (
                                <Image key={image.id} {...image} />
                            )
                        })}
                    </>}
                </div>

                <div className="main-gallery">
                    <figure className="item4">
                        <img src="../images/dell-Yu0e.jpg" alt="" />
                        <span>anita austvika</span>
                    </figure>
                    <figure className="item4">
                        <img src="../images/lukasz-rawa.jpg" alt="" />
                        <span>roman malik</span>
                    </figure>
                    <figure className="item4">
                        <img src="../images/nathan-watson.jpg" alt="" />
                        <span>vasilina sirotina</span>
                    </figure>
                    <figure className="item4">
                        <img src="../images/tom-morbey.jpg" alt="" />
                        <span>steve johnson</span>
                    </figure>
                </div>
                {!loading && <>
                    <div className="main-gallery">
                        <figure className="item4">
                            <img src="../images/anita-austvika.jpg" alt="" />
                            <span>anita austvika</span>
                        </figure>
                        <figure className="item4">
                            <img src="../images/roman-malik.jpg" alt="" />
                            <span>roman malik</span>
                        </figure>
                        <figure className="item4">
                            <img src="../images/vasilina-sirotina.jpg" alt="" />
                            <span>vasilina sirotina</span>
                        </figure>
                        <figure className="item4">
                            <img src="../images/steve-johnson.jpg" alt="" />
                            <span>steve johnson</span>
                        </figure>
                    </div>
                </>}
            </div> */}
        </>
    )
}