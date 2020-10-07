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
            <h5>Nazwa</h5>
        </div>
        <menu>
            <ul>
                <li>Home</li>
                <li onClick={() => goTo(".portfolio")}>Portfolio</li>
                <li onClick={() => goTo(".dlaczego-my")}>O nas</li>
                <li onClick={() => goTo(".form-section")}>Kontakt</li>
            </ul>
        </menu>
    </header>)
};

export default Menu;
