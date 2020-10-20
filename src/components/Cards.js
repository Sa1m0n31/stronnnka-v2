import React, { useState } from 'react';

const Cards = ({option, plany, togglePlany}) => {

    const { stronaPortfolio, stronaFirmowa, sklepInternetowy } = plany;
    let strona;
    if(option === "strona portfolio") strona = stronaPortfolio;
    else if(option === "strona firmowa") strona = stronaFirmowa;
    else strona = sklepInternetowy;

    let [standard, setStandard] = useState(false);
    let [profesjonalny, setProfesjonalny] = useState(true);
    let [ultimate, setUltimate] = useState(false);

    const handlePlany = (arg) => {
        togglePlany(arg); // Change state in parent component
        switch(arg) {
                case "standard":
                    setStandard(true);
                    setProfesjonalny(false);
                    setUltimate(false);
                    break;
                case "profesjonalny":
                    setStandard(false);
                    setProfesjonalny(true);
                    setUltimate(false);
                    break;
                case "ultimate":
                    setStandard(false);
                    setProfesjonalny(false);
                    setUltimate(true);
                    break;
                default:
                    break;
        }
    };

    return (<>
        {/* STANDARD */}
        <div className={standard ? "plan choice no-select" : "plan no-select"} onClick={() => handlePlany("standard")}>
            <button className="button button-opcje">Standard</button>
            <h5 className="description">Standardowe opcje na stronie</h5>
            <ul className="attributes">
                {strona.standard.map((item, index) => {
                    return (<li key={index}>{item}</li>);
                })}
            </ul>
            <button className="button button-wybierz">Wybierz plan</button>
        </div>
        {/* PROFESJONALNY */}
        <h5 className="zalecany-plan desktop-only no-select">Wybór klientów</h5>
        <div className="best-plan no-select">
            <div className={profesjonalny ? "plan choice no-select" : "plan no-select"} onClick={() => handlePlany("profesjonalny")}>
                <img src={require("../../static/img/gwiazdka.png")} alt="gwiazdka" className="gwiazdka"/>
                <button className="button button-opcje">Profesjonalny</button>
                <h5 className="description">Profesjonalna witryna</h5>
                <ul className="attributes">
                    {strona.profesjonalny.map((item, index) => {
                        return (<li key={index}>{item}</li>);
                    })}
                </ul>
                <button className="button button-wybierz">Wybierz plan</button>
            </div>
        </div>
        {/* ULTIMATE */}
        <div className={ultimate ? "plan choice no-select" : "plan no-select"} onClick={() => handlePlany("ultimate")}>
            <button className="button button-opcje">Ultimate</button>
            <h5 className="description">Coś więcej niż strona...</h5>
            <ul className="attributes">
                {strona.ultimate.map((item, index) => {
                    return (<li key={index}>{item}</li>);
                })}
            </ul>
            <button className="button button-wybierz">Wybierz plan</button>
        </div>
    </>)
};

export default Cards;
