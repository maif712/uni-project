
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./nav.css"


export default function Nav() {
    const myArray = ["home", "gallery", "register", "shop", "about"]
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const count = localStorage.getItem("count")
        if (count !== null) setCurrent(JSON.parse(count))
    }, [])

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(current))
    }, [current])


    const handleClick = (idx) => {
        setCurrent(idx)
    }

    return (
        <>
            <div className="nav-wrapper">
                <nav className="main-nav container">
                    <h2 className="main-nav__logo">logo</h2>
                    <ul className="main-nav__ul">
                        {myArray.map((nav, index) => {
                            return (
                                <li key={index} className="main-nav__li"><Link onClick={() => handleClick(index)} to={`/${nav === "home" ? "" : nav}`} className={`main-nav__a ${current === index ? "active" : ""}`}>{nav === "about" ? nav + " us" : nav}</Link></li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}