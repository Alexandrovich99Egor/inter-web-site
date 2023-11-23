
import './about.scss';
import Button from "../button/button";
import React, { useState, useEffect } from 'react';



function About() {
    const [yearsCount, setYearsCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [projectsCount, setProjectsCount] = useState(0);
    const [successRate, setSuccessRate] = useState(0);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            if (yearsCount < 8) {
                setYearsCount(prevCount => prevCount + 1);
            } else {
                clearInterval(interval);
            }
        }, 200);


        return () => {
            clearInterval(interval);

        };

    }, [yearsCount]);


    useEffect(() => {
        const interval = setInterval(() => {
            if (childrenCount < 45000) {
                setChildrenCount(prevCount => prevCount + 20);
            } else {
                clearInterval(interval);
            }
        }, 0.01);

        return () => {
            clearInterval(interval);
        };
    }, [childrenCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (projectsCount < 3600) {
                setProjectsCount(prevCount => prevCount + 3);
            } else {
                clearInterval(interval);
            }
        }, 0.1);

        return () => {
            clearInterval(interval);
        };
    }, [projectsCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (successRate < 3600) {
                setSuccessRate(prevRate => prevRate + 3);
            } else {
                clearInterval(interval);
            }
        }, 0.1);

        return () => {
            clearInterval(interval);
        };
    }, [successRate]);

    return (
        <section className="section about">
            <div className="container about__container">
                <div className="about__text-content">
                    <h1 className="about__title">
                        Курси програмування  для дітей від 8-11 років
                    </h1>
                    <h3 className="about__sub-title">
                        Допомагаємо школярам полюбити навчання та програмування
                    </h3>
                    <h3 className="about__sub-title-active">
                        Спробуйте перший урок <span>БЕЗКОШТОВНО</span>
                    </h3>
                </div>
                <form className="about__form" action="">
                    <div className="about__form-container">
                        <input type="text" placeholder="Ім'я" />
                        <input type="tel" placeholder="Номер телефону" />
                        <input type="email" placeholder="email@gmai.com" />
                        <input type="text" placeholder="введіть промод" />
                        <Button
                            classNameBtn={'about__form-btn'}
                            textContentBtn={'Відправити'}
                        />
                    </div>
                </form>
                <div className="about__feedback">
                    <div className="about__feedback-content">
                        <p>
                            <span>{yearsCount}+</span>
                            років навчаємо дітей
                        </p>
                    </div>
                    <div className="about__feedback-content">
                        <p>
                            <span>{childrenCount}+</span>
                            дітей навчались у нас
                        </p>
                    </div>
                    <div className="about__feedback-content" >
                        <p>
                            <span>{projectsCount}+</span>
                            проєктів створено
                        </p>
                    </div>
                    <div className="about__feedback-content">
                        <p>
                            <span>{successRate}+</span>
                            покращили успішність
                        </p>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default About;