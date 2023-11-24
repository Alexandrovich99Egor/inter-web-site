import './info.scss';
import { React, useState } from "react";
import Slider from "../slider/slider.jsx";
import ImageHtml from '../image/html.png';
import ImageCss from '../image/css.png';
import ImageJS from '../image/js.png';
import ImagePy from '../image/py.png';
import ImageMySql from '../image/mysql.jpg'
import ImageRoblox from '../image/roblox.jpeg'
import Button from '../button/button.jsx';
import Menu from '../menu/menu.jsx';


// data about program on school
const data = [
    {
        id: 1,
        title: 'HTML ',
        age: '5-9 клас',
        discriotion: 'HTML (Мова розмітки гіпертексту) - це мова, яка використовується для створення веб-сторінок. Вона визначає структуру та розмітку елементів на сторінці, таких як заголовки, параграфи, зображення, посилання тощо.',
        image: ImageHtml
    },
    {
        id: 2,
        title: 'CSS',
        age: '5-9 клас',
        discriotion: 'CSS (Каскадні таблиці стилів) - це мова, яка використовується для оформлення та вигляду веб-сторінок, створюючи правила стилів для кольорів, шрифтів, відступів, розмірів та інших аспектів веб-елементів.',
        image: ImageCss
    },
    {
        id: 3,
        age: '5-9 клас',
        title: 'JavaScript Canvas',
        discriotion: "JavaScript Canvas - це як магічний олівець для комп'ютера.Ти можеш намалювати на екрані будь- що, що уявляєш! За допомогою JS Canvas, ти створюєш свої власні світи та робиш їх живими.Наприклад, ти можеш створити ігру, де твої герої рухаються, чи навіть анімований мультфільм.",
        image: ImageJS
    },
    {
        id: 4,
        age: '4-9 клас',
        title: 'Python PHP',
        discriotion: "PHP і Python - це дві потужні мови програмування, які використовуються для створення веб - сайтів та розробки програм.",
        image: ImagePy
    },
    {
        id: 5,
        age: '6-9 клас',
        title: 'MySQL',
        discriotion: 'MySQL - це спеціальна програма для зберігання і управління даними. Замість того, щоб давати інструкції на зберігання іграшок чи книг, вона зберігає інформацію для веб-сайтів та програм. Так само, як ти складаєш свої іграшки у ящик, MySQL допомагає впорядковувати та знаходити дані для компютерних програм.',
        image: ImageMySql
    },
    {
        id: 5,
        age: '6-9 клас',
        title: 'Roblox',
        discriotion: 'В айті - школі ми досліджуємо світ програмування за допомогою Роблокса! Тут ти зможеш створити власні ігри, додавати веселі функції та навіть розробляти свої власні історії.Забудь про границі - на Роблоксі можна втілити будь - які ідеї та зробити своє імя в світі розробників. Готуйся до захоплюючого подорожі у світ програмування!',
        image: ImageRoblox

    }


];




function Info() {
    const [open, setOpen] = useState(false);

    const openClick = () => {
        setOpen(true);
    }

    const closeClick = () => {
        setOpen(false);
    }





    return (


        <section className="section info">
            <div className="container info__container">
                <h2 className="info__title">
                    Підтримуйте мрії, розвивайте навички: інноваційна <span>InterWeb</span> школа для молодих майстрів технологій!
                </h2>
                <div className='info__programs'>
                    {data.map(item => (
                        <div className='info__content' key={item.id}>
                            <p className='info__programs-title'>
                                {item.title}
                            </p>
                            <span className='info__age'>
                                {item.age}
                            </span>
                            <div className='info__programs-image'>
                                <img src={item.image} alt="prg-image" />
                            </div>
                            <p className='info__programs-sub-title'>
                                {item.discriotion}
                            </p>
                            <Button
                                onClick={openClick}
                                classNameBtn={'info__button-age'}
                                textContentBtn={'Записатись'}
                            />
                        </div>
                    ))}
                </div>


            </div>

            <Menu PropsModal={open} PropsModalSet={closeClick} />
            <Slider dataSlider={data} />
        </section>
    )
}

export default Info;