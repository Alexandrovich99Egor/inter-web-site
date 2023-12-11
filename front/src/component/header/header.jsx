import { React, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import './header.scss';
import Logo from '../image/header-logo.jpg'
// pages import
import About from "../section-about/about";
// component import
import Button from "../button/button";
import Menu from "../menu/menu";

function Header() {
    //    show menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // transform span for menu
    const [defaultState, setdefaultState] = useState(false);
    //    show menu
    const OpenMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // close Menu when click link
    const CloseMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    // transform span for menu
    const SpanTransform = () => {
        setdefaultState(!defaultState);
    }
    // Shom form when click header btn
    const [open, setOpen] = useState(false);

    const openClick = () => {
        setOpen(true);
    }

    const closeClick = () => {
        setOpen(false);
    }

    // for close menu





    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <a href="/">
                        <img className="header__logo-item" src={Logo} alt="" />
                    </a>
                </div>
                <div className="header__contacts">
                    <ul className="contacts__list">
                        <li className="list-item">
                            <a className="item-link" href="">(095)186-01-78</a>
                        </li>
                        <li className="list-item">
                            <a className="item-link" href="">(095)186-01-78</a>
                        </li>
                        <li className="list-item">
                            <a className="item-link" href="">(095)186-01-78</a>
                        </li>
                    </ul>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="nav-list-item">
                            <Link className="item-link" to="/">Головна</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="item-link" to="/about-us">Про нас</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="item-link" to="/program">Наша програма</Link>
                        </li>

                        <li className="nav-list-item">
                            <Link className="item-link" to="/projects">Наші учні</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="item-link" to="/for-parents">Батькам</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="item-link" to="/feedback">Відгуки</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/contact-us" className="item-link" >Контакты</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header__button">
                    <Button
                        onClick={openClick}
                        classNameBtn={'header-btn'}
                        textContentBtn={'Записатись'}
                    />
                    <Menu PropsModal={open} PropsModalSet={closeClick} />
                </div>


                <div className='header__mobile-menu-trigger'
                    onClick={OpenMenu}>
                    <span className={`${isMenuOpen ? 'rotate' : ''}`}></span>
                    <span className={`${isMenuOpen ? 'transform' : ''}`}></span>
                    <span className={`${isMenuOpen ? 'rotate-second' : ''}`}></span>
                </div>



            </div>
            {/* add class for menu open */}
            <div className={`header__mobile-menu ${isMenuOpen ? 'active' : ''}`} >
                <div className="header__container-mobile container">
                    <nav>
                        <li className="nav-list-item">
                            <Link onClick={CloseMenu} className="item-link" to="/">Головна</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link onClick={CloseMenu} className="item-link" to="/about-us">Про нас</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link onClick={CloseMenu} className="item-link" to="/program">Наша програма</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link onClick={CloseMenu} className="item-link" to="/for-parents">Батькам </Link>
                        </li>
                        <li className="nav-list-item">
                            <Link onClick={CloseMenu} className="item-link" to="/feedback">Відгуки </Link>
                        </li>
                        <li className="nav-list-item">
                            <Link onClick={CloseMenu} className="item-link" to="/contact-us">Контакти</Link>
                        </li>

                        <li className="nav-list-item">
                            <a className="item-link" href="tel:(095)186-01-78">(095)186-01-78</a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="tel:(095)186-01-78">(095)186-01-78</a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="tel:(095)186-01-78">(095)186-01-78</a>
                        </li>
                        <Button
                            textContentBtn={'Записатись'}
                            onClick={openClick}
                        />
                    </nav>
                </div>
            </div>

        </header >


    )
}

export default Header;