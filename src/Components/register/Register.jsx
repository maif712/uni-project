
import "./register.css"

export default function Register() {

    const handleClick = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="main-div container">
                <div className="main-div__left">
                    <div className="text-wrapper">
                        <h2>company</h2>
                        <h1>logo</h1>
                        <h2>name</h2>
                    </div>
                </div>
                <div className="main-div__right">
                    <h2 className="main-div__h2">register</h2>
                    <p className="main-div__para">it's completely free</p>
                    <form onSubmit={handleClick} className="main-form">
                        <div className="input-wrapper">
                            <input type="text" className="main-form__name" required />
                            <span>name</span>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" className="main-form__user-name" required />
                            <span>user name</span>
                        </div>
                        <div className="input-wrapper">
                            <input type="text" className="main-form__email" required />
                            <span>email</span>
                        </div>
                        <div className="input-wrapper">
                            <input type="password" className="main-form__password" required />
                            <span>password</span>
                        </div>
                        <div className="input-wrapper">
                            <input type="password" className="main-form__config-password" required />
                            <span>confirm password</span>
                        </div>
                        <div className="main-form_checkbox--warpper">
                            <input type="checkbox" className="main-form__checkbox" />
                            <p className="main-form__para">By clicking the button, you are agreeing to our Terms and Services</p>
                        </div>
                        <button className="main-form__btn-submit">create account</button>
                    </form>
                </div>
            </div>
        </>
    )
}