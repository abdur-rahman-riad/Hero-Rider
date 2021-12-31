import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../image/logo.PNG';

const Footer = () => {
    return (
        <div className="bg-light pt-5 pb-2 mt-5">
            <Container style={{ marginBottom: "-20px" }}>
                <div className="row gy-5 align-items-center">
                    <div className="col-md-4 text-center">
                        <img src={logo} width="180px" height="50px" alt="" />
                    </div>

                    <div className="col-md-4 text-center">
                        <h5>Important Link</h5>
                        <li style={{ listStyle: "none" }}>Home</li>
                        <li style={{ listStyle: "none" }}>About Us</li>
                        <li style={{ listStyle: "none" }}>FAQ</li>
                        <li style={{ listStyle: "none" }}>Contact</li>
                    </div>

                    <div className="col-md-4 text-center">
                        <h5>Social Media</h5>
                        <li style={{ listStyle: "none" }}>Facebook</li>
                        <li style={{ listStyle: "none" }}>Instagram</li>
                        <li style={{ listStyle: "none" }}>Twitter</li>
                        <li style={{ listStyle: "none" }}>
                            <a href="https://rahmanriad.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                                style={{ textDecoration: "none", color: "black" }}
                                role="button">Developer</a></li>
                    </div>
                </div>
                <hr />
                <p className="text-center text-secondary pb-2">CopyRight &copy; All Right Reserved Hero Rider || Design & Developed by
                    <a href="https://www.linkedin.com/in/rahmanriad/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "black" }}
                        role="button"> Riad Abdur Rahman</a> </p>
            </Container>
        </div>
    );
};

export default Footer;