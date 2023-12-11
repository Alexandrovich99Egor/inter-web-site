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
                        Це унікальна методика викладання,за домоги якої,дитина відразу застосовує отриманні знання на приктиці. <br></br> Ви завжди зможете обрати зручний графік відвідування уроків у вихідні дні.Заняття відбуваються по суботам та неділям,діти займаються в невеликих групах (8-9 дітей).
                        У теплих,затишних приміщеннях з сучасним обладнанням, також є можливість займаються онлайн на нашій сучасній платформі.Уроки проходять раз на тиждень (120-2 год.)Тривалість навчального курсу 9 місяців.
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