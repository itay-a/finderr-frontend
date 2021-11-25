import React from 'react'
import { connect } from 'react-redux';
import { onRemoveGig, onEditGig } from '../store/gig.actions.js'
import { gigService } from '../services/gig.service.js';
import { ModalApp } from '../cmps/app-modal.jsx';
import { GigEdit } from '../cmps/gig-edit.jsx';
import { OrderAdd } from '../cmps/order-add.jsx'
import GigsCarusel from '../cmps/gigs-slider.jsx';
import face1 from '../assets/img/face1.PNG';
import face2 from '../assets/img/face2.PNG';
import face3 from '../assets/img/face3.PNG';
import { FaRegClock } from 'react-icons/fa';
import { FaRedo } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { FaStar } from 'react-icons/fa';



export class _GigDetails extends React.Component {

    state = {
        gig: null,
        showModal: false
    }

    async componentDidMount() {
        const gigId = this.props.match.params.gigId
        if (!gigId) return
        const gig = await gigService.getById(gigId)
        this.setState({ gig })
    }

    onRemove = async (gigId) => {
        await this.props.onRemoveGig(gigId)
        this.props.history.push("/")
    }

    openModal = () => {
        this.setState({ showModal: true })
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        const { gig, order } = this.state
        const { history } = this.props
        if (!gig) return <div>Loading...</div>
        return (

            <div className="details-page main-container">
                <div className="details-page-wrapper flex">
                    <div className="gig-details">
                        <div className="gig-title">
                            <h2>{gig.title}</h2>
                            <div className="mini-title">
                                <img src={gig.seller.UserPhoto} alt="1" style={{ maxHeight: "40px", maxWidth: "40px" }} />
                                {<h5>{gig.seller.fullname}  <FaStar style={{color: '#ffbe5b', paddingTop: '2px'}}/> <span className="rate"> {gig.rate}</span>  ({gig.rateCount})<span> |  1 Orders in Queue</span></h5>}
                            </div>
                        </div>
                        <div className="gig-image-slider">
                            <GigsCarusel />
                        </div>
                        <div className="about-gig">
                            <h2>About This Gig</h2>
                            <p>{gig.description}</p>
                        </div>
                        <div className="about-seller">
                            <h2>About The Seller</h2>
                            <div className="seller-profile">
                                <div className="seller-img">
                                    <img src={gig.seller.UserPhoto} alt="1" style={{ borderRadius: "50%", maxHeight: "140px", maxWidth: "140px" }} />
                                </div>
                                <div className="seller-sum">
                                    <div className="seller-name">
                                        <h4>{gig.seller.fullname}</h4>
                                    </div>
                                    <div className="seller-rate">
                                        <FaStar style={{color: '#ffbe5b', paddingTop: '2px'}}/> <span>{gig.rate}</span>
                                    </div>
                                    <div className="contact-me">
                                        <button>Contact Me</button>
                                    </div>
                                </div>

                            </div>
                            <div className="seller-bio">
                                <ul>
                                    <li>
                                        <h6>Seller</h6>
                                        <h4>{gig.seller.fullname}</h4>
                                    </li>
                                    <li>
                                        <h6>From</h6>
                                        <h4>{gig.seller.from}</h4>
                                    </li>
                                    <li>
                                        <h6>Response time</h6>
                                        <h4>{gig.seller.AvResponseTime}</h4>
                                    </li>
                                    <li>
                                        <h6>Member since</h6>
                                        <h4>{gig.seller.MemberSince}</h4>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="seller-reviews">
                            <h2>What People Loved About This Seller</h2>
                            <Slide>

                                <div className="review-slider">
                                    <div className="seller-image">
                                        <img src={face1} alt="1" style={{ borderRadius: "50%", maxHeight: "70px", maxWidth: "70px" }} />
                                    </div>
                                    <div className="seller-rev">
                                        {/* {gig.reviews[0]} */}
                                        What a product I'll use it over and over again!
                                        Superb Seller working with, wonderful communication and collaboration
                                        
                                    </div>
                                </div>
                                <div className="review-slider">
                                    <div className="seller-image">
                                        <img src={face2} alt="1" style={{ borderRadius: "50%", maxHeight: "70px", maxWidth: "70px" }} />
                                    </div>
                                    <div className="seller-rev">
                                        {/* {gig.reviews[1]}  */}
                                        The Seller was very prompt in communications and implementing requested changes.
                                        This included many iterations through different design strategies as well as sometimes reverting to previous ideas,
                                        all of which were accepted and done quickly.
                                    </div>
                                </div>
                                <div className="review-slider">
                                    <div className="seller-image">
                                        <img src={face3} alt="1" style={{ borderRadius: "50%", maxHeight: "70px", maxWidth: "70px" }} />
                                    </div>
                                    <div className="seller-rev">
                                        {/* {gig.reviews}  */}
                                        Remarkable experience and client, Delivery time was shorter than expected.
                                    </div>

                                </div>
                            </Slide>

                        </div>
                        {/* <button className="edit-gig" onClick={()=> this.props.onEditGig(gig)}>Edit</button> */}
                        <ModalApp
                            showModal={this.state.showModal}
                            openModal={() => this.setState({ showModal: true })}
                            closeModal={() => this.setState({ showModal: false })}
                        >
                            <GigEdit onEdit={this.onEdit} gig={gig} history={history} />
                        </ModalApp>
                    </div>
                    <div className="sidebar">
                        <div className="package-content">
                            <div className="flex package-price">
                                <h3>Package Price</h3>
                                <h3><span>${gig.price}</span></h3>
                            </div>
                            <p>Includes 1 logo design concept with 3 free revisions plus more to come </p>
                            <div className="delivery">
                                <span><FaRegClock size={20} /></span> {gig.deliveryIn} Days Delivery <span><FaRedo /></span> Revisions
                            </div>
                            <div className="check-mark">
                                <ul>
                                    <li>
                                        <FaCheck style={{ color: "green" }} /> <span>Logo Transparency</span>
                                    </li>
                                    <li>
                                        <FaCheck style={{ color: "green" }} /> <span>High Resolution</span>
                                    </li>
                                    <li>
                                        <FaCheck style={{ color: "green" }} /> <span>3D Mockup</span>
                                    </li>
                                    <li>
                                        <FaCheck style={{ color: "green" }} /> <span>Topic Research</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="continue-button">
                            <OrderAdd onOrder={this.onOrder} order={order} gig={gig} ></OrderAdd>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs
    }
}
const mapDispatchToProps = {
    onRemoveGig,
    onEditGig,
}
export const GigDetails = connect(mapStateToProps, mapDispatchToProps)(_GigDetails)