import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="small-12 medium-6 large-5 columns">
                    <p className="logo"><i className="fi-shield"></i>PERSONAL BLOG</p>
                    <p className="footer-links">
                        <a href="#">News</a>
                        <a href="#">Search</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                    </p>
                    <p className="copywrite">Copywrite not copywrite © 2015</p>
                </div>
                <div className="small-12 medium-6 large-4 columns">
                    <ul className="contact">
                        <li><p><i className="fi-marker"></i>1234 Spring Street New York, CT 00001</p></li>
                        <li><p><i className="fi-telephone"></i><a href="tel:12223334444">+1-222-333-4444</a></p></li>
                        <li><p><i className="fi-mail"></i><a href="mailto:contact@example.com">contact@example.com</a>
                        </p></li>
                    </ul>
                </div>
                <div className="small-12 medium-12 large-3 columns">
                    <p className="about">About Blog</p>
                    <p className="about subheader">A blog is a discussion or informational site published on the World
                        Wide Web consisting of discrete entries ("posts") typically displayed in reverse chronological
                        order. </p>

                </div>
            </div>
        </footer>
    )
};

export default Footer;