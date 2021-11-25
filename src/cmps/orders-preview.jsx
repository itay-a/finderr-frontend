export function OrderPreview(props) {

    const { order } = props

    return (
        <div className="order-preview">
            <div className="order-buyer">
                {order.buyer.fullname}
            </div>
            <div className="order-title">
                {order.gig.title}
            </div>
            <div className="order-created">
                {order.createdAt}
            </div>
            <div className="order-price">
                {order.totalPrice}
            </div>
            <div className="order-delivery">
                {order.deliveryTime}
            </div>
            <div className="order-status">
                {order.status} 
            </div>
            {/* <div className="order-button">
                {order.buyer.buyerRate} 
            </div> */}
        </div>
    )
}