import React from "react";
import './footer.scss';
import FooterLogo from '../image/header-logo.jpg';
import FooterInsta from '../image/instagram-.png';
import FooterFacebook from '../image/fcbk.svg';



function Footer() {

    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__logo">
                    <div className="footer__logo-item">
                        <img src={FooterLogo} alt="foo-logo" />
                    </div>
                </div>
                <nav className="footer__nav">
                    <ul className="footer__nav-list">
                        <li className="nav-list-item">
                            <a className="item-link" href="">Програма</a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="">Про нас</a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="">Наші учні</a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="">Батькам</a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="">Відгуки</a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="">Контакти</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__social" >
                    <div className="footer__social-content" >
                        <a href=""> <img src={FooterInsta} alt="" />
                        </a>
                    </div>
                    <div className="footer__social-content">
                        <a href=""> <img src={FooterFacebook} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__copyrigth-content">
                <p className="footer__copyrigth">
                    © Inter Web - Всі права захищено.

                </p>
                <p className="footer__copyrigth">
                    @Developer - @rflash_777.
                </p>
            </div>

        </footer>
    )
}

export default Footer;