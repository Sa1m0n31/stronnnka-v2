import React from "react";

import Cards from "./Cards";
import plany from "../helpers/plany";

import { gsap } from 'gsap/all';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stronaPortfolio: true,
            stronaFirmowa: false,
            sklepInternetowy: false,
            aplikacjaWww: false,
            option: "strona portfolio",
            standard: false,
            profesjonalny: false,
            ultimate: false,
            email: "",
            phoneNumber: "",
            msg: "",
            formError: "",
            price: 400
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlany = this.handlePlany.bind(this);
        this.handleAnimation = this.handleAnimation.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
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
                        aplikacjaWww: false,
                        option: "strona portfolio"
                    }, this.handleAnimation);
                    break;
                case "stronaFirmowa":
                    this.setState({
                        stronaFirmowa: true,
                        stronaPortfolio: false,
                        sklepInternetowy: false,
                        aplikacjaWww: false,
                        option: "strona firmowa"
                    }, this.handleAnimation);
                    break;
                case "sklepInternetowy":
                    this.setState({
                        sklepInternetowy: true,
                        stronaPortfolio: false,
                        stronaFirmowa: false,
                        aplikacjaWww: false,
                        option: "sklep internetowy"
                    }, this.handleAnimation);
                    break;
                case "aplikacjaWww":
                    this.setState({
                        aplikacjaWww: true,
                        stronaPortfolio: false,
                        stronaFirmowa: false,
                        sklepInternetowy: false,
                        option: "aplikacja www"
                    }, this.handleAnimation);
                    break;
                default:
                    break;
            }
        }
    }

    handleAnimation() {
        this.handlePrice();
        if(typeof document !== 'undefined') {
            const planyGrid = document.querySelector(".plany-grid");
            const tl = gsap.timeline();
            tl.fromTo(planyGrid, {x: 0}, { x: -2000, duration: .2 })
                .fromTo(planyGrid, {x: 2200}, { x: 0, duration: .2, delay: .2 });
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
            }, this.handlePrice);
        }
        else if(plan === "profesjonalny") {
            this.setState({
                profesjonalny: true,
                standard: false,
                ultimate: false
            }, this.handlePrice);
        }
        else {
            this.setState({
                ultimate: true,
                standard: false,
                profesjonalny: false
            }, this.handlePrice);
        }
    }

    handlePrice() {
        switch(this.state.option) {
            case "strona portfolio":
                if(this.state.standard) this.setState({price: 400});
                else if(this.state.profesjonalny) this.setState({price: 600});
                else this.setState({price: 800});
                break;
            case "strona firmowa":
                if(this.state.standard) this.setState({price: 500});
                else if(this.state.profesjonalny) this.setState({price: 700});
                else this.setState({price: 1000});
                break;
            case "sklep internetowy":
                if(this.state.standard) this.setState({price: 1000});
                else if(this.state.profesjonalny) this.setState({price: 1500});
                else this.setState({price: 2000});
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
                <div className="right only-700">
                    <h4>Orientacyjna cena:</h4>
                    <h5 className="price red">{this.state.price} zł</h5>
                </div>
            </div>
            <div className="second-row">
                <h4>{this.state.aplikacjaWww ? "Napisz, czego potrzebujesz: " : <>Jaki <span className='bold'>plan</span> Cię interesuję?</>}</h4>
                <div className="plany-grid">
                    {this.state.aplikacjaWww ? <div className="aplikacjawww-msg">
                        <textarea name="aplikacjawww-msg" placeholder="Sposób działania aplikacji, wymagane technologie, główne oczekiwania..."/>
                    </div> : <Cards togglePlany={this.handlePlany} plany={plany} option={this.state.option} />}
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
