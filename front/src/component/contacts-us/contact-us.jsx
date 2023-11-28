import React from 'react';
import './contact-us.scss';
import Inst from '../image/inst.svg';
import Viber from '../image/viber.svg';
import Facebook from '../image/fcbk.svg';
import Tel from '../image/tel.svg';




const ContactUs = () => {
    return (
        <section className={"contact-us section"}>
            <div className={"container contact-us__container"}>
                <div className={"contact-us__content"}>
                    <h3 className={"contact-us__title"}>
                        Наші контакти
                    </h3>
                    <div className='contact-us__social' >
                        <img src={Tel} alt="" />
                        <p className='contact-us__sub-title'>
                            Телефон
                        </p>
                    </div>
                    <div className='contact-us__social' >
                        <img src={Inst} alt="" />
                        <p className='contact-us__sub-title'>
                            Телефон
                        </p>
                    </div>
                    <div className='contact-us__social' >
                        <img src={Facebook} alt="" />
                        <p className='contact-us__sub-title'>
                            Телефон
                        </p>
                    </div>


                </div>
                <div className={"contact-us__form"}>
                    <h4 className='form-title'>
                        ЗАЛИШТЕ СВОЇ КОНТАКТИ І МИ ДОПОМОЖЕМО ВИРІШИТИ БУДЬ-ЯКЕ ПИТАННЯ
                    </h4>
                    <form className={"form"}>
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />

                    </form>
                </div>

            </div>

        </section>
    );
};

export default ContactUs;