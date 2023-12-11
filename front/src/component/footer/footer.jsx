import React from "react";
import './footer.scss';
import FooterLogo from '../image/header-logo.jpg';
import FooterInsta from '../image/instagram-.png';
import FooterFacebook from '../image/fcbk.svg';
import { Routes, Route, Link, NavLink } from "react-router-dom";




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
                            <Link className="item-link" to="/">Головна</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="item-link" to="/program">Програма</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="item-link" to="/about-us">Про нас</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="item-link" to="/program">Наша програма</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="item-link" to="/for-parents">Батькам</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="item-link" to="/feedback">Відгуки</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="item-link" to="/contact-us">Контакти</Link>
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