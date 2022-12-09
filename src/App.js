
import {Routes, Route, Link} from "react-router-dom"
import About from "./Components/about/About"
import Footer from "./Components/footer/Footer"
import Gallery from "./Components/gallery/Gallery"
import Main from "./Components/main/Main"
import Nav from "./Components/nav/Nav"
import Register from "./Components/register/Register"
import Shop from "./Components/shop/Shop"


export default function App() {
    return (
        <div className="app">
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/register" element={<Register />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}