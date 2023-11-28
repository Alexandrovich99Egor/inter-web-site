import React from "react";
import './prjct.scss';
import { dataStudents } from "../data/data";
import './prjct.scss';
import Button from '../button/button.jsx';



function Prjcts() {
    return (
        <section className="section project">
            <div className="container project__container">
                <h3>
                    <span>
                        Наші
                    </span>  учні
                </h3>
                <div className="project__content-wrap">
                    {dataStudents.map(item => (
                        <div key={item.id} className="project__content">
                            <p className="project__user-name">
                                {item.Name}
                            </p>
                            <div className="project__user-image">
                                <img src={item.Image} alt="" />
                            </div>
                            <p className="project__user-discription">
                                {item.Discriotion}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="project__return-prjct-page">
                    <h3 className="project__return-prjct-page-title">
                        Робити такі проекти можна тільки
                        ВИВЧАЮЧИ ВСІ ТЕМИ В КОМПЛЕКСІ

                    </h3>
                    <div>
                        <Button
                            classNameBtn={'project-btn'}
                            textContentBtn={'Переглянути всю программу'}
                        />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Prjcts;