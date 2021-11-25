
import { orderService } from "../services/order.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
// import { socketService } from "../services/socket.service.js";


export function loadOrders(filterBy = {}) {
    return (dispatch) => {
        orderService.query(filterBy)
            .then(orders => {
                dispatch({
                    type: 'SET_ORDERS',
                    orders
                })
            })
            .catch(err => {
                showErrorMsg('Cannot load orders')
            })
    }
}

export function onAddOrder(order) {
    return (dispatch) => {
        orderService.save(order)
            .then(savedOrder => {
                console.log('Added Order', savedOrder);
                dispatch({
                    type: 'ORDER_GIG',
                    order: savedOrder
                })
                showSuccessMsg(`Your order was sent, please wait for response from,${savedOrder.seller.fullname}`)
                // console.log('savedOrder',savedOrder);
                // const buyer = savedOrder.buyer.fullname
                // const sellerId = savedOrder.seller._id
                // console.log('sellerId',sellerId);
                // socketService.emit('order-for-you', { msg:`You Got A New Order From ${buyer}`, sellerId:sellerId})
                // socketService.emit('gig-orderd',` ${savedOrder.gig.category} Gig Was Just Orderd From ${savedOrder.seller.fullname}`)
                // socketService.emit('gig-orderd',savedOrder)
            })
            .catch(err => {
                showErrorMsg('Cannot add order')
            })
    }
}