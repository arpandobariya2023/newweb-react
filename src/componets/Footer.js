import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="social-link">
                            <ul className="list-unstyled">
                                <li><a href="javascript:void(0)"><i className="fa-brands fa-facebook-f" /></a></li>
                                <li><a href="javascript:void(0)"><i className="fa-brands fa-twitter" /></a></li>
                                <li><a href="javascript:void(0)"><i className="fa-brands fa-pinterest-p" /></a></li>
                                <li><a href="javascript:void(0)"><i className="fa-brands fa-linkedin" /></a></li>
                                <li><a href="javascript:void(0)"><i className="fa-brands fa-instagram" /></a></li>
                                <li><a href="javascript:void(0)"><i className="fa-brands fa-vimeo-v" /></a></li>
                                <li><a href="javascript:void(0)"><i className="fa-brands fa-dribbble" /></a></li>
                                <li><a href="javascript:void(0)"><i className="fa-brands fa-behance" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-main">
                        <div className="row">
                            <div className="col-6">
                                <div className="footer-widget footer-1">
                                    <div className="heading">
                                        <h2>Get in touch!</h2>
                                        <p>Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut
                                            ullamcorper purus</p>
                                        <form>
                                            <div className="input-group">
                                                <span className="mail"><i className="fa-solid fa-envelope-open" /></span>
                                                <input type="email" className="email" placeholder="Email Address" />
                                                <button className="email-btn" type="submit">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="footer-widget">
                                            <h6>Services</h6>
                                            <div className="services-menu">
                                                <ul className="services-ul">
                                                    <li><a href="javascript:void(0)">Design</a></li>
                                                    <li><a href="javascript:void(0)">Development</a></li>
                                                    <li><a href="javascript:void(0)">Online marketing</a></li>
                                                    <li><a href="javascript:void(0)">Business</a></li>
                                                    <li><a href="javascript:void(0)">Technology</a></li>
                                                    <li><a href="javascript:void(0)">Content strategy</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="footer-widget">
                                            <h6>Resourses</h6>
                                            <div className="services-menu">
                                                <ul className="services-ul">
                                                    <li><a href="javascript:void(0)">Blog</a></li>
                                                    <li><a href="javascript:void(0)">Case Studies</a></li>
                                                    <li><a href="javascript:void(0)">Portfolio</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="footer-widget">
                                            <h6>Support</h6>
                                            <div className="services-ul">
                                                <ul className="services-ul">
                                                    <li><a href="javascript:void(0)">Contact</a></li>
                                                    <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                                    <li><a href="javascript:void(0)">Terms of Use</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-6 footer-col">
                                <div className="footer-copyright">
                                    <div className="copyright-text">
                                        <span>© 2022. All rights reserved by <a className="axilthemes" href="javascript:void(0)">Axilthemes</a>.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="footer-bottom-link">
                                    <ul className="list-unstyled">
                                        <li className="list-unstyled-li"><a href="javascript:void(0)">Privacy Policy</a></li>
                                        <li className="footer-use"><a href="javascript:void(0)">Terms of Use</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer
