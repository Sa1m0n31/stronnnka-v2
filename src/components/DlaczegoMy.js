import React, { useEffect, useState } from "react";

const DlaczegoMy = () => {

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    return (<section className="dlaczego-my">
        <h2>Dlaczego warto nam zaufać?</h2>
        <div className="dlaczego-my-inner">
            <h3>
                Sprawdź<br/>
                <span className="red bold">siedem</span><br/>
                powodów
            </h3>
            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/indywidualne-podejscie.png")} alt="indywidualne-podejscie" />
                </div>
                <h4>Indywidualne podejście</h4>
                <p>Twoja strona nie będzie jednym z oklepanych szablonów niewyróżniających się niczym na tle konkurencji.<br/>Indywidualne podejście do każdego klienta<br/>to nasze pierwsze przykazanie.</p>
            </div>

            <img src={require("../../static/img/strzalki1.png")} alt="strzalki" className="arrow" />

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/doswiadczenie.png")} alt="doswiadczenie" />
                </div>
                <h4>Doświadczenie</h4>
                <p>Tworzymy strony nie od dziś. Nasze przeszłe projekty możesz sprawdzić w portfolio.</p>
            </div>

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/pozycjonowanie.png")} alt="pozycjonowanie" />
                </div>
                <h4>Pozycjonowanie</h4>
                <p>Wiemy o SEO więcej niż to, że to jakiś skrót związany z googlowaniem. Wywindujemy Twoją witrynę na szczyt każdej wyszukiwarki.</p>
            </div>

            <img src={require("../../static/img/strzalki2.png")} alt="strzalki" className="arrow2" />

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/wydajnosc.svg")} alt="wydajnosc" />
                </div>
                <h4>Wydajność</h4>
                <p>Wiemy co zrobić, by Twoja strona była ponadprzeciętnie szybka. I nie zawahamy się tej wiedzy wykorzystać.</p>
            </div>

            <img src={require("../../static/img/strzalki3.png")} alt="strzalki" className="arrow3" />

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/szybkosc-realizacji.svg")} alt="szybkosc-realizacji" />
                </div>
                <h4>Szybkość realizacji</h4>
                <p>Jeśli jakimś cudem nie wyrobimy się w terminie, gwarantujemy -50% od ceny bazowej za każdą dobę spóźnienia.</p>
            </div>

            <img src={require("../../static/img/strzalki4.png")} alt="strzalki" className="arrow4" />

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/bezpieczenstwo.svg")} alt="bezpieczenstwo" />
                </div>
                <h4>Bezpieczeństwo</h4>
                <p>Certyfikat SSL, ochrona przed atakmi XSS i inne nudne rzeczy, o które dzięki nam nie musisz się martwić.</p>
            </div>

            <img src={require("../../static/img/strzalki5.png")} alt="strzalki" className="arrow5" />

            <div className="powod-item powod-item-left">
                <div className="powod-img">
                    <img src={require("../../static/img/cena.svg")} alt="cena" />
                </div>
                <h4>Cena</h4>
                <p>Dostosujemy projekt do Twoich możliwości finansowych. I zrobimy to taniej niż konkurencja.</p>
            </div>


        </div>
    </section>);
};

export default DlaczegoMy;
