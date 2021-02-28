import React, { useState, useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import axios from 'axios';

import { gsap, ScrollTrigger } from "gsap/all";

import Menu from "./Menu";

const LandingPage = () => {
    gsap.registerPlugin(ScrollTrigger);
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

        gsap.set([h1.current, h2.current, btn.current], { y: -200, opacity: 0 });
        gsap.to([h1.current, h2.current, btn.current], { y: 0, opacity: 1, duration: 1.5 });

        /* TEST - call netlify function */
        axios.post("/.netlify/functions/sendgrid")
            .then(res => {
                console.log(res);
            });


    }, []);

    let [mobile, setMobile] = useState(false);

    const data = useStaticQuery(graphql`
        query Slider {
    slider: file(relativePath: { eq: "slider.png" }) {
        childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 1200) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
    sliderMobile: file(relativePath: { eq: "gwiazdy.png" }) {
        childImageSharp {
            fluid(maxWidth: 717, maxHeight: 812) {
                ...GatsbyImageSharpFluid_noBase64
            }
        }
    }
    }
    `);

    const up = useRef(null);
    const h1 = useRef(null);
    const h2 = useRef(null);
    const btn = useRef(null);

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
            <img src={require("../../static/img/arrow-up.png")} alt="do-gory" className="arrow-up no-select"/>
        </div>
        {mobile ? <Img loading="eager" fluid={data.sliderMobile.childImageSharp.fluid} alt="Slider" /> : <Img loading="eager" fluid={data.slider.childImageSharp.fluid} alt="Slider" imgStyle={{objectPosition: "10% 10%"}}/>}
        <Menu />
        <div className="landing-container">
            <div className="landing-inner">
                <h1 ref={h1}>Tworzymy <span className="bold">pod Ciebie</span></h1>
                <h2 ref={h2}>Profesjonalne projekty stron, sklepów internetowych, aplikacji WWW, grafiki reklamowej. {mobile ? "" : "Sprawdź nasze portfolio i skontaktuj się z nami, aby uzyskać więcej informacji na temat usług."}</h2>
                <button ref={btn} className="button button-landing no-select" onClick={() => goTo(".form-section")}>
                    {mobile ? "Zostaw do siebie kontakt" : "Skontaktuj się z nami"}
                    <div className="hover only-700">Wypełnij formularz</div>
                </button>
            </div>
            <div className="social-media">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Skylo-profesjonalne-witryny-dla-firm-107515137810946">
                    <img src={require("../../static/img/facebook.png")} alt="facebook" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/skylopl">
                    <img src={require("../../static/img/twitter.png")} alt="twitter" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/skylopl/?fbclid=IwAR1iJNegq_RFGIHzQ94v7tq7KY68HAAgZCaWQy6HWMKvmkgGDMxHLW5UqME">
                    <img src={require("../../static/img/instagram.png")} alt="instagram" />
                </a>
            </div>
        </div>
    </main>)
};

export default LandingPage;
