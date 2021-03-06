import React, { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger } from 'gsap/all'

const Portfolio = () => {
    gsap.registerPlugin(ScrollTrigger);

    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const item4 = useRef(null);
    const item5 = useRef(null);
    const item6 = useRef(null);
    const item7 = useRef(null);
    const item8 = useRef(null);
    const item9 = useRef(null);
    const header = useRef(null);

    useEffect(() => {
        let width;
        if(typeof window !== 'undefined') {
            width = window.innerWidth;
        }

        // if(width > 700) {
        //     gsap.set([item1.current, item2.current, item3.current, item4.current, item5.current, item6.current, item7.current, item8.current, item9.current], {scale: 0, opacity: 0});
        //     gsap.to([item1.current, item2.current, item3.current, item4.current, item5.current, item6.current, item7.current, item8.current, item9.current], {
        //         scale: 1, opacity: 1, duration: .5, scrollTrigger: {
        //             trigger: ".portfolio",
        //             start: "top 50%"
        //         }
        //     });
        //     gsap.fromTo(header.current, {y: -200, opacity: 0}, {
        //         y: 0, opacity: 1, duration: .5, scrollTrigger: {
        //             trigger: ".portfolio",
        //             start: "top 80%"
        //         }
        //     });
        // }
    }, []);


    return (<section className="portfolio">
        <div ref={header} className="portfolio-header">
            <h2>Portfolio</h2>
            <h3>Sprawdź nasze ostatnie realizacje</h3>
            <div className="portfolio-white"><img src={require("../../static/img/down-arrow.png")} alt="w-dol" /></div>
        </div>
        <div className="portfolio-inner">
            <div className="portfolio-item">
                <img src={require("../../static/img/procentowo.png")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img" />
                <div className="portfolio-overlay">
                    <h3>procentowo.com</h3>
                    <h4>Sklep internetowy z alkoholami na prezent</h4>
                    <a href="https://procentowo.com" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item">
                <img src={require("../../static/img/kalchem.jpg")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img" />
                <div className="portfolio-overlay">
                    <h3>kalchem.com.pl</h3>
                    <h4>Strona internetowa dealera maszyn rolniczych</h4>
                    <a href="https://kalchem.com.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item">
                <img src={require("../../static/img/flightmedia.png")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img" />
                <div className="portfolio-overlay">
                    <h3>flightmedia.no</h3>
                    <h4>Strona internetowa dla klienta z Norwegii</h4>
                    <a href="https://flightmedia.no" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item">
                <img src={require("../../static/img/lider-energia.jpg")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img" />
                <div className="portfolio-overlay">
                    <h3>liderenergia.pl</h3>
                    <h4>Strona firmy z branży fotowoltaicznej</h4>
                    <a href="https://liderenegia.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item">
                <img src={require("../../static/img/portfolio-3.png")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img" />
                <div className="portfolio-overlay">
                    <h3>Skibos</h3>
                    <h4>Grafika dla kanału YouTube</h4>
                    <a href="https://www.youtube.com/user/maciejskib" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item">
                <img src={require("../../static/img/portfolio2.png")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img"/>
                <div className="portfolio-overlay">
                    <h3>kacperadamski.pl</h3>
                    <h4>Strona portfolio dla specjalisty ds. marketingu, Pana Kacpra Adamskiego</h4>
                    <a href="https://kacperadamski.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item">
                <img src={require("../../static/img/portfolio-4.png")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img"/>
                <div className="portfolio-overlay">
                    <h3>Wizytówki</h3>
                    <h4>Wizytówki dla firmy Olkop</h4>
                    <a href="https://imgur.com/a/4K74cyi?fbclid=IwAR1ykqaDvrvWoLJWJVlGOmQXOzpLyYXicgVkT7GX2G2b9QdikZHbbIcBjzQ" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item">
                <img src={require("../../static/img/skylo-portfolio5.jpg")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img"/>
                <div className="portfolio-overlay">
                    <h3>drokam-studio.pl</h3>
                    <h4>Strona internetowa firmy DROKAM</h4>
                    <a href="https://drokam-studio.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item">
                <img src={require("../../static/img/skylo-portfolio6.jpg")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img"/>
                <div className="portfolio-overlay">
                    <h3>skmponz.bydgoszcz.pl</h3>
                    <h4>Strona internetowa Stowarzyszenia Kombatantów Misji Pokojowych ONZ z Bydgoszczy</h4>
                    <a href="https://skmponz.bydgoszcz.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item">
                <img src={require("../../static/img/hotic-polska.jpg")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img"/>
                <div className="portfolio-overlay">
                    <h3>hotic-polska.pl</h3>
                    <h4>Sklep internetowy polskiego dystrybutora pistoletów masujących firmy Hotic</h4>
                    <a href="https://hotic-polska.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item">
                <img src={require("../../static/img/przedszkole.jpg")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img"/>
                <div className="portfolio-overlay">
                    <h3>przedszkoleswarzedz.pl</h3>
                    <h4>Strona internetowa Przedszkola i Żłobka Nauki i Sztuki w Swarzędzu</h4>
                    <a href="https://przedszkoleswarzedz.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>

            <div className="portfolio-item">
                <img src={require("../../static/img/twoj-mecenas.jpg")} alt="agencja-interaktywna-golub-dobrzyn-realizacje" className="portfolio-img"/>
                <div className="portfolio-overlay">
                    <h3>twojmecenas.pl</h3>
                    <h4>Strona internetowa Kancelarii Adwokackiej Twój Mecenas</h4>
                    <a href="https://twojmecenas.pl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/link.png")} alt="link" />
                    </a>
                </div>
            </div>
        </div>
    </section>);
};

export default Portfolio;
