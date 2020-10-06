import React, { useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import { gsap, Power4 } from "gsap/all";

import Menu from "./Menu";

const LandingPage = () => {
    const data = useStaticQuery(graphql`
        query Slider {
    slider: file(relativePath: { eq: "slider.png" }) {
        childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 1200) {
                ...GatsbyImageSharpFluid
            }
        }
    }}
    `);

    const btn = useRef(null);

    const buttonAnimation = () => {
      gsap.to(btn.current, { transform: "translate(0)", width: "100%", duration: 1, ease: Power4.easeOut});
    };

    const buttonLeave = () => {
      gsap.to(btn.current, { transform: "translate(100%)", duration: 1, ease: Power4.easeOut });
    };

    return (<main className="landing-page">
        <Img fluid={data.slider.childImageSharp.fluid} alt="Slider" imgStyle={{objectPosition: "10% 10%"}}/>
        <Menu />
        <div className="landing-container">
            <h1>Tworzymy <span className="bold">pod Ciebie</span></h1>
            <h2>Profesjonalne projekty stron, sklepów internetowych, aplikacji WWW, grafiki reklamowej Sprawdź nasze portfolio i skontaktuj się z nami, aby uzyskać więcej informacji na temat usług</h2>
            <button className="button button-landing" onMouseOver={buttonAnimation} onMouseLeave={buttonLeave}>
                Skontaktuj się z nami
                <div ref={btn} className="hover">Wypełnij formularz</div>
            </button>
            <div className="social-media">
                <img src={require("../../static/img/facebook.png")} alt="facebook" />
                <img src={require("../../static/img/twitter.png")} alt="twitter" />
                <img src={require("../../static/img/instagram.png")} alt="instagram" />
            </div>
        </div>
    </main>)
};

export default LandingPage;
