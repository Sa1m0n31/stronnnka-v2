import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stronaPortfolio: false,
            stronaFirmowa: false,
            sklepInternetowy: false,
            aplikacjaWww: false,
            email: "",
            phoneNumber: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, name) {
        e.preventDefault();

        switch(name) {
            case "stronaPortfolio":
                this.setState({
                   stronaPortfolio: !this.state.stronaPortfolio
                });
                break;
            case "stronaFirmowa":
                this.setState({
                    stronaFirmowa: !this.state.stronaFirmowa
                });
                break;
            case "sklepInternetowy":
                this.setState({
                    sklepInternetowy: !this.state.sklepInternetowy
                });
                break;
            case "aplikacjaWww":
                this.setState({
                    aplikacjaWww: !this.state.aplikacjaWww
                });
                break;
            default:
                break;
        }
    }

    render() {
        return (<section className="form-section">
            <h2>Ubijemy ten interes?</h2>
            <h3>Darmowa wycena w 24h</h3>
            <div className="first-row">
                <div className="left">
                    <h4>Zaznacz, czego potrzebujesz:</h4>
                    <div className="options-strony">
                        <label onClick={(e) => this.handleChange(e, "stronaPortfolio")}>
                            <button className={!this.state.stronaPortfolio ? "button button-option" : "button button-option no-border"} id="strona-portfolio" >
                                <img src={require("../../static/img/oki.png")} alt="ok" className={this.state.stronaPortfolio ? "" : "d-none"} />
                            </button>Strona portfolio
                        </label>
                        <label onClick={(e) => this.handleChange(e, "stronaFirmowa")}>
                            <button className={!this.state.stronaFirmowa ? "button button-option" : "button button-option no-border"} id="strona-firmowa">
                                <img src={require("../../static/img/oki.png")} alt="ok" className={this.state.stronaFirmowa ? "" : "d-none"} />
                            </button>
                                Strona firmowa
                        </label>
                        <label onClick={(e) => this.handleChange(e, "sklepInternetowy")}>
                            <button className={!this.state.sklepInternetowy ? "button button-option" : "button button-option no-border"} id="sklep-internetowy">
                                <img src={require("../../static/img/oki.png")} alt="ok" className={this.state.sklepInternetowy ? "" : "d-none"} />
                            </button>
                                Sklep internetowy
                        </label>
                        <label onClick={(e) => this.handleChange(e, "aplikacjaWww")}>
                            <button className={!this.state.aplikacjaWww ? "button button-option" : "button button-option no-border"} id="aplikacja-www">
                                <img src={require("../../static/img/oki.png")} alt="ok" className={this.state.aplikacjaWww ? "" : "d-none"} />
                            </button>
                                Aplikacja www
                        </label>
                    </div>
                </div>
                <div className="right">
                    <h4>Orientacyjna cena:</h4>
                    <h5 className="price red">250 zł</h5>
                </div>
            </div>
            <div className="second-row">
                <h4>Jaki <span className="bold">plan</span> Cię interesuję?</h4>
                <div className="plany-grid">
                    <div className="plan">
                        <button className="button button-opcje">Standard</button>
                        <h5 className="description">Standardowe opcje na stronie</h5>
                        <ul className="attributes">
                            <li>Strona oparta na Wordpressie</li>
                            <li>Do 5 podstron</li>
                            <li>Kolejna opcja</li>
                            <li>I więcej</li>
                        </ul>
                        <button className="button button-wybierz">Wybierz plan</button>
                    </div>
                    <div className="plan">
                        <button className="button button-opcje">Profesjonalny</button>
                        <h5 className="description">Profesjonalna witryna</h5>
                        <ul className="attributes">
                            <li>Strona oparta na Wordpressie</li>
                            <li>Do 5 podstron</li>
                            <li>Kolejna opcja</li>
                            <li>I więcej</li>
                        </ul>
                        <button className="button button-wybierz">Wybierz plan</button>
                    </div>
                    <div className="plan">
                        <button className="button button-opcje">Ultimate</button>
                        <h5 className="description">Coś więcej niż strona...</h5>
                        <ul className="attributes">
                            <li>Strona oparta na Wordpressie</li>
                            <li>Do 5 podstron</li>
                            <li>Kolejna opcja</li>
                            <li>I więcej</li>
                        </ul>
                        <button className="button button-wybierz">Wybierz plan</button>
                    </div>
                </div>
            </div>
            <div className="third-row">
                <div className="left">
                    <h3>Zostaw kontakt do siebie, wypełnij <span className="bold">formularz</span> poniżej:</h3>
                    <form method="POST" action="#">
                        <input type="text" name="email" placeholder="Adres email" />
                        <input type="text" name="phoneNumber" placeholder="Numer telefonu" />
                        <textarea name="msg" className="msg" placeholder="Pytania, sugestie, uwagi (opcjonalnie)" />
                        <button type="submit" className="button button-submit">Wyślij</button>
                    </form>
                </div>
                <div className="right">
                    <p>Po wysłaniu formularza skontaktujemy się z Tobą <span className="bold">w przeciągu maksymalnie 24 godzin.</span><br/>
                        Pamiętaj, że <span className="bold">ostateczna wycena usługi zostanie ustalona podczas rozmów pomiędzy nami a Tobą.</span></p>
                </div>
            </div>
        </section>);
    }
}
