const CancelOrder = ({CancelOrder})=>{

    return(
        <div className="">
            {
                CancelOrder.map((order,i)=>{
                    return(
                        <div key={i} className="order-body mb-3">
                            <p>order no: {i+1}</p>
                            <p>Name: {order.name}</p>
                            <p>Order Date: {order.date.slice(0,25)}</p>
                            <p>Total Price: {order.totalPrice} Tk</p>
                            <p>Payment type: {order.payment}</p>
                            <p>Event Date: {order.day}-{order.month}-{order.year}</p>
                            {
                                order.transactionId.length > 0 && (
                                <p>Transaction id: {order.transactionId}</p>
                                )
                            }
                        
                            <div className="mp-1">
                                {
                                    order.cartItem.map((item,i)=>{
                                        return(
                                            <div key={i} className="row align-items-center">
                                                <hr />
                                                <div className="col-lg-6">{item.title}</div>
                                                <div className="col-lg-6"> Qnt: {item.quantity}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>   
                            <hr />
                            <div className="cancel-msg p-2">
                                <p>Order cancel message</p>
                               
                                ***{
                                    order.messege
                                }
                            </div>
                        </div>
                    )
                })
            }            
        </div>
    )
}

export default CancelOrder