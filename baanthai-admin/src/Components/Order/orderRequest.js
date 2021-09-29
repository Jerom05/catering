import React, { useState ,useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './order.css'
import { useHistory } from "react-router-dom";
    
const OrderRequest = ()=>{
    const [order, setOrder] = useState([])
    const [render, setRender] = useState(true)
    let history = useHistory();
    
    useEffect(()=>{
        const getData = async() =>{
            try{
                const order = await axios.get('https://baanthai.herokuapp.com/api/admin/get/orders')  
                setOrder(order.data)
            }catch(ex){
                console.log(ex)
                return 
            }
        } 
        console.log('order',order)
        getData()
        Render()
    },[render])

    const Render = ()=>{
        setTimeout(()=>{
        setRender(!render)
      },3000)
    }

    const backHome = ()=>{
        history.push('/')
    }

    const orderCard = (item)=>{
        return(
            <div className="orderCard border border-1 mb-3">
                <div className="">
                    <h6>Order Id: {item._id}</h6>
                    <p style={{color:"blue"}}>Order Date: {item.date.slice(0, 25)}</p>
                    <hr />
                </div>
                <div className ="items">
                    <p>Items</p>
                    {
                         item.cartItem.map((i)=>(
                             <p>{i.title}</p>
                         ))
                    }
                </div>
                <hr/>
                <div>
                    <p>Name: {item.name}</p>
                    <p>Address: {item.address}</p>
                    <p>Mobile: {item.mobile}</p>
                    <p>Total Price: {item.totalPrice} tk</p>
                    <p>Event Date: {item.day}-{item.month}-{item.year}</p>
                    {
                        item.transactionId.length > 0 && (
                            <p>Transaction id: {item.transactionId}</p>
                        )
                    }
                    {
                        item.cardNumber?.length > 0 && (
                            <p>Card Number: {item.cardNumber}</p>
                        )
                    }
                    <p>Payment Type: {item.payment}</p>
                    
                </div>
                <hr />
                <div>
                    <Link className="btn me-3" onClick={()=>complete(item._id)}>Complete Order</Link>
                    <Link className="btn" onClick={()=>cancel(item._id)}>Cancel</Link>
                </div>
            </div>
        )
    }

    const complete = async(id) =>{
        console.log(id)
        await axios.post(`https://baanthai.herokuapp.com/api/admin/post/complete/${id}`)
    }

    const cancel = async(id) =>{
        console.log(id)
        await axios.post(`https://baanthai.herokuapp.com/api/admin/post/cancel/${id}`)
        
    }
    
    return(
        
        <div className="container">
            <br />
            <div className="btn " onClick={()=>backHome()}>Back Home</div>
            <h2 className="text-center">Food Order Requets</h2>
            <hr></hr>
            <br />
            {
                order.length ===0 ? <h3>We Have no orders now</h3> : <h5>Total {order.length} orders</h5>
            }

            {
                order.length>=0 &&(
                    <div>
                        {order.map(item=>(
                            <div>
                                {orderCard(item)}
                            </div>
                        ))}
                    </div>
                )
            }
       
        </div>
        
    )
}
export default OrderRequest


// const comOrder = await axios.get('https://baanthai.herokuapp.com/api/admin/get/completeorder')  
// const canOrder = await axios.get('https://baanthai.herokuapp.com/api/admin/get/cancelorder')  