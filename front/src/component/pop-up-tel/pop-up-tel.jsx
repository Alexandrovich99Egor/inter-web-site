import { React, useState } from "react";
import './pop-up-tel.scss';
import Button from "../button/button";
import CrosshairImf from "../image/modal-crosshair.png";



function PopUpTel() {
    const [show, setShow] = useState('');
    const ShowText = () => {
        setShow(!show);
    }
    const handleClose = () => {
        setShow(!show)
    }
    return (
        <>
            <div className={`modal__overlay ${show ? 'active' : ''}`}></div>
            <div className="content">
                <button onClick={ShowText}>
                </button>
            </div>
            <div className="content-text">
                Хочете, зателефонуємо Вам за 30 секунд?
            </div>
            {show &&
                <div className="modal__window-call">
                    <form className="modal__form" action="">
                        <p>
                            Залиште номер телефону і ми з вами зв'яжемось!
                        </p>
                        <div>
                            <input type="tel" name="inp-tel" id="inp-tel" placeholder="Ваш номер телефону" />
                        </div>
                        <div className="modal__window-btn">
                            <div onClick={handleClose} className="modal__window-close">
                                <img src={CrosshairImf} alt="" />
                            </div>

                            <Button
                                classNameBtn={'modal__window-btn'}
                                textContentBtn={'Зателефонуйте'}
                            />
                        </div>
                    </form>

                </div >
            }

        </>
    )
}
export default PopUpTel;