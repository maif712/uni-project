
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faTelegram, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__icons">
                <FontAwesomeIcon className="footer__icon" icon={faInstagram} />
                <FontAwesomeIcon className="footer__icon" icon={faFacebook} />
                <FontAwesomeIcon className="footer__icon" icon={faTelegram} />
                <FontAwesomeIcon className="footer__icon" icon={faYoutube} />
                <FontAwesomeIcon className="footer__icon" icon={faGithub} />
            </div>
            <p className="footer__p">Copyright &copy; 2022 University project</p>
            <div className="footer__info">
                <a href="#" className="info__a">Information legal</a>
                <a href="#" className="info__a">Privacy policy</a>
            </div>
        </footer>
    )
}