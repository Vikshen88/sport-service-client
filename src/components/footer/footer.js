import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="small-12 medium-6 large-4 columns">
                    <ul className="contact">
                        <li><p><i className="fi-marker"></i>Украина</p></li>
                        <li><p><i className="fi-telephone"></i>380888888888</p></li>
                        <li><p><i className="fi-mail"></i>pochta@pochta.com</p></li>
                    </ul>
                </div>
                <div className="small-12 medium-12 large-3 columns">
                    <p className="about">Про сайт</p>
                    <p className="about subheader"> Данный сайт был создан для просмотра спортивных матчей.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;