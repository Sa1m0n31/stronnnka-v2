import React, { useRef, useState } from "react";
import { gsap } from 'gsap/all'

const Portfolio = () => {

    const overlay = useRef(null);
    const overlay1 = useRef(null);

    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);

    const handleHover = (el) => {
        //gsap.fromTo(el.current, {opacity: 0}, {opacity: 1, duration: .5});
    };

    const handleLeave = (el) => {
        //gsap.fromTo(el.current, {opacity: 1}, {opacity: 0, duration: .5});
    };

    return (<section className="portfolio">
        <div className="portfolio-header">
            <h2>Portfolio</h2>
            <h3>Sprawdź nasze ostatnie realizacje</h3>
            <div className="portfolio-white"><img src={require("../../static/img/down-arrow.png")} alt="w-dol" /></div>
        </div>
        <div className="portfolio-inner">
            <div className="portfolio-item">
                <img src={require("../../static/img/portfolio1.png")} alt="portfolio-1" className="portfolio-img" />
                <div ref={overlay} className="portfolio-overlay" onMouseOver={() => handleHover(overlay)} onMouseOut={() => handleLeave(overlay)}>
                    <h3>burskisprzatanie.pl</h3>
                    <h4>Strona firmy sprzątającej Burski Sprzątanie</h4>
                    <a href="https://burskisprzatanie.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item" onMouseOver={() => handleHover(overlay1)} onMouseOut={() => handleLeave(overlay1)}>
                <img src={require("../../static/img/portfolio1.png")} alt="portfolio-1" className="portfolio-img"/>
                <div ref={overlay1} className="portfolio-overlay">
                    <h3>kacperadamski.pl</h3>
                    <h4>Strona portfolio dla specjalisty ds. marketingu, Pana Kacpra Adamskiego</h4>
                    <a href="https://kacperadamski.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>
        </div>
    </section>);
};

export default Portfolio;
