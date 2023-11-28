import React from "react";
import './program.scss';
import ImageProgram from '../image/TET_6673.jpg';
import { data } from '../data/data.js';



function Program() {

    return (
        <section className="section program">
            <div className="container program__container">
                <div className="program__main">
                    <div className="program__main-img">
                        <img className="image-main" src={ImageProgram} alt="" />
                    </div>
                    <div className="program__sub-title">
                        <h3>НАША ПРОГРАМА</h3>
                        <p>
                            <span>Програма "Inter Web"</span>  в шкільному віці розроблена з урахуванням комплексного підходу до вивчення ІТ для дітей. Ми віримо, що в цьому віці важливо отримати різноманітні навички, які сприятимуть розвитку учнів у світі сучасних технологій. Наш підхід спрямований на те, щоб побудувати широкий фундамент для подальшого розвитку в області ІТ.
                        </p>
                    </div>
                </div>
                <div className="program__content">
                    {data.map(item => (
                        <div className="program__content-items" key={item.id}>
                            <div className="program__content-wrapp">
                                <h3>
                                    {`Курс : ${item.title}`}
                                </h3>
                                <p>
                                    {`Про курс :${item.discriotion}`}
                                </p>
                            </div>
                            <div className="program__content-image">
                                <img className="image-program" src={item.image} alt="image-prg" />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
export default Program;