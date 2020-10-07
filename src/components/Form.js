import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stronaPortfolio: false,
            stronaFirmowa: false,
            sklepInternetowy: false,
            aplikacjaWww: false,
            standard: false,
            profesjonalny: false,
            ultimate: false,
            email: "",
            phoneNumber: "",
            msg: "",
            formError: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlany = this.handlePlany.bind(this);
    }

    handleChange(e, name) {
        e.preventDefault();

        if(typeof name === 'undefined') {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
        else {
            switch(name) {
                case "stronaPortfolio":
                    this.setState({
                        stronaPortfolio: true,
                        stronaFirmowa: false,
                        sklepInternetowy: false,
                        aplikacjaWww: false
                    });
                    break;
                case "stronaFirmowa":
                    this.setState({
                        stronaFirmowa: true,
                        stronaPortfolio: false,
                        sklepInternetowy: false,
                        aplikacjaWww: false
                    });
                    break;
                case "sklepInternetowy":
                    this.setState({
                        sklepInternetowy: true,
                        stronaPortfolio: false,
                        stronaFirmowa: false,
                        aplikacjaWww: false
                    });
                    break;
                case "aplikacjaWww":
                    this.setState({
                        aplikacjaWww: true,
                        stronaPortfolio: false,
                        stronaFirmowa: false,
                        sklepInternetowy: false
                    });
                    break;
                default:
                    break;
            }
        }
    }

    handleSubmit(e) {
        console.log("SUBMIT!");
        e.preventDefault();

        /* Both empty verification */
        if((this.state.email.length === 0)&&(this.state.phoneNumber.length === 0)) {
            this.setState({
                formError: "Zostaw numer telefonu lub email"
            });
            return 0;
        }
        else {
            this.setState({
                formError: ""
            });
        }

        /* Email verification */
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if((this.state.email.length > 0)&&(!re.test(String(this.state.email).toLowerCase()))) {
            this.setState({
                formError: "Niepoprawny adres email"
            });
            return 0;
        }
        else {
            this.setState({
                formError: ""
            });
        }

        /* Phone number verification */
        if((isNaN(this.state.phoneNumber))||(this.state.phoneNumber.length > 12)||(this.state.phoneNumber.length < 9)) {
            this.setState({
                formError: "Niepoprawny numer telefonu"
            });
            return 0;
        }
        else {
            this.setState({
                formError: ""
            });
        }

        console.log(this.state);
    }

    handlePlany(plan) {
        if(plan === "standard") {
            this.setState({
                standard: true,
                profesjonalny: false,
                ultimate: false
            });
        }
        else if(plan === "profesjonalny") {
            this.setState({
                profesjonalny: true,
                standard: false,
                ultimate: false
            });
        }
        else {
            this.setState({
                ultimate: true,
                standard: false,
                profesjonalny: false
            });
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
                    <div className={this.state.standard ? "plan choice" : "plan"} onClick={() => this.handlePlany("standard")}>
                        <img src={require("../../static/img/gwiazdka.png")} alt="gwiazdka" className={this.state.standard ? "gwiazdka" : "d-none"} />
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
                    <div className={this.state.profesjonalny ? "plan choice" : "plan"} onClick={() => this.handlePlany("profesjonalny")}>
                        <img src={require("../../static/img/gwiazdka.png")} alt="gwiazdka" className={this.state.profesjonalny ? "gwiazdka" : "d-none"} />
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
                    <div className={this.state.ultimate ? "plan choice" : "plan"} onClick={() => this.handlePlany("ultimate")}>
                        <img src={require("../../static/img/gwiazdka.png")} alt="gwiazdka" className={this.state.ultimate ? "gwiazdka" : "d-none"} />
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
                    <form method="POST" action="#" onSubmit={e => this.handleSubmit(e)}>
                        <input type="text" name="email" placeholder="Adres email" value={this.state.email} onChange={e => this.handleChange(e)} />
                        <input type="text" name="phoneNumber" placeholder="Numer telefonu" value={this.state.phoneNumber} onChange={e => this.handleChange(e)} />
                        <textarea name="msg" className="msg" placeholder="Pytania, sugestie, uwagi (opcjonalnie)" />
                        <p className="disclaimer">Wypełnij preferowaną formę kontaktu - mail lub numer telefonu.</p>
                        <button type="submit" onClick={e => this.handleSubmit(e)} className="button button-submit">Wyślij</button>
                    </form>
                </div>
                <div className="right">
                    <p>Po wysłaniu formularza skontaktujemy się z Tobą <span className="bold">w przeciągu maksymalnie 24 godzin.</span><br/>
                        Pamiętaj, że <span className="bold">ostateczna wycena usługi zostanie ustalona podczas rozmów pomiędzy nami a Tobą.</span></p>

                    <div className={this.state.formError !== "" ? "errors" : "d-none"}>
                        Hej, mamy problem z wysłaniem Twojego formularza.<br/>
                        * {this.state.formError}
                    </div>
                </div>
            </div>
        </section>);
    }
}
