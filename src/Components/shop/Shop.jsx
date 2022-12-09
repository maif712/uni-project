
import "./shop.css"

export default function Shop() {
    return (
        <>
            <h1 className="shop-title">Shop all latest offers and innovations</h1>
            <div className="produce-wrapper container">
                <div className="produce-item">
                    <figure>
                        <img src="../images/s22.webp" alt="" />
                    </figure>
                    <p>galaxy S22</p>
                    <button className="btn-buy">Buy now</button>
                </div>
                <div className="produce-item">
                    <figure>
                        <img src="../images/zflip.webp" alt="" />
                    </figure>
                    <p>galaxy Z flip4</p>
                    <button className="btn-buy">Buy now</button>
                </div>
                <div className="produce-item">
                    <figure>
                        <img src="../images/zfold.webp" alt="" />
                    </figure>
                    <p>galaxy Z fold4</p>
                    <button className="btn-buy">Buy now</button>
                </div>
            </div>
        </>
    )
}