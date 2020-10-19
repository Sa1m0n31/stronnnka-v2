import React from "react";

const Menu = () => {
    const goTo = (arg) => {
        if (typeof document !== 'undefined') {
            let el = document.querySelector(arg);
            el.scrollIntoView({behavior: "smooth"});
        }
    };

    return (<header className="top-menu">
        <div className="logo">
            <img src={require("../../static/img/logo.png")} alt="Skylo - tanie i profesjonalne strony internetowe" />
        </div>
        <menu>
            <ul>
                <li>Strona główna</li>
                <li onClick={() => goTo(".portfolio")}>Portfolio</li>
                <li onClick={() => goTo(".dlaczego-my")}>O nas</li>
                <li onClick={() => goTo(".form-section")}>Kontakt</li>
            </ul>
        </menu>
    </header>)
};

export default Menu;
