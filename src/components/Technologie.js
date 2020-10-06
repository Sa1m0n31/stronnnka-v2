import React from "react";

const Technologie = () => {
    return (<section className="technologie">
        <h2>Jakich technologii używamy przy tworzeniu Twojej strony?</h2>
        <div className="technologie-grid">
            <div className="technologie-item">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/react.png")} alt="react" />
                </div>
                <div className="technologie-text-container">
                    <h3>React</h3>
                    <p>Javascriptowa biblioteka do tworzenia interfejsów graficznych. W oparciu o nią swoje witryny zbudowali m.in. Netflix, PayPal czy Walmart.</p>
                </div>
            </div>

            <div className="technologie-item">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/adobeXD.png")} alt="adobexd" />
                </div>
                <div className="technologie-text-container">
                    <h3>Adobe XD</h3>
                    <p>Narzędzie do tworzenia interaktywnych prototypów stron internetowych. To tu pracujemy nad UX i szatą graficzną Twojej witryny.</p>
                </div>
            </div>

            <div className="technologie-item">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/gatsby.png")} alt="gatsby" />
                </div>
                <div className="technologie-text-container">
                    <h3>Gatsby</h3>
                    <p>Generator stron statycznych o ogromnych możliwościach. Strony oparte na Gatsbym wyróżniają się większym bezpieczeństwem i przede wszystkim ponadprzeciętną szybkością.</p>
                </div>
            </div>

            <div className="technologie-item">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/react.png")} alt="react" />
                </div>
                <div className="technologie-text-container">
                    <h3>React</h3>
                    <p>Javascriptowa biblioteka do tworzenia interfejsów graficznych. W oparciu o nią swoje witryny zbudowali m.in. Netflix, PayPal czy Walmart.</p>
                </div>
            </div>

            <div className="technologie-item">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/adobeXD.png")} alt="adobexd" />
                </div>
                <div className="technologie-text-container">
                    <h3>Adobe XD</h3>
                    <p>Narzędzie do tworzenia interaktywnych prototypów stron internetowych. To tu pracujemy nad UX i szatą graficzną Twojej witryny.</p>
                </div>
            </div>

            <div className="technologie-item">
                <div className="technologie-item-img">
                    <img src={require("../../static/img/gatsby.png")} alt="gatsby" />
                </div>
                <div className="technologie-text-container">
                    <h3>Gatsby</h3>
                    <p>Generator stron statycznych o ogromnych możliwościach. Strony oparte na Gatsbym wyróżniają się większym bezpieczeństwem i przede wszystkim ponadprzeciętną szybkością.</p>
                </div>
            </div>
        </div>
    </section>)
};

export default Technologie;
