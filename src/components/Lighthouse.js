import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

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

    return (<section className="lighthouse">
        <h2>Maksymalna wydajność stron</h2>
        <h3>Doskonały performance, pełna responsywność i optymalizacja pod SEO</h3>
        <div className="row-container">
            <div className="first-row">
                <img src={require("../../static/img/lighthouse-logo.png")} alt="lighthouse" className="lighthouse-img" />
                <h4>Lighthouse</h4>
                <p>Do pomiaru poziomów wydajności witryny może posłużyć narzędzie Lighthouse. Prosty w obsłudze dodatek pokaże nam jakie wartości przyjmuje dana strona, np. w zakresie pozycjonowania SEO lub wydajności strony.</p>
                <img src={require("../../static/img/medal.png")} alt="medal" className="medal only-1250" />
            </div>
            <div className="second-row">
                <Img fluid={data.pomiary.childImageSharp.fluid} alt="pomiary" />
                <h4>Przykładowe pomiary dla jednej z naszych stron</h4>
                <p>Jak widać na załączonym obrazku, pomiary na jednym ze zrealizowanych przez nas projektów osiągają prawie maksymalną wartość przy każdym elemencie.</p>
            </div>
            <div className="third-row">
                <h3>Nasze projekty to <span className="red bold">w pełni profesjonalne realizacje</span>.</h3>
                <h4>Zadbaj o swój biznes razem z nami.</h4>
            </div>
        </div>
    </section>);
};

export default Lighthouse;
