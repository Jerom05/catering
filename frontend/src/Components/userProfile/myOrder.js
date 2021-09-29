import axios from "axios"
import { useEffect, useState } from "react"
const MyOrder = ({MyOrder})=>{
    const [status ,setStatus] = useState(null)
    useEffect(()=>{

    },[status])

    const cancel = async(id) =>{
        console.log(id)
       const res= await axios.post(`https://baanthai.herokuapp.com/api/admin/post/cancel/${id}`)
    setStatus(res.status)
    }

    return(
        <div className="">
            {
                MyOrder.map((order,i)=>{
                    return(
                        <div key={i} className="order-body mb-3">
                            <p>order no: {i+1}</p>
                            <p>Name: {order.name}</p>
                            <p>Order Date: {order.date.slice(0,25)}</p>
                            <p>Total Price: {order.totalPrice} tk</p>
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
                            <div>
                                <button onClick={()=>cancel(order._id)} className="btn" style={{width:"150px",backgroundColor:"red !important"}}>Cancel Order</button>
                            </div>
                        </div>
                    )
                })
            }            
        </div>
    )
}

export default MyOrder