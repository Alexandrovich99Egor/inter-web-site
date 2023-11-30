import React from 'react';
import './contact-us.scss';
import Inst from '../image/inst.svg';
import Viber from '../image/viber.svg';
import Facebook from '../image/fcbk.svg';
import Tel from '../image/tel.svg';
import Button from '../button/button.jsx';




const ContactUs = () => {
    return (
        <section className={"contact-us section"}>
            <div className={"container contact-us__container"}>
                <div className={"contact-us__content"}>
                    <h3 className={"contact-us__title"}>
                        Наші <span>контакти</span>
                    </h3>
                    <div className='contact-us__social' >
                        <p className='contact-us__sub-title'>
                            (095)186-01-78
                        </p>
                    </div>
                    <div className='contact-us__social' >
                        <p className='contact-us__sub-title'>
                            (095)186-01-78
                        </p>
                    </div>
                    <div className='contact-us__social' >
                        <p className='contact-us__sub-title'>
                            inter-web@gmail.com
                        </p>
                    </div>

                </div>
                <div className={"contact-us__form"}>
                    <h4 className='form-title'>
                        ЗАЛИШТЕ СВОЇ <span>КОНТАКТИ</span>  І МИ ДОПОМОЖЕМО ВИРІШИТИ БУДЬ-ЯКЕ ПИТАННЯ
                    </h4>
                    <form className={"form"}>
                        <input type="text" name="" id="" placeholder='Ваше ім`я' />
                        <input type="text" name="" id="" placeholder='Ваш номер телефону' />
                        <div className='contact-us__form-button'>
                            <Button
                                textContentBtn={'Відправити'}
                                classNameBtn={'contact-us__form-btn'}
                            />
                        </div>
                    </form>
                </div>

            </div>

        </section>
    );
};

export default ContactUs;