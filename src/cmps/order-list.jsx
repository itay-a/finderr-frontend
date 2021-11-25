import { OrderPreview } from '../cmps/orders-preview.jsx'

export function OrderList(props) {

    const { orders } = props
    return (
        <div className="order-table">
            <h2>My Orders</h2>
            <div className="table-header">
                <div className="header-buyer">
                    Buyer
                </div>
                <div className="header-title">
                    Gig Title
                </div>
                <div className="header-created">
                    Created At
                </div>
                <div className="header-price">
                    Total Price
                </div>
                <div className="header-delivery">
                    Delivery Time
                </div>
                <div className="header-status">
                    Order Status
                </div>
                {/* <div className="header-button">
                    "Buttons"
                </div> */}
            </div>
            <div className="data-column">
                {orders.map(order => <OrderPreview key={order._id} order={order} />)}
            </div>
        </div>
    )
}