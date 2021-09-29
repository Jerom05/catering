import React, { useState ,useEffect, useContext} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { Link } from 'react-router-dom'
import './order.css'

const CompletedOrder = ()=>{
    const [order, setOrder] = useState([])
    const [render, setRender] = useState(true)
    let history = useHistory();

    useEffect(()=>{
        const getData = async() =>{
            try{
                const order = await axios.get('https://baanthai.herokuapp.com/api/admin/get/completeorder')  
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
            <div className="orderCard complete-card border border-1 mb-3">
                <div className="">
                    <div className="d-flex">
                        <h6>Order Id: {item._id} </h6>
                        <i class="fas fa-trash ms-auto" onClick={()=>Remove(item._id)}></i>
                    </div>
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
            </div>
        )
    }

    const Remove = async(id) =>{
        console.log(id)
        await axios.post(`https://baanthai.herokuapp.com/api/admin/post/complete-delete/${id}`)
    }

    return(
        <div className="container">
            <br />
            <div className="btn " onClick={()=>backHome()}>Back Home</div>
            <h2 className="text-center">Completed Order</h2>
            <hr/>
            <br />
            {
                order.length ===0 ? <h3>We have empty completed orders</h3> : <h5>Total {order.length} completed order</h5>
            }
            <br/>
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

export default CompletedOrder
