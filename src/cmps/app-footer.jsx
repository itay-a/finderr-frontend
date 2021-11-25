import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

class _AppFooter extends React.Component {

    state = {
        isCartShown: false,
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className="app-footer-container">
                <div className="main-container">
                    <footer className="app-footer">
                        <div className="footer-upper-menu">
                            <div className="categories-div">
                                <article className="categories-article">
                                    <div className="title">
                                        <h6>Categories</h6>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link to="/explore">Graphics & Design</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Digital Marketing</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Writing & Translation</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Video & Animation</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Music & Audio</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Programming & Tech</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Data</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Business</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Lifestyle</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Sitemap</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </article>
                            </div>
                            <div className="about-div">
                                <article className="about-article">
                                    <div className="title">
                                        <h6>About</h6>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link to="/explore">Careers</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Partnerships</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Terms of Service</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Intellectual Property Claims</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Investor Relations</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </article>
                            </div>
                            <div className="support-div">
                                <article className="support-article">
                                    <div className="title">
                                        <h6>Support</h6>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link to="/explore">Help & Support</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Trust & Safety</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Selling on Finderr</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Buying on Finderr</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </article>
                            </div>
                            <div className="community-div">
                                <article className="community-article">
                                    <div className="title">
                                        <h6>Community</h6>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link to="/explore">Events</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Blog</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Forum</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Community Standards</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Podcast</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Affiliates</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Invite a Friend</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Become a Seller</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Finderr Elevate</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </article>
                            </div>
                            <div className="more-from-finderr-div">
                                <article className="more-from-finderr-article">
                                    <div className="title">
                                        <h6>More From Finderr</h6>
                                    </div>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <Link to="/explore">Fiverr Business</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Fiverr Pro</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Fiverr Studios</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Fiverr Logo Maker</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Fiverr Guides</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Get Inspired</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">ClearVoice</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">AND CO</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Learn</Link>
                                            </li>
                                            <li>
                                                <Link to="/explore">Working Not Working</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <div className="footer-bottom-line">
                            <div className="footer-left">
                                <div className="footer-logo">finderr<span>®️</span></div>
                                <div className="ltd">
                                    ©️ finderr international Ltd. 2021
                                </div>
                            </div>
                            <div className="footer-right">

                                <span><FaTwitter /></span>
                                <span><FaFacebook /></span>
                                <span><FaLinkedin /></span>
                                <span><FaPinterest /></span>
                                <span><FaInstagram /></span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export const AppFooter = (_AppFooter)
