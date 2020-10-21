import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from 'gsap/all';

const Technologie = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let width;
        if(typeof window !== 'undefined') {
            width = window.innerWidth;
        }

        if(width > 700) {
            gsap.set([item1.current, item2.current, item3.current, item4.current, item5.current, item6.current], { opacity: 0, y: 400 });
            gsap.to([item1.current, item2.current, item3.current], { opacity: 1, y: 0, duration: .5, scrollTrigger: {
                    trigger: ".technologie",
                    start: "top 10%"
                } });
            gsap.to([item4.current, item5.current, item6.current], { opacity: 1, y: 0, duration: .5, scrollTrigger: {
                    trigger: ".scroll-trigger-2",
                    start: "top 50%"
                } });
            gsap.fromTo(header.current, { y: -200, opacity: 0 }, { y: 0, opacity: 1, duration: .5, scrollTrigger: {
                    trigger: ".portfolio",
                    start: "top 5%"
                } });
        }
        else {
            gsap.set([item1.current, item2.current, item3.current, item4.current, item5.current, item6.current], { opacity: 0, y: 400 });
            gsap.to([item1.current, item2.current], { opacity: 1, y: 0, duration: .5, scrollTrigger: {
                    trigger: ".technologie",
                    start: "top 15%"
                } });
            gsap.to([item3.current, item4.current], { opacity: 1, y: 0, duration: .5, scrollTrigger: {
                    trigger: ".technologie",
                    start: "top 0%"
                } });
            gsap.to([item5.current, item6.current], { opacity: 1, y: 0, duration: .5, scrollTrigger: {
                    trigger: ".technologie",
                    start: "top -10%"
                } });
        }
    }, []);

    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const item4 = useRef(null);
    const item5 = useRef(null);
    const item6 = useRef(null);
    const header = useRef(null);

    return (<section className="technologie">
        <h2 ref={header}>Jakich technologii używamy przy tworzeniu Twojej strony?</h2>
        <div className="technologie-grid">
            <div ref={item1} className="technologie-item">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/react.png")} alt="react" />
                </div>
                <div className="technologie-text-container desktop-only">
                    <h3>React</h3>
                    <p>Javascriptowa biblioteka do tworzenia interfejsów graficznych. W oparciu o nią swoje witryny zbudowali m.in. <span className="half-bold">Netflix, PayPal czy Walmart</span>.</p>
                </div>
            </div>

            <div ref={item2} className="technologie-item">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/adobeXD.png")} alt="adobexd" />
                </div>
                <div className="technologie-text-container desktop-only">
                    <h3>Adobe XD</h3>
                    <p>Narzędzie do tworzenia interaktywnych prototypów stron internetowych. To tu pracujemy nad UX i <span className="half-bold">szatą graficzną Twojej witryny</span>.</p>
                </div>
            </div>

            <div ref={item3} className="technologie-item scroll-trigger-2 technologie-second-line">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/gatsby.png")} alt="gatsby" />
                </div>
                <div className="technologie-text-container desktop-only">
                    <h3>Gatsby</h3>
                    <p>Generator stron statycznych o ogromnych możliwościach. Strony oparte na Gatsbym wyróżniają się <span className="half-bold">większym bezpieczeństwem</span> i przede wszystkim <span className="half-bold">ponadprzeciętną szybkością</span>.</p>
                </div>
            </div>

            <div ref={item4} className="technologie-item">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/bootstrap.png")} alt="bootstrap" />
                </div>
                <div className="technologie-text-container desktop-only">
                    <h3>Bootstrap</h3>
                    <p>Tworzona przez programistów Twittera biblioteka CSS. To m.in. dzięki niej Twoja strona będzie perfekcyjnie dopasowywać się do <span className="half-bold">każdej rozdzielczości ekranu</span>.</p>
                </div>
            </div>

            <div ref={item5} className="technologie-item technologie-third-line">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/nodejs.png")} alt="nodejs" />
                </div>
                <div className="technologie-text-container desktop-only">
                    <h3>NodeJS</h3>
                    <p>Powstałe w 2009 roku środowisko uruchomieniowe aplikacji napisanych w Javascript. Od tego czasu zdążyli mu zaufać tacy giganci jak <span className="half-bold">Microsoft, Yahoo! czy Uber</span>.</p>
                </div>
            </div>

            <div ref={item6} className="technologie-item">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/wordpress.png")} alt="wordpress" />
                </div>
                <div className="technologie-text-container desktop-only">
                    <h3>Wordpress</h3>
                    <p>Najprostszy w obsłudzę CMS (Content Management System), dzięki któremu <span className="half-bold">nie będziesz miał(a) problemów z obsługą swojej witryny</span> (a nawet jeśli, to i tak Ci pomożemy).</p>
                </div>
            </div>
        </div>
    </section>)
};

export default Technologie;
