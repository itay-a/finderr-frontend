import React from 'react'
import { connect } from 'react-redux'
import { ModalApp } from '../cmps/app-modal.jsx'
import { GigAdd } from '../cmps/gig-add.jsx'
import { GigEdit } from '../cmps/gig-edit.jsx'
import { GigList } from '../cmps/gig-list.jsx'
import { OrderList } from '../cmps/order-list.jsx'
import { loadGigs, onAddGig, onEditGig, onRemoveGig } from '../store/gig.actions.js'
import { loadOrders } from '../store/order.actions.js'
import { userService} from '../services/user.service.js'
// import { showSellerMsg } from '../services/event-bus.service.js'
// import { socketService } from '../services/socket.service.js'

// import { UserMsg } from '../cmps/user-msg.jsx'

const queryString = require('query-string');



class _SellerPage extends React.Component {
    state = {
        orders: [],
        showModal: false,
        currGig: null
    }

    async componentDidMount() {
        // socketService.on('order-for-you', this.updateUsers)
        console.log(queryString.parse(this.props.location.search));
        console.log(this.props.location.search);
        const parsed = queryString.parse(this.props.location.search);
        await this.props.loadOrders(parsed)
        await this.props.loadGigs(parsed)
    }

    // updateUsers = (msg) => {
    //     const parsed = queryString.parse(this.props.location.search);
    //     console.log('in update users header', msg);
    //     showSellerMsg(msg)
    //     loadOrders(parsed)
    // }

    onRemoveGig = (gigId) => {
        this.props.onRemoveGig(gigId)
    }

    onAddGig = (gig) => {
        this.props.onAddGig(gig)
        this.closeModal()
    }

    EditGig = async (gig) => {
        console.log('in edit');
        const parsed = queryString.parse(this.props.location.search);
        console.log(parsed);
        await this.props.onEditGig(gig)
        await this.props.loadGigs(parsed)
        this.closeModal()
    }

    openModal = (gig) => {
        if (gig) this.setState({ currGig: gig })
        this.setState({ showModal: true })
    }

    closeModal = () => {
        console.log('in close');
        this.setState({ showModal: false })
        this.setState({ currGig: null })
    }


    render() {
        console.log(this.state);
        const loggedUser = userService.getLoggedinUser()
        if (!loggedUser) return (<div className="signin-first">You have to sign in if you want to become a seller</div>)
        const { orders, gigs } = this.props
        return (
            <div className="seller-page main-container">
                <div className="header-container-cat">
                    <nav className="header-cat">
                        <ul>
                            <li>
                                <div>My Orders</div>
                            </li>
                            <li>
                                <div >Active</div>
                            </li>
                            <li>
                                <div >Pending </div>
                            </li>
                            <li>
                                <div >Denied</div>
                            </li>
                            <li>
                                <div >Draft</div>
                            </li>
                            <li>
                                <div >Completed</div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="orders-list ">
                    <button className="btn-add-gig" onClick={() => this.openModal(null)}>Add Gig To Your Collection</button>
                    <OrderList orders={orders} />
                </div>
                <div className="gig-list ">
                    <div className="my-gigs">My Gigs</div>
                    <GigList gigs={gigs} onRemoveGig={this.onRemoveGig} openModal={this.openModal} />
                </div>
                <div className="start-selling">
                    <div className="gig-sell">
                        <div className="add-gig-modal">
                            <ModalApp
                                className="modal"
                                showModal={this.state.showModal}
                                openModal={() => this.setState({ showModal: true })}
                                closeModal={() => this.setState({ showModal: false })}
                            >
                                {!this.state.currGig && <GigAdd onAddGig={this.onAddGig} />}
                                {this.state.currGig && <GigEdit EditGig={this.EditGig} gig={this.state.currGig} />}
                            </ModalApp>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        gigs: state.gigModule.gigs,
        orders: state.orderModule.orders
    }
}

const mapDispatchToProps = {
    onRemoveGig,
    onAddGig,
    onEditGig,
    loadOrders,
    loadGigs
}

export const SellerPage = connect(mapStateToProps, mapDispatchToProps)(_SellerPage)