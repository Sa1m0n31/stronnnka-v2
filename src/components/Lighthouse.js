import React, { useEffect, useRef } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import { gsap, ScrollTrigger } from "gsap/all";

const Lighthouse = () => {
    const data = useStaticQuery(graphql`
        query Pomiary {
    pomiary: file(relativePath: { eq: "lighthouse.png" }) {
        childImageSharp {
            fluid(maxWidth: 756, maxHeight: 246) {
                ...GatsbyImageSharpFluid
            }
        }
    }}
    `);

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.set(slogan.current, { x: -1000, opacity: 0 });
        gsap.set(slideFromLeft.current, { x: -3000, opacity: 0 });
        gsap.set(slideFromRight.current, { x: 3000, opacity: 0 });
        gsap.to(slogan.current, { x: 0, opacity: 1, duration: 1, scrollTrigger: {
                trigger: ".slogan-trigger",
                start: "top 100%"
            } });
        gsap.fromTo([header1.current, header2.current], { y: -200, opacity: 0 }, { y: 0, opacity: 1, duration: .5, scrollTrigger: {
                trigger: ".lighthouse",
                start: "top 80%"
            } });

        gsap.to(slideFromLeft.current, { x: 0, opacity: 1, duration: .5, scrollTrigger: {
                trigger: ".left-trigger",
                start: "top 60%"
            } });
        gsap.to(slideFromRight.current, { x: 0, opacity: 1, duration: .5, scrollTrigger: {
                trigger: ".right-trigger",
                start: "top 60%"
            } });
    }, []);

    const slogan = useRef(null);
    const header1 = useRef(null);
    const header2 = useRef(null);
    const slideFromLeft = useRef(null);
    const slideFromRight = useRef(null);

    return (<section className="lighthouse">
        <h2 ref={header1}>Maksymalna wydajność stron</h2>
        <h3 ref={header2}>Doskonały performance, pełna responsywność i optymalizacja pod SEO</h3>
        <div className="row-container">
            <div ref={slideFromLeft} className="first-row left-trigger">
                <img src={require("../../static/img/lighthouse-logo.png")} alt="lighthouse" className="lighthouse-img" />
                <h4>Wahasz się? Sprawdź nas!</h4>
                <p>Do pomiaru poziomów jakości witryny może posłużyć narzędzie Lighthouse. Prosty w obsłudze dodatek pokaże nam jakie wartości przyjmuje dana strona, np. w zakresie pozycjonowania SEO lub wydajności witryny.</p>
                <img src={require("../../static/img/medal.png")} alt="medal" className="medal only-1250" />
            </div>
            <div ref={slideFromRight} className="second-row right-trigger">
                <Img fluid={data.pomiary.childImageSharp.fluid} alt="pomiary" />
                <h4>Przykładowe pomiary dla jednej z naszych stron</h4>
                <p>Wydajność, dostępność, najlepsze praktyki, SEO - w każdej z czterech kategorii nasze strony uzyskują wyniki bliskie perfekcji.
                    Nie wierzysz? <a className="sprawdz" target="_blank" rel="noreferrer" href="https://developers.google.com/web/tools/lighthouse">Sprawdź sam</a>!
                </p>
            </div>
            <div ref={slogan} className="third-row slogan-trigger">
                <h3>Nasze projekty to <span className="red bold">w pełni profesjonalne realizacje</span>.</h3>
                <h4>Zadbaj o swój biznes razem z nami.</h4>
            </div>
        </div>
    </section>);
};

export default Lighthouse;
