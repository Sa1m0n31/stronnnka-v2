import React, { useEffect, useRef } from "react";

import { gsap, ScrollTrigger } from 'gsap/all';

const DlaczegoMy = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(header.current, { y: -200, opacity: 0 }, { y: 0, opacity: 1, duration: .5, scrollTrigger: {
                trigger: ".dlaczego-my",
                start: "top 80%"
            } });
    }, []);

    const header = useRef(null);

    return (<section className="dlaczego-my">
        <h2 ref={header}>Z nami zyskujesz</h2>
        <div className="dlaczego-my-inner">
            <h3 className="only-1500">
                Twoje<br/>
                <span className="red bold">siedem</span><br/>
                korzyści
            </h3>
            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/indywidualne-podejscie.svg")} alt="indywidualne-podejscie" />
                </div>
                <h4>Indywidualne podejście</h4>
                <p>Twoja strona nie będzie jednym z oklepanych szablonów niewyróżniających się niczym na tle konkurencji. Indywidualne podejście do każdego klienta to nasze pierwsze przykazanie.</p>
            </div>

            <img src={require("../../static/img/strzalki1.png")} alt="strzalki" className="arrow only-1500" />

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/doswiadczenie.svg")} alt="doswiadczenie" />
                </div>
                <h4>Doświadczenie</h4>
                <p>Tworzymy strony nie od dziś. Nasze przeszłe projekty możesz sprawdzić w portfolio.</p>
            </div>

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/pozycjonowanie.svg")} alt="pozycjonowanie" />
                </div>
                <h4>Pozycjonowanie</h4>
                <p>Wiemy o SEO więcej niż to, że to jakiś skrót związany z googlowaniem. Wywindujemy Twoją witrynę na szczyt każdej wyszukiwarki.</p>
            </div>

            <img src={require("../../static/img/strzalki2.png")} alt="strzalki" className="arrow2 only-1500" />

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/wydajnosc.svg")} alt="wydajnosc" />
                </div>
                <h4>Wydajność</h4>
                <p>Wiemy co zrobić, by Twoja strona była ponadprzeciętnie szybka. I nie zawahamy się tej wiedzy wykorzystać.</p>
            </div>

            <img src={require("../../static/img/strzalki3.png")} alt="strzalki" className="arrow3 only-1500" />

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/szybkosc-realizacji.svg")} alt="szybkosc-realizacji" />
                </div>
                <h4>Szybkość realizacji</h4>
                <p>Jeśli jakimś cudem nie wyrobimy się w terminie, gwarantujemy -50% od ceny bazowej za każdą dobę spóźnienia.</p>
            </div>

            <img src={require("../../static/img/strzalki4.png")} alt="strzalki" className="arrow4 only-1500" />

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/bezpieczenstwo.svg")} alt="bezpieczenstwo" />
                </div>
                <h4>Bezpieczeństwo</h4>
                <p>Certyfikat SSL, ochrona przed atakmi XSS i inne nudne rzeczy, o które dzięki nam nie musisz się martwić.</p>
            </div>

            <img src={require("../../static/img/strzalki5.png")} alt="strzalki" className="arrow5 only-1500"  />

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/cena.svg")} alt="cena" />
                </div>
                <h4>Cena</h4>
                <p>Dostosujemy projekt do Twoich możliwości finansowych. I zrobimy to taniej niż konkurencja.</p>
            </div>


        </div>
    </section>);
};

export default DlaczegoMy;
