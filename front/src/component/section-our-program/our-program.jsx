import { React, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer"
import './our-program.scss';
import { data } from '../data/data';


function OurProgram() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const openClick = () => {
        setOpen(!open)
    };
    const openClick2 = () => {
        setOpen2(!open2)
    };
    const openClick3 = () => {
        setOpen3(!open3)
    };




    return (
        <section className="our-program" >
            <div className="container our-program__container ">
                <h3 className="title">
                    ВІДПОВІДІ НА НАЙПОШИРЕНІШІ ПИТАННЯ
                </h3>
                <div className="our-program__tab">
                    <div className="tab-content">
                        <span>
                            <p onClick={openClick}>
                                ЯК ОБРАТИ КУРС ДЛЯ ДИТИНИ?
                            </p>
                        </span>
                        <div className={`tabs-content-hide ${open ? 'visible' : ''}`}>
                            Напрямів в IT так багато, що іноді голова йде обертом. Однак є й гарна новина — знайти себе в IT може кожен, незалежно від інтересів, складу розуму та рівня знань. Найпростіший спосіб обрати курс — запитати, чим хоче займатися підліток. Але якщо школяр часто змінює інтереси, варто розпочати з профорієнтації. Ви можете пройти тест самостійно або записатися на безоплатну консультацію з викладачем GoITeens. Досвідчений педагог допоможе підібрати оптимальний курс, який задовольнить потреби вашої дитини та розкриє її потенціал.
                        </div>
                    </div>
                    <div className="tab-content">
                        <span>
                            <p onClick={openClick2}>
                                ЯК ОБРАТИ КУРС ДЛЯ ДИТИНИ?
                            </p>
                        </span>
                        <p className={`tabs-content-hide ${open2 ? 'visible' : ''}`}>
                            Напрямів в IT так багато, що іноді голова йде обертом. Однак є й гарна новина — знайти себе в IT може кожен, незалежно від інтересів, складу розуму та рівня знань. Найпростіший спосіб обрати курс — запитати, чим хоче займатися підліток. Але якщо школяр часто змінює інтереси, варто розпочати з профорієнтації. Ви можете пройти тест самостійно або записатися на безоплатну консультацію з викладачем GoITeens. Досвідчений педагог допоможе підібрати оптимальний курс, який задовольнить потреби вашої дитини та розкриє її потенціал.
                        </p>
                    </div>
                    <div className="tab-content">
                        <span>
                            <p onClick={openClick3} >
                                ЯК ОБРАТИ КУРС ДЛЯ ДИТИНИ?
                            </p>
                        </span>
                        <div className={`tabs-content-hide ${open3 ? 'visible' : ''}`}>
                            Напрямів в IT так багато, що іноді голова йде обертом. Однак є й гарна новина — знайти себе в IT може кожен, незалежно від інтересів, складу розуму та рівня знань. Найпростіший спосіб обрати курс — запитати, чим хоче займатися підліток. Але якщо школяр часто змінює інтереси, варто розпочати з профорієнтації. Ви можете пройти тест самостійно або записатися на безоплатну консультацію з викладачем GoITeens. Досвідчений педагог допоможе підібрати оптимальний курс, який задовольнить потреби вашої дитини та розкриє її потенціал.
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )


};

export default OurProgram;


