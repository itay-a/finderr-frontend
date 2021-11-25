// import React from 'react'
// import { connect } from 'react-redux'
// import { loadGigs,addToCart } from '../store/gig.actions.js'
// import { showSuccessMsg } from '../services/event-bus.service.js'
// import { GigList } from '../cmps/gig-list.jsx'
// import { GigAdd} from '../cmps/gig-add.jsx'
// import { loadOrders} from '../store/order.actions.jsx'

// class _ExploreApp extends React.Component {

//     state = {}

//     componentDidMount() {
//         this.props.loadGigs()
//     }

//     addToCart = (gig) => {
//         console.log(`Adding ${gig.title} to Cart`)
//         this.props.addToCart(gig)
//         showSuccessMsg('Added to Cart')
//     }

//     render() {
//         const { gigs } = this.props
//         return (
//             <div>
//                 <h3>Gigs App</h3>
//                 <main>
//                 <GigAdd onAddGig={this.onAddGig}/>
//                     <div >
//                         <GigList
//                             gigs={gigs}
//                         />
//                     </div>
//                 </main>
//             </div>
//         )
//     }
// }


// function mapStateToProps(state) {
//     return {
//         gigs: state.gigModule.gigs
//     }
// }
// const mapDispatchToProps = {
//     loadGigs,
//     addToCart,
// }

// export const ExploreApp = connect(mapStateToProps, mapDispatchToProps)(_ExploreApp)
