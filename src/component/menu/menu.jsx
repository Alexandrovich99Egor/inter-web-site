import { React, useState } from "react";
import Button from "../button/button";
import CrosshairImf from "../image/modal-crosshair.png"
import './menu.scss';

function Menu({ PropsModal, PropsModalSet }) {




    return (
        <>
            <div className={`overlay ${PropsModal ? 'open' : ''}`}></div>
            <div className={` menu  ${PropsModal ? 'open' : ''}`}>
                <div className="menu__content">
                    <span onClick={PropsModalSet} className='menu__close-modal'>
                        <img src={CrosshairImf} alt="" />
                    </span>
                    <p>
                        Встигніть Записатися
                        на безкоштовне заняття!
                    </p>
                    <form className="form" action="">
                        <input type="text" name="inp-name" id="inp-name" placeholder="Ваше ім'я" />
                        <input type="tel" name="inp-tel" placeholder="Ваш номер телефону" id="inp-tel" />
                        <input type="text" name="inp-country" placeholder="Ваше місто" id="inp-country" />
                    </form>
                    <div className="menu__button-form">
                        <Button
                            classNameBtn={'menu-btn'}
                            textContentBtn={'Записатися в 1 клік'}
                        />
                    </div>


                </div>
            </div>
        </>

    );
}

export default Menu;