
import { React, useState } from "react";
import './info.scss';
import Slider from "../slider/slider.jsx";
import Button from '../button/button.jsx';
import Menu from '../menu/menu.jsx';
// import data
import { data } from '../data/data.js';




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