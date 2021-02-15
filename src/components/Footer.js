import React from "react";

const Footer = () => {
    return (<footer className="footer">
        <div className="footer-inner">
            <div className="column">
                <h5>Social media</h5>
                <div className="social-media">
                    <a href="https://www.facebook.com/Skylo-profesjonalne-witryny-dla-firm-107515137810946" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/facebook-footer.png")} alt="facebook" />
                    </a>
                    <a href="https://twitter.com/skylopl" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/twitter-footer.png")} alt="twitter" />
                    </a>
                    <a href="https://www.instagram.com/skylopl/?fbclid=IwAR1iJNegq_RFGIHzQ94v7tq7KY68HAAgZCaWQy6HWMKvmkgGDMxHLW5UqME" rel="noreferrer" target="_blank">
                        <img src={require("../../static/img/instagram-footer.png")} alt="instagram" />
                    </a>
                </div>
            </div>
            <div className="column">
                <h5>Nasza oferta</h5>
                <ul>
                    <li>Strony internetowe</li>
                    <li>Projekty graficzne</li>
                    <li>Aplikacje www</li>
                    <li>Tworzenie reklam</li>
                </ul>
            </div>
            <div className="column">
                <h5>Kontakt z nami</h5>
                <ul>
                    <li>kontakt@skylo.pl</li>
                    <li>697 099 402</li>
                    <li>600 179 174</li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <h6>Copyright &copy; Skylo.pl { new Date().getFullYear() }</h6>
        </div>
    </footer>);
};

export default Footer;
