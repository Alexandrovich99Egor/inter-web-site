import { React, useState } from "react";
import './pop-up-tel.scss';
import Button from "../button/button";



function PopUpTel() {
    const [show, setShow] = useState('');
    const ShowText = () => {
        setShow(!show);
    }
    return (
        <>
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
                        <div>
                            <input type="tel" name="inp-tel" id="inp-tel" placeholder="Ваш номер телефону" />
                        </div>
                        <div className="modal__window-btn">
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