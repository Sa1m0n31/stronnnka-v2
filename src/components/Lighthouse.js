import React from "react";

const Lighthouse = () => {
    return (<section className="lighthouse">
        <h2>Maksymalna wydajność stron</h2>
        <h3>Doskonały performance, pełna responsywność i optymalizacja pod SEO</h3>
        <img src={require("../../static/img/medal.png")} alt="medal" className="medal mobile-only" />
        <div className="first-row">
            <img src={require("../../static/img/lighthouse-logo.png")} alt="lighthouse" className="lighthouse-img" />
            <h4>Lighthouse</h4>
            <p>Do pomiaru poziomów wydajności witryny może posłużyć narzędzie Lighthouse. Prosty w obsłudze dodatek pokaże nam jakie wartości przyjmuje dana strona, np. w zakresie pozycjonowania SEO lub wydajności strony.</p>
        </div>
        <div className="second-row">
            <img src={require("../../static/img/pomiary.png")} alt="pomiary" className="pomiary" />
            <h4>Przykładowe pomiary dla jednej z naszych stron</h4>
            <p>Jak widać na załączonym obrazku, pomiary na jednym ze zrealizowanych przez nas projektów osiągają prawie maksymalną wartość przy każdym elemencie.</p>
        </div>
        <div className="third-row">
            <h3>Nasze projekty to <span className="red">w pełni profesjonalne realizacje.</span></h3>
            <h4>Zadbaj o swój biznes razem z nami</h4>
        </div>
    </section>);
};

export default Lighthouse;
