import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Link } from 'react-router-dom'
import { Slide } from 'react-slideshow-image';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import wordpress from '../assets/img/popular-services/wordpress.jpg';
import voiceover from '../assets/img/popular-services/voiceover.jpg';
import illustration from '../assets/img/popular-services/illustration.jpg';
import videoexplainer from '../assets/img/popular-services/bookcovers.jpg';
import logodesign from '../assets/img/popular-services/logodesign.jpg';
import dataentry from '../assets/img/popular-services/dataentry.jpg';
import animatedexplainer from '../assets/img/popular-services/animatedexplainer.jpg';
import translation from '../assets/img/popular-services/translation.jpg';
import socialmedia from '../assets/img/popular-services/socialmedia.jpg';
import seo from '../assets/img/popular-services/seo.jpg';

const ServicesCarusel = () => {
    const properties = {
        duration: 3000,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        
        indicators: true,
        prevArrow: <div className="indicator" style={{ width: "30px", marginRight: "-10px" }}><FaChevronLeft style={{ fontSize: "38px", padding: "10px", backgroundColor: "white", borderRadius: "50%" }} /></div>,
        nextArrow: <div className="indicator" style={{ width: "30px", marginLeft: "-24px" }}> <FaChevronRight style={{ fontSize: "38px", padding: "10px", backgroundColor: "white", borderRadius: "50%" }} /> </div>

    };
    
    
    return (
        <div className="carusel-services">
            <Slide {...properties}>
                <Link to="/explore?searchKey=logo">
                    <div className="img-div">
                        <div className="img-div-txt">
                            <h6>Build your brand</h6>
                            <h2>Logo Design</h2>
                        </div>
                            <img src={logodesign} alt="1" style={{maxWidth: '280px', maxHeight: '341px'}} />
                        
                    </div>
                </Link>
                <Link to="/explore?searchKey=WordPress">
                    <div className="img-div">
                        <div className="img-div-txt">
                            <h6>Customize your site</h6>
                            <h2>WordPress</h2>
                        </div>
                        <img src={wordpress} alt="1" style={{maxWidth: '280px', maxHeight: '341px'}} />
                    </div>
                </Link>
                <Link to="/explore?searchKey=Voice Over">
                    <div className="img-div" >
                        <div className="img-div-txt">
                            <h6>Share your message</h6>
                            <h2>Voice Over</h2>
                        </div>
                        <img src={voiceover} alt="1" style={{maxWidth: '280px', maxHeight: '341px'}} />
                    </div>
                </Link>
                <Link to="/explore?searchKey=Video Explainer">
                    <div className="img-div" >
                        <div className="img-div-txt">
                            <h6>Engage your audience</h6>
                            <h2>Video Explainer</h2>
                        </div>
                        <img src={animatedexplainer} alt="1" style={{maxWidth: '280px', maxHeight: '341px'}} />
                    </div>
                </Link>
                <Link to="/explore?searchKey=Social Media">
                    <div className="img-div" >
                        <div className="img-div-txt">
                            <h6>Reach more customers</h6>
                            <h2>Social Media</h2>
                        </div>
                        <img src={socialmedia} alt="1" style={{maxWidth: '280px', maxHeight: '341px'}} />
                    </div>
                </Link>
                <Link to="/explore?searchKey=SEO">
                    <div className="img-div" >
                        <div className="img-div-txt">
                            <h6>Unlock growth online</h6>
                            <h2>SEO</h2>
                        </div>
                        <img src={seo} alt="1" style={{maxWidth: '280px', maxHeight: '341px'}} />
                    </div>
                </Link>
                <Link to="/explore?searchKey=Illustration">
                    <div className="img-div">
                        <div className="img-div-txt">
                            <h6>Color your dreams</h6>
                            <h2>Illustration</h2>
                        </div>
                        <img src={illustration} alt="1" style={{maxWidth: '280px', maxHeight: '341px'}} />
                    </div>
                </Link>
                <Link to="/explore?searchKey=Translation">
                    <div className="img-div" >
                        <div className="img-div-txt">
                            <h6>Go global</h6>
                            <h2>Translation</h2>
                        </div>
                        <img src={translation} alt="1" style={{maxWidth: '280px', maxHeight: '341px'}} />
                    </div>
                </Link>
                <Link to="/explore?searchKey=Data Entry">
                    <div className="img-div" >
                        <div className="img-div-txt">
                            <h6>Learn your business</h6>
                            <h2>Data Entry</h2>
                        </div>
                        <img src={dataentry} alt="1" style={{maxWidth: '280px', maxHeight: '341px'}} />
                    </div>
                </Link>
                <Link to="/explore?searchKey=Book Covers">
                    <div className="img-div">
                        <div className="img-div-txt">
                            <h6>Showcase your story</h6>
                            <h2>Book Covers</h2>
                        </div>
                        <img src={videoexplainer} alt="1" style={{maxWidth: '280px', maxHeight: '341px'}} />
                    </div>
                </Link>
            </Slide>
        </div>
    )
}

export default ServicesCarusel;