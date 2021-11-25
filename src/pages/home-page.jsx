import React from 'react';
import { connect } from 'react-redux';
import ServicesCarusel from '../cmps/services-slider.jsx'
import { loadGigs, onSetFilter } from '../store/gig.actions.js'
import { HomeHero } from '../cmps/home-hero.jsx'
import { TrustedBar } from '../cmps/trusted-bar.jsx';
import r32 from '../assets/img/r32.PNG';
import { FaRegCheckCircle } from 'react-icons/fa';
import business from '../assets/img/business.jpg';
import data from '../assets/img/data.jpg';
import digital from '../assets/img/digital.jpg';
import lifestyle from '../assets/img/lifestyle.jpg';
import music from '../assets/img/music.jpg';
import video from '../assets/img/video.jpg';
import writing from '../assets/img/writing.jpg';

class _HomePage extends React.Component {

    state = {
        gigs: []
    }

    componentDidMount() {
        const gigs = this.props.loadGigs()
        this.setState({ gigs })
    }

    render() {
        const { history } = this.props

        return (
            <section className="home-page ">
                <HomeHero history={history} />
                <TrustedBar />
                <div className="main-container">
                    <h1 className="popular-proffesional-services" style={{/*fontSize: "xx-large",*/ }}>Popular professional services</h1>
                    <div className="popular-services">
                        <ServicesCarusel />
                    </div>
                </div>
                <div className="home-selling-container">
                    <div className="main-container">
                        <div className="home-selling flex align-center">
                            <div className="home-selling-content">
                                <h2>A whole world of freelance talent at your fingertips</h2>
                                <ul>
                                    <li>
                                        <h4 className="flex"><span><FaRegCheckCircle color="grey" size="20px" /></span><span className="selling-txt"> The best for every budget</span></h4>
                                        <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                                    </li>
                                    <li>
                                        <h4 className="flex"><span><FaRegCheckCircle color="grey" size="20px" /></span><span className="selling-txt"> Quality work done quickly</span></h4>
                                        <p>Find the right freelancer to begin working on your project within minutes.</p>
                                    </li>
                                    <li>
                                        <h4 className="flex"><span><FaRegCheckCircle color="grey" size="20px" /></span><span className="selling-txt"> Protected payments, every time</span></h4>
                                        <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                                    </li>
                                    <li>
                                        <h4 className="flex"><span><FaRegCheckCircle color="grey" size="20px" /></span><span className="selling-txt">24/7 support</span></h4>
                                        <p>Questions? Our around-the-clock support team is available to help anytime, anywhere.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="selling-container home-selling-img flex align-center justify-center">
                                <img src={r32} alt="video" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="explore-marketplace-container">
                    <div className="main-container">
                        <div className="explore-marketplace">
                            <h1>Explore the marketplace</h1>
                            <div className="explore-icons">
                                <div className="icon flex column align-center">
                                    <img src={digital} alt="2" />
                                    <h3>Graphics & Design</h3>
                                </div>
                                <div className="icon flex column align-center">
                                    <img src={writing} alt="3" />
                                    <h3>Writing & Translation</h3>
                                </div>
                                <div className="icon flex column align-center">
                                    <img src={video} alt="4" />
                                    <h3>Video & Animation</h3>
                                </div>
                                <div className="icon flex column align-center">
                                    <img src={music} alt="5" />
                                    <h3>Music & Audio</h3>
                                </div>
                                <br />
                                <div className="icon flex column align-center">
                                    <img src={business} alt="7" />
                                    <h3>Business</h3>
                                </div>
                                <div className="icon flex column align-center">
                                    <img src={lifestyle} alt="8" />
                                    <h3>Lifestyle</h3>
                                </div>
                                <div className="icon flex column align-center" style={{ position: "relative", top: "17px" }}>
                                    <img src={data} alt="9" />
                                    <h3 style={{ position: "relative", top: "8px" }} >Data</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}
const mapDispatchToProps = {
    loadGigs,
    onSetFilter
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)