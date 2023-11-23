import React from "react";
import './about-company.scss';
import Images from '../image/abou-image.jpg';




function AboutCompany() {
    return (
        <section className="section about-us">
            <div className="container about-us__container">
                <div className="about-us__content">
                    <h1 className="about-us__title">
                        Про школу  <span>Inter web</span>
                    </h1>
                    <p className="about-us__sub-title">
                        <span>Inter web</span> — це школа, яка прагне забезпечити дітям та підліткам цікавий та корисний час, проведений із гаджетами. Ми вчимо учнів створювати власні веб-сайти, програми та розвиваємо їх технічні та творчі навички. Наша мета — допомогти учням отримати навички, які будуть корисні як у навчанні, так і в дорослому житті. Школа "Inter-web" створена для того, щоб дати учням надійну основу для подальшого розвитку та вибору професійного шляху.
                    </p>
                </div>
                <div>

                </div>
            </div>

        </section>
    )
}

export default AboutCompany;