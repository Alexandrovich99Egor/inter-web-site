import { React, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer"
import './our-program.scss';
import { data } from '../data/data';
import Crosshair from '../image/modal-crosshair.png';


function OurProgram() {
    const [rotate, setRotate] = useState(false);
    const [rotate1, setRotate1] = useState(false);
    const [rotate2, setRotate2] = useState(false);
    const [rotate3, setRotate3] = useState(false);
    const [rotate4, setRotate4] = useState(false);
    const [rotate5, setRotate5] = useState(false);

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    const openClick = () => {
        setOpen(!open)
        setRotate(!rotate)
    };

    const openClick1 = () => {
        setOpen1(!open1)
        setRotate1(!rotate1)
    };

    const openClick2 = () => {
        setOpen2(!open2)
        setRotate2(!rotate2)
    };

    const openClick3 = () => {
        setOpen3(!open3)
        setRotate3(!rotate3)
    };

    const openClick4 = () => {
        setOpen4(!open4)
        setRotate4(!rotate4)
    };

    const openClick5 = () => {
        setOpen5(!open5)
        setRotate5(!rotate5)
    };




    return (
        <section className="our-program" >
            <div className="container our-program__container ">
                <h3 className="title">
                    ВІДПОВІДІ НА <span>НАЙПОШИРЕНІШІ ЗАПИТАННЯ</span>
                </h3>
                <div className="our-program__tab">
                    <div className="tab-content">
                        <div onClick={openClick} className="tab-text">
                            <p className="tab-title">
                                ЯК ОБРАТИ КУРС ДЛЯ ДИТИНИ?
                            </p>
                            <div className={`tabs-crasshair ${rotate ? 'rotate' : ''}`}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className={`tabs-content-hide ${open ? 'visible' : ''}`}>
                            Напрямів в IT так багато, що іноді голова йде обертом. Однак є й гарна новина — знайти себе в IT може кожен, незалежно від інтересів, складу розуму та рівня знань. Найпростіший спосіб обрати курс — запитати, чим хоче займатися підліток. Але якщо школяр часто змінює інтереси, варто розпочати з профорієнтації. Ви можете пройти тест самостійно або записатися на безоплатну консультацію з викладачем GoITeens. Досвідчений педагог допоможе підібрати оптимальний курс, який задовольнить потреби вашої дитини та розкриє її потенціал.
                        </div>

                    </div>
                    <div className="tab-content">
                        <div onClick={openClick1} className="tab-text">
                            <p className="tab-title">
                                ЯК ПРОХОДИТЬ НАВЧАЛЬНИЙ ПРОЦЕС?
                            </p>
                            <div className={`tabs-crasshair ${rotate1 ? 'rotate' : ''}`}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className={`tabs-content-hide ${open1 ? 'visible' : ''}`}>
                            Навчання відбувається онлайн — в особистому онлайн-кабінеті. Заняття з викладачем проходят за встановленим розкладом. На уроках учні 10% часу вивчають теоретичну базу нової теми, 70% часу займаються практикою та закріплюють отримані знання, 20% часу розбирають домашні завдання з минулого уроку. Записи уроків, матеріали та домашні завдання знаходяться в особистому кабінеті та доступні 24/7. Протягом курсу діти працюють над груповими та особистими проєктами, вчаться працювати в команді, розподіляти та виконувати задачі, презентувати свої ідеї та розв’язувати проблеми. Підсумкові та випускні проєкти потрапляють у портфоліо
                        </div>

                    </div>
                    <div className="tab-content">
                        <div onClick={openClick3} className="tab-text">
                            <p className="tab-title">
                                ЩО РОБИТИ, ЯКЩО ДИТИНА ПРОПУСТИТЬ ЗАНЯТТЯ?
                            </p>
                            <div className={`tabs-crasshair ${rotate3 ? 'rotate' : ''}`}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className={`tabs-content-hide ${open3 ? 'visible' : ''}`}>
                            Пропущений матеріал учень може опрацювати у власному онлайн-кабінеті, де доступні записи уроків, матеріали курсу та домашні завдання. Якщо школяр пропустить понад два тижні занять з поважної причини, ви можете замовити індивідуальну консультацію з викладачем, який допоможе розібрати пропущені теми. Ви також можете скористатися опцією “заморозки” курсу терміном до двох місяців. Після відновлення навчання учень продовжить опанування програми з того моменту, на якому зупинився, однак з іншою групою.
                        </div>

                    </div>
                    <div className="tab-content">
                        <div onClick={openClick4} className="tab-text">
                            <p className="tab-title">
                                У ЯКОМУ ВІЦІ РОЗПОЧИНАТИ ПРОГРАМУВАННЯ?
                            </p>
                            <div className={`tabs-crasshair ${rotate4 ? 'rotate' : ''}`}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className={`tabs-content-hide ${open4 ? 'visible' : ''}`}>
                            Дослідники Мічиганського університету, рекомендують введення програмування в освітній процес якомога раніше. Вони з’ясували, що діти у віці 4-7 років можуть легко засвоювати основи програмування через графічні інтерфейси та ігрові методики. У віці 8-10 років діти вже можуть успішно опанувати окремі мови програмування. Дослідник Мітчелл Резнік також вважає, що раннє вивчення програмування сприяє розвитку творчості та інноваційного мислення у дітей.
                        </div>

                    </div>
                    <div className="tab-content">
                        <div onClick={openClick5} className="tab-text">
                            <p className="tab-title">
                                ЩО ДАЄ ПРОГРАМУВАННЯ ДЛЯ ДІТЕЙ?
                            </p>
                            <div className={`tabs-crasshair ${rotate5 ? 'rotate' : ''}`}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className={`tabs-content-hide ${open5 ? 'visible' : ''}`}>
                            Програмування — це навичка майбутнього, яка відкриває широкі можливості для успішної кар’єри в будь-якій технологічній сфері. Вивчення програмування в дитинстві сприяє розвитку логічного, критичного, аналітичного та креативного мислення, кращому розумінню причинно-наслідкових зв’язків, прокачує знання точних наук, англійської мови та інтелекту в цілому. Курси програмування — не просто уроки інформатики для “загального розвитку”, як у школі. Це глибоке занурення у сферу IT з цікавими практичними завданнями та конкретним результатом.
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )


};

export default OurProgram;


