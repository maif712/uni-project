
import "./main.css"

export default function Main() {
    return (
        <>

            <main className="main-wrapper container">
                <div className="main__left">
                    <h2 className="main__h2">Let’s Build Something
                        amazing with GPT-3
                        OpenAI</h2>
                    <p className="main__p">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <form className="main__form">
                        <input type="text" className="main__input--text" placeholder="Your Email Address" />
                        <button className="main__btn">get started</button>
                    </form>
                </div>
                <div className="main__right">
                    <div className="main__image">
                        <img src="../images/ai.png" alt="" />
                    </div>
                </div>
            </main>

            <section className="mid-section container">
                <div className="mid__top my-z">
                    <h4 className="mid__h4">What is GPT-3</h4>
                    <p className="mid__p">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                </div>
                <div className="mid__middle my-z">
                    <h2 className="mid__h2">The possibilities are beyond your imagination</h2>
                    <a href="#" className="mid__a">Explore The Library</a>
                </div>
                <div className="mid__bottom my-z">
                    <div className="mid__card-wrapper">
                        <h4 className="mid__h4">Chatbots</h4>
                        <p className="mid__p">We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
                    </div>
                    <div className="mid__card-wrapper">
                        <h4 className="mid__h4">Knowledgebase</h4>
                        <p className="mid__p">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                    </div>
                    <div className="mid__card-wrapper">
                        <h4 className="mid__h4">Education</h4>
                        <p className="mid__p">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b</p>
                    </div>
                </div>
            </section>

            {/* <div className="top-section container">
                <div className="top-section-wrapper">
                    <div className="top-section__left"></div>
                    <div className="top-section__left--down"></div>
                </div>
                <div className="top-section__right"></div>
            </div>
            <main className="container">
                <div className="item one"></div>
                <div className="item two"></div>
                <div className="item three"></div>
                <div className="item four"></div>
            </main> */}
        </>
    )
}