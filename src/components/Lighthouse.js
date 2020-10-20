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
                <h4>Wahasz się? Sprawdź nas!</h4>
                <p>Do pomiaru poziomów jakości witryny może posłużyć narzędzie Lighthouse. Prosty w obsłudze dodatek pokaże nam jakie wartości przyjmuje dana strona, np. w zakresie pozycjonowania SEO lub wydajności witryny.</p>
                <img src={require("../../static/img/medal.png")} alt="medal" className="medal only-1250" />
            </div>
            <div className="second-row">
                <Img fluid={data.pomiary.childImageSharp.fluid} alt="pomiary" />
                <h4>Przykładowe pomiary dla jednej z naszych stron</h4>
                <p>Wydajność, dostępność, najlepsze praktyki, SEO - w każdej z czterech kategorii nasze strony uzyskują wyniki bliskie perfekcji.
                    Nie wierzysz? <a className="sprawdz" target="_blank" rel="noreferrer" href="https://developers.google.com/web/tools/lighthouse">Sprawdź sam</a>!
                </p>
            </div>
            <div className="third-row">
                <h3>Nasze projekty to <span className="red bold">w pełni profesjonalne realizacje</span>.</h3>
                <h4>Zadbaj o swój biznes razem z nami.</h4>
            </div>
        </div>
    </section>);
};

export default Lighthouse;
