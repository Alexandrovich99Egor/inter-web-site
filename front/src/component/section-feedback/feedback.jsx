import React from "react";
import './feedback.scss';
import { dataFeedBack } from "../data/data";


function FeedBack() {
    return (
        <section className="section feedback">
            <div className="container feedback__container">
                <h3>
                    Відгуки про <span>Inter Web</span>
                </h3>
                <div className="feedback__content">
                    {dataFeedBack.map(item => (
                        <div className="feedback__content-wrap" key={item.id}>
                            <div className="feedback__person">
                                <div className="feedback__image">
                                    <img className="image-feedback" src={item.Avatar} alt="" />
                                </div>
                                <p className="person-name">
                                    {item.Name}
                                </p>
                            </div>
                            <p className="person-discription">
                                {item.Discriotion}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default FeedBack;