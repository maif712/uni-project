
import "./about.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function About() {
    return (
        <div className="about__wrapper">
            <div className="about">
                <div className="about__left">
                    <figure className="about__figure">
                        <img src="./images/person.jpg" alt="" className="about__img" />
                    </figure>
                </div>
                <div className="about__right">
                    <p className="about__p">hi there! i'm</p>
                    <h2>alexa<span>calia</span></h2>
                    <p className="about__p--secondry">a <span>front-end web developer</span> passionate about creating interactive applications and experiences on the web.</p>
                </div>
            </div>
            <div className="icons">
                <FontAwesomeIcon className="icon" icon={faGithub} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <FontAwesomeIcon className="icon" icon={faInstagram} />
            </div>
        </div>
    )
}