import { React, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
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





    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <img className="header__logo-item" src={Logo} alt="" />
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
                            <Link className="item-link" to="/">Головна</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="item-link" to="/about-us">Про нас</Link>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="">Про нас</a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="">Батькам </a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="">Відгуки </a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="">Контакти</a>
                        </li>

                        <li className="nav-list-item">
                            <a className="item-link" href="">(095)186-01-78</a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="">(095)186-01-78</a>
                        </li>
                        <li className="nav-list-item">
                            <a className="item-link" href="">(095)186-01-78</a>
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