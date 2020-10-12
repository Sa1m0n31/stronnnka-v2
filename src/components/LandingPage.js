import React, { useState, useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import { gsap, Power4 } from "gsap/all";

import Menu from "./Menu";

const LandingPage = () => {
    useEffect(() => {
        if(typeof window !== 'undefined') {
            window.addEventListener("scroll", () => {
                if(window.pageYOffset > 100) {
                    gsap.to(up.current, {opacity: 1, duration: .5});
                }
                else {
                    gsap.fromTo(up.current, {opacity: 1}, {opacity: 0, duration: .5});
                }
            });

            if(window.innerWidth < 700) setMobile(true);
            window.addEventListener("resize", () => {
               if(window.innerWidth < 700) setMobile(true);
               else setMobile(false);
            });
        }
    }, []);

    let [mobile, setMobile] = useState(false);

    const data = useStaticQuery(graphql`
        query Slider {
    slider: file(relativePath: { eq: "slider.png" }) {
        childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 1200) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    sliderMobile: file(relativePath: { eq: "gwiazdy.png" }) {
        childImageSharp {
            fluid(maxWidth: 717, maxHeight: 812) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    }
    `);

    const btn = useRef(null);
    const up = useRef(null);

    const buttonAnimation = () => {
      if(!mobile) gsap.to(btn.current, { transform: "translate(0)", width: "100%", duration: 1, ease: Power4.easeOut});
    };

    const buttonLeave = () => {
      if(!mobile) gsap.to(btn.current, { transform: "translate(100%)", duration: 1, ease: Power4.easeOut });
    };

    const goTo = (arg) => {
        if((typeof document !== 'undefined')&&(typeof window !== 'undefined')) {
            if(arg !== "top") {
                let el = document.querySelector(arg);
                el.scrollIntoView({behavior: "smooth"});
            }
            else {
                window.scrollTo({top: 0, behavior: "smooth"});
            }
        }
    };

    return (<main className="landing-page">
        <div ref={up} className="arrow-up-container" onClick={() => goTo("top")}>
            <img src={require("../../static/img/arrow-up.png")} alt="do-gory" className="arrow-up"/>
        </div>
        {mobile ? <Img fluid={data.sliderMobile.childImageSharp.fluid} alt="Slider" /> : <Img fluid={data.slider.childImageSharp.fluid} alt="Slider" imgStyle={{objectPosition: "10% 10%"}}/>}
        <Menu />
        <div className="landing-container">
            <div className="landing-inner">
                <h1>Tworzymy <span className="bold">pod Ciebie</span></h1>
                <h2>Profesjonalne projekty stron, sklepów internetowych, aplikacji WWW, grafiki reklamowej. Sprawdź nasze portfolio i skontaktuj się z nami, aby uzyskać więcej informacji na temat usług.</h2>
                <button className="button button-landing" onMouseOver={buttonAnimation} onMouseLeave={buttonLeave} onClick={() => goTo(".form-section")}>
                    {mobile ? "Zostaw do siebie kontakt" : "Skontaktuj się z nami"}
                    <div ref={btn} className="hover only-700">Wypełnij formularz</div>
                </button>
            </div>
            <div className="social-media">
                <img src={require("../../static/img/facebook.png")} alt="facebook" />
                <img src={require("../../static/img/twitter.png")} alt="twitter" />
                <img src={require("../../static/img/instagram.png")} alt="instagram" />
            </div>
        </div>
    </main>)
};

export default LandingPage;
