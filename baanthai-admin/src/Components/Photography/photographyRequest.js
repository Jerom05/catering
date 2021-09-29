import React, { useState ,useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './decoration.css'
import { useHistory } from "react-router-dom";
    
const PhotographyRequest = ()=>{
    const [decoration, setDecoration] = useState([])
    const [render, setRender] = useState(true)
    let history = useHistory();
    
    useEffect(()=>{
        const getData = async() =>{
            try{
                const decoration = await axios.get('https://baanthai.herokuapp.com/api/admin/get/photographybook')  
                setDecoration(decoration.data)
            }catch(ex){
                console.log(ex)
                return 
            }
        } 
        console.log('decoration',decoration)
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
            <div className="orderCard dec-req border border-1 mb-3">
                <div className="">
                    <h6>Requets Id: {item._id}</h6>
                    <hr />
                </div>
               
                <hr/>
                <div>
                    <p>Decoration Type : {item.decorationType}</p>
                    <p>Booking by: {item.username}</p>
                    <p>Decoration Price: {item.price}</p>
                    <p>Event Date: {item.eventDate.day}-{item.eventDate.month}-{item.eventDate.year}</p>
                    <p>Customer Address: {item.address}</p>
                    <p>Mobile number: {item.mobile}</p>
                    <p>Email Address: {item.email}</p>
                </div>
                <hr />
                {/* <div>
                    <Link className="btn me-3 mb-2" onClick={()=>complete(item._id)}>Complete Order</Link>
                    <Link className="btn me-3 mb-2" onClick={()=>cancel(item._id)}>Cancel</Link>
                </div> */}
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
            <h2 className="text-center">Photography Booking Requets</h2>
            <hr></hr>
            <br />
            {
                decoration.length ===0 ? <h3>We Have no request now</h3> : <h5>Total {decoration.length} request</h5>
            }

            {
                decoration.length>=0 &&(
                    <div>
                        {decoration.map(item=>(
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
export default PhotographyRequest


// const comOrder = await axios.get('https://baanthai.herokuapp.com/api/admin/get/completeorder')  
// const canOrder = await axios.get('https://baanthai.herokuapp.com/api/admin/get/cancelorder')  