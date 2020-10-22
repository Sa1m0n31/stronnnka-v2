import React, { useEffect, useRef } from "react";

import { gsap, ScrollTrigger } from 'gsap/all';

const DlaczegoMy = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let width;
        if(typeof window !== 'undefined') {
            width = window.innerWidth;
        }

        if(width > 900) {
            gsap.fromTo(header.current, { y: -200, opacity: 0 }, { y: 0, opacity: 1, duration: .5, scrollTrigger: {
                    trigger: ".dlaczego-my",
                    start: "top 80%"
                }});

            gsap.fromTo(item1.current, { y: 232, x: 231, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: {
                    trigger: ".dlaczego-my",
                    start: "top 50%"
                }});
            gsap.fromTo(item2.current, { y: 232, x: 231, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: {
                    trigger: ".dlaczego-my",
                    start: "top 25%"
                }});
            gsap.fromTo(item3.current, { y: 232, x: 231, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: {
                    trigger: ".dlaczego-my",
                    start: "top 15%"
                }});
            gsap.fromTo(item4.current, { y: 232, x: 231, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: {
                    trigger: ".trigger-2",
                    start: "top 100%"
                }});
            gsap.fromTo(item5.current, { y: 232, x: 231, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: {
                    trigger: ".trigger-2",
                    start: "top 85%"
                }});
            gsap.fromTo(item6.current, { y: 232, x: 231, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: {
                    trigger: ".trigger-2",
                    start: "top 55%"
                }});
            gsap.fromTo(item7.current, { y: 232, x: 231, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: {
                    trigger: ".trigger-2",
                    start: "top 85%"
                }});
        }
    }, []);

    const header = useRef(null);
    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const item4 = useRef(null);
    const item5 = useRef(null);
    const item6 = useRef(null);
    const item7 = useRef(null);
    const siedem = useRef(null);

    return (<section className="dlaczego-my">
        <h2 ref={header}>Z nami zyskujesz</h2>
        <div className="dlaczego-my-inner">
            <h3 className="only-1500">
                <span ref={siedem}>Twoje<br/>
                <span className="red bold">siedem</span>
                    korzyści</span>
            </h3>
            <div ref={item1} className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/indywidualne-podejscie.svg")} alt="indywidualne-podejscie" />
                </div>
                <h4>Indywidualne podejście</h4>
                <p>Twoja strona nie będzie jednym z oklepanych szablonów niewyróżniających się niczym na tle konkurencji. Indywidualne podejście do każdego klienta to nasze pierwsze przykazanie.</p>
            </div>

            <img src={require("../../static/img/strzalki1.png")} alt="strzalki" className="arrow only-1500" />

            <div ref={item2} className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/doswiadczenie.svg")} alt="doswiadczenie" />
                </div>
                <h4>Doświadczenie</h4>
                <p>Tworzymy strony nie od dziś. Nasze przeszłe projekty możesz sprawdzić w portfolio.</p>
            </div>

            <div ref={item3} className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/pozycjonowanie.svg")} alt="pozycjonowanie" />
                </div>
                <h4>Pozycjonowanie</h4>
                <p>Wiemy o SEO więcej niż to, że to jakiś skrót związany z googlowaniem. Wywindujemy Twoją witrynę na szczyt każdej wyszukiwarki.</p>
            </div>

            <img src={require("../../static/img/strzalki2.png")} alt="strzalki" className="arrow2 only-1500" />

            <div ref={item4} className="powod-item powod-item-left trigger-2">
                <div className="powod-img">
                    <img src={require("../../static/img/wydajnosc.svg")} alt="wydajnosc" />
                </div>
                <h4>Wydajność</h4>
                <p>Wiemy co zrobić, by Twoja strona była ponadprzeciętnie szybka. I nie zawahamy się tej wiedzy wykorzystać.</p>
            </div>

            <img src={require("../../static/img/strzalki3.png")} alt="strzalki" className="arrow3 only-1500" />

            <div ref={item5} className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/szybkosc-realizacji.svg")} alt="szybkosc-realizacji" />
                </div>
                <h4>Szybkość realizacji</h4>
                <p>Jeśli jakimś cudem nie wyrobimy się w terminie, gwarantujemy -50% od ceny bazowej za każdą dobę spóźnienia.</p>
            </div>

            <img src={require("../../static/img/strzalki4.png")} alt="strzalki" className="arrow4 only-1500" />

            <div ref={item6} className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/bezpieczenstwo.svg")} alt="bezpieczenstwo" />
                </div>
                <h4>Bezpieczeństwo</h4>
                <p>Certyfikat SSL, ochrona przed atakmi XSS i inne nudne rzeczy, o które dzięki nam nie musisz się martwić.</p>
            </div>

            <img src={require("../../static/img/strzalki5.png")} alt="strzalki" className="arrow5 only-1500"  />

            <div ref={item7} className="powod-item powod-item-left">
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
