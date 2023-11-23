import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// component
import Button from '../button/button';
import Menu from '../menu/menu';


import './slides.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Autoplay, Navigation } from 'swiper/modules';

function Slider({ dataSlider }) {
    const [open, setOpen] = useState();
    const openClick = () => {
        setOpen(true);
    }

    const closeClick = () => {
        setOpen(false);
    }




    return (
        <>

            {/* Передаю данные для меню,закрыть открыть */}
            <Menu PropsModal={open} PropsModalSet={closeClick} />
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                freeMode={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                initialSlide={1}
                loop={true}
            >
                {dataSlider.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className='container slide__container'>
                            <p className='slider__title' >
                                {item.title}
                            </p>
                            <span className='slider__ages'>
                                {item.age}
                            </span>
                            <p className='slider__sub-title'>
                                {item.discriotion}
                            </p>
                            <div className='slider__image'>
                                <img className='slide__image-item' src={item.image} alt="" />
                            </div>
                            <div className='slider__button'>
                                <Button
                                    onClick={openClick}
                                    classNameBtn={'slider__btn'}
                                    textContentBtn={'Записатись на безоплатный урок'}
                                />

                            </div>
                        </div>



                    </SwiperSlide>
                ))}

            </Swiper>

        </>
    );
}



export default Slider;