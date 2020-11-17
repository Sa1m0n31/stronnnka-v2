import React, { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger } from 'gsap/all'

const Portfolio = () => {
    gsap.registerPlugin(ScrollTrigger);

    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const item4 = useRef(null);
    const header = useRef(null);

    useEffect(() => {
        let width;
        if(typeof window !== 'undefined') {
            width = window.innerWidth;
        }

        if(width > 700) {
            gsap.set([item1.current, item2.current, item3.current, item4.current], {scale: 0, opacity: 0});
            gsap.to([item1.current, item2.current, item3.current, item4.current], {
                scale: 1, opacity: 1, duration: .5, scrollTrigger: {
                    trigger: ".portfolio",
                    start: "top 50%"
                }
            });
            gsap.fromTo(header.current, {y: -200, opacity: 0}, {
                y: 0, opacity: 1, duration: .5, scrollTrigger: {
                    trigger: ".portfolio",
                    start: "top 80%"
                }
            });
        }
    }, []);


    return (<section className="portfolio">
        <div ref={header} className="portfolio-header">
            <h2>Portfolio</h2>
            <h3>Sprawdź nasze ostatnie realizacje</h3>
            <div className="portfolio-white"><img src={require("../../static/img/down-arrow.png")} alt="w-dol" /></div>
        </div>
        <div className="portfolio-inner">
            <div ref={item1} className="portfolio-item">
                <img src={require("../../static/img/portfolio1.png")} alt="portfolio-1" className="portfolio-img" />
                <div className="portfolio-overlay">
                    <h3>burskisprzatanie.pl</h3>
                    <h4>Strona firmy sprzątającej Burski Sprzątanie</h4>
                    <a href="https://burskisprzatanie.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div ref={item2} className="portfolio-item">
                <img src={require("../../static/img/portfolio-3.png")} alt="portfolio-3" className="portfolio-img" />
                <div className="portfolio-overlay">
                    <h3>Skibos</h3>
                    <h4>Grafika dla kanału YouTube</h4>
                    <a href="https://www.youtube.com/user/maciejskib" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div ref={item3} className="portfolio-item">
                <img src={require("../../static/img/portfolio2.png")} alt="portfolio-2" className="portfolio-img"/>
                <div className="portfolio-overlay">
                    <h3>kacperadamski.pl</h3>
                    <h4>Strona portfolio dla specjalisty ds. marketingu, Pana Kacpra Adamskiego</h4>
                    <a href="https://kacperadamski.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div ref={item4} className="portfolio-item">
                <img src={require("../../static/img/portfolio-4.png")} alt="portfolio-4" className="portfolio-img"/>
                <div className="portfolio-overlay">
                    <h3>Wizytówki</h3>
                    <h4>Wizytówki dla firmy Olkop</h4>
                    <a href="https://imgur.com/a/4K74cyi?fbclid=IwAR1ykqaDvrvWoLJWJVlGOmQXOzpLyYXicgVkT7GX2G2b9QdikZHbbIcBjzQ" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>
        </div>
    </section>);
};

export default Portfolio;
