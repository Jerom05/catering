import {useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

import jwtDecode from 'jwt-decode'
import AddCartState from '../../ContextApi/addCart';
import { createOrder } from '../../api-request/apiRequest';
import './OrderPage.css'

import p1 from '../../Project-Image/payment/bkash.jpg'
import p2 from '../../Project-Image/payment/visa.png'
import p3 from '../../Project-Image/payment/rocket.jpg'
import p4 from '../../Project-Image/payment/v.png'
import p5 from '../../Project-Image/payment/m.png'
import p6 from '../../Project-Image/payment/nogod.png'


const OrderPage = ()=>{
    const [user , setUser] = useState(null)
    const [btnActive, setBtnActive] = useState(false)
    const [cashMethod, setCashMethod] = useState(false)
    const [bkashMethod, setBkashMethod] = useState(false)

    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [Ammount, setAmmount] = useState(null)
    const [pin, setPin] = useState('')
    const [payment, setPayment] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [completeOrder, setCompleteOrder] = useState(false)

    let history = useHistory();

    const value = useContext(AddCartState);
    const {cart, totalPrice, clearCart} = value

    const [orderObject, setOrderObject]= useState({
        username:'',
        user_id: '',
        totalPrice: null,
        cartItem: [],
        date:null,
        address:null,
        mobile: null,
        payment: null,
        transactionId: null,
    })
    const [state, setState] = useState({
        year:null,
        day:null,
        month:null,
    })

    useEffect(()=>{
        try{
            const token = localStorage.getItem('token')
            const user = jwtDecode(token)
            if(user){
                setUser(user)
              }
            const date = Date().toString()
            console.log(typeof date)
            setOrderObject({
                name:user.name,
                user_id: user._id,
                totalPrice: calculateTotal(),
                cartItem: cart,
                date: date,
                address:address,
                mobile:mobile,
                payment: payment,
                transactionId,
                year:state.year,
                day:state.day,
                month:state.month,
                cardNumber
                
            })
        }
        catch(ex){
            return 
        }
        console.log('oderObject', orderObject)
    },[cashMethod, bkashMethod, address,mobile, completeOrder,pin ,Ammount,transactionId,state,cardNumber])

    const calculateTotal = ()=>{
        return totalPrice()+((totalPrice()*5)/100)+50
    }

    const paymentMethod = (option)=>{
        setPayment(option)
    }

    const sendOrder = async (oderObject)=>{
        await createOrder(orderObject)
        clearCart()
        setCompleteOrder(true)
        console.log(orderObject)
    }

    const backHome = ()=>{
        history.push("/");
    }

    const handlChange = e=>{
        const property = e.target.name
        state[property] = e.target.value
        console.log('state', state)
        setState({...state})
    }
    
    return(
        <div className="container">
            <br />
            <h1 className="text-center">Order Confirmation</h1>
            <br />
            <div className="flex-flow ">
            {cart.length >=1&&(
                <div className="mb-3 topbar border border-2 p-3 shadow">
                     <div className="menu-bar-c d-flex">
                        <div className="menu-b">
                            Item Name
                        </div>
                        <div className="price-b flex-flow">
                            Price
                        </div>
                        <div className="quantity-b flex-flow">
                            Quantity
                        </div>
                        <div className="sub-price-b flex-flow">
                            Sub Total
                        </div>
                </div>

                {value.cart.map((item,index)=>(
                    <div className="item-body d-flex" key={index}>
                        <div className="menu ">
                            {item.title}
                        </div>
                        <div className="price flex-flow">
                            {item.price}
                        </div>
                        <div className="quantity flex-flow">
                                {item.quantity}
                        </div>
                        <div className="sub-price flex-flow"> 
                            {item.quantity*item.price}
                        </div>
                    </div>
                ))}

                <div className="totalPrice">
                    <p>Total {totalPrice()} Tk</p>
                    <p>Tax 5%: {totalPrice()*5/100} Tk</p>
                    <p>Delivery Charge: 50 Tk</p>
                    <hr />
                    <p>Total Price : <span>{calculateTotal()} Tk</span></p>
                </div>
            </div>
            )}
            </div>
            
            {/* Display when user not logged in */}
            <div>
                {
                    user===null &&(
                        <div className="login-text">
                            Please Login To order 
                        </div>
                    )
                }
            </div>


            {/* Display If user logged in */}
            {
                user &&(
                    <div>
                        <h5>Payment Method</h5>
                        <hr />
                        <h6 className="text-center">We are accepting cash on delivery and digital payment</h6>
                        <div>
                        <div className="flex-flow ">
                            <div className="p">
                                <img src={p1}/>
                            </div>
                            <div className="p">
                                <img src={p3}/>
                            </div>
                            <div className="p">
                                <img src={p6}/>
                            </div>
                            <div className="p">
                                <img src={p4}/>
                            </div>
                            <div className="p">
                                <img src={p5}/>
                            </div>
                        
                        </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        
                        <div className="text-cente">
                            <h6>Please select your payment method</h6>

                            <button style={{backgroundColor:"#090f02 !important"}} className=" btn-order btn me-2" onClick={()=>paymentMethod("cash")}>Cash</button>
                             <button className="btn btn-order me-2"onClick={()=>paymentMethod("bkash") }>Bkash</button>
                             <button className="btn btn-order me-2"onClick={()=>paymentMethod("rocket") }>Rocket</button>
                             <button className="btn btn-order me-2"onClick={()=>paymentMethod("nagad") }>Nagad</button>
                             <button className="btn btn-order me-2"onClick={()=>paymentMethod("master-card") } style={{fontSize:"10px"}}>Master Card</button>
                             <button className="btn btn-order me-2"onClick={()=>paymentMethod("visa-card") }>Visa</button>
                        </div>
                        <p></p>


                        {/* Cash Method */}
                        {
                            payment==="cash" &&(
                               
                                <div className="">
                                     <div className="">
                                    <br />
                                    <h5>Cash on delivery</h5>
                                    <input></input>
                                    <p>Enter your full name</p>
                                    <input value={mobile} onChange= {(e)=> setMobile(e.target.value)}></input>
                                    <p>Enter your phone number</p>
                                  
                                    <div>
                                        <textarea                                   
                                            value={address}
                                            onChange={e=>setAddress(e.target.value)}>
                                        </textarea>
                                    </div>
                                    <p>Enter Your Delivery Address</p>

                                    <div>
                                        <input style={{width:"50px"}} placeholder="DD" value={state.day} name="day" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"50px"}} placeholder="MM" value={state.month} name="month" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"60px"}} placeholder="YYYYY" name="year" value={state.year} onChange={e=>handlChange(e)} />
                                        <p>Enter delivery date</p>
                                    </div>
                                    <div className="btn btn-order mt-3" onClick={()=>sendOrder(orderObject)}>Confirm now</div>
                                </div>
                                </div>
                            )
                        }
                        
                        {/* Bkash Method */}
                        {
                            payment==="bkash" &&(
                                <div className=" ">
                                     <div className="ps-4">
                                    <br />
                                    <h5>Bkash</h5>
                                    <div className="b">
                                    <h6>Our Bkash Marchent Number </h6>
                                    <h6>0176395849</h6>
                                    </div>
                                    
                                    <input></input>
                                    <p>Enter your full name</p>
                                    <input value={mobile} onChange= {(e)=> setMobile(e.target.value)}></input>
                                    <p>Enter your phone number</p>
                                    <div>
                                        <textarea                                   
                                            value={address}
                                            onChange={e=>setAddress(e.target.value)}>
                                        </textarea>
                                    </div>
                                    <p>Enter Your Delivery Address</p>
                                    <div>
                                        <input style={{width:"50px"}} placeholder="DD" value={state.day} name="day" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"50px"}} placeholder="MM" value={state.month} name="month" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"60px"}} placeholder="YYYYY" name="year" value={state.year} onChange={e=>handlChange(e)} />
                                        <p>Enter delivery date</p>
                                    </div>
                                    <input></input>
                                    <p>Enter your Bkash number</p>

                                    <input value={transactionId} onChange={e=>setTransactionId(e.target.value)}/>
                                    <p>Enter your payment transaction id</p>
                                   
                                
                                    <div className="btn btn-orde mt-3" onClick={()=>sendOrder(orderObject)}>Confirm now</div>
                                </div>
                                </div>
                            )
                            }


                            {
                                payment==="rocket" &&(
                                    <div className=" ">
                                        <div className="ps-4">
                                        <br />
                                        <h5>Rocket</h5>
                                        <div className="r">
                                        <h6>Our rocket Marchent Number </h6>
                                        <h6>0176395849</h6>
                                        </div>
                                        
                                        <input></input>
                                        <p>Enter your full name</p>
                                        <input value={mobile} onChange= {(e)=> setMobile(e.target.value)}></input>
                                        <p>Enter your phone number</p>
                                    
                                        <div>
                                            <textarea                                   
                                                value={address}
                                                onChange={e=>setAddress(e.target.value)}>
                                            </textarea>
                                        </div>
                                        <p>Enter Your Delivery Address</p>
                                        <div>
                                        <input style={{width:"50px"}} placeholder="DD" value={state.day} name="day" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"50px"}} placeholder="MM" value={state.month} name="month" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"60px"}} placeholder="YYYYY" name="year" value={state.year} onChange={e=>handlChange(e)} />
                                        <p>Enter delivery date</p>
                                        </div>
                                        <input></input>
                                        <p>Enter your rocket number</p>
                                        
                                        <input value={transactionId} onChange={e=>setTransactionId(e.target.value)}/>
                                        <p>Enter your payment transaction id</p>
                                    
                                    
                                        <div className="btn btn-orde mt-3" onClick={()=>sendOrder(orderObject)}>Confirm now</div>
                                    </div>
                                    </div>
                                )
                            }
                            
                            {
                                //Nogod
                                payment==="nagad" &&(
                                    <div className=" ">
                                        <div className="ps-4">
                                        <br />
                                        <h5>Nagad</h5>
                                        <div className="n">
                                        <h6>Our Nagad Marchent Number </h6>
                                        <h6>0176395849</h6>
                                        </div>
                                        
                                        <input></input>
                                        <p>Enter your full name</p>
                                        <input value={mobile} onChange= {(e)=> setMobile(e.target.value)}></input>
                                        <p>Enter your phone number</p>
                                    
                                        <div>
                                            <textarea                                   
                                                value={address}
                                                onChange={e=>setAddress(e.target.value)}>
                                            </textarea>
                                        </div>
                                        <p>Enter Your Delivery Address</p>
                                        <div>
                                        <input style={{width:"50px"}} placeholder="DD" value={state.day} name="day" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"50px"}} placeholder="MM" value={state.month} name="month" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"60px"}} placeholder="YYYYY" name="year" value={state.year} onChange={e=>handlChange(e)} />
                                        <p>Enter delivery date</p>
                                    </div>
                                        <input></input>
                                        <p>Enter your Nagad number</p>
                                        
                                        <input value={transactionId} onChange={e=>setTransactionId(e.target.value)}/>
                                        <p>Enter your payment transaction id</p>
                                    
                                        <div className="btn btn-orde mt-3" onClick={()=>sendOrder(orderObject)}>Confirm now</div>
                                    </div>
                                    </div>
                                )
                            }

                        {
                            payment==="master-card" &&(
                                <div className=" ">
                                     <div className="ps-4">
                                    <br />
                                    <h5 className="">Master Card</h5>
                                  
                                    <div className="m  p-2 mb-2">
                                    <h6>Our Master Card Number to payment</h6>
                                    <h6>  4988 4388 4388 4305</h6>
                                    </div>
                                    
                                    <input></input>
                                    <p>Enter your full name</p>
                                    <input value={mobile} onChange= {(e)=> setMobile(e.target.value)}></input>
                                    <p>Enter your phone number</p>
                                  
                                    <div>
                                        <textarea                                   
                                            value={address}
                                            onChange={e=>setAddress(e.target.value)}>
                                        </textarea>
                                    </div>
                                    <p>Enter Your Delivery Address</p>
                                    <div>
                                        <input style={{width:"50px"}} placeholder="DD" value={state.day} name="day" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"50px"}} placeholder="MM" value={state.month} name="month" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"60px"}} placeholder="YYYYY" name="year" value={state.year} onChange={e=>handlChange(e)} />
                                        <p>Enter delivery date</p>
                                    </div>

                                    <input value={cardNumber} onChange= {(e)=> setCardNumber(e.target.value)}></input>
                                    <p>Enter your card number</p>
                                    <input></input>
                                    <p>Enter CVC</p>
                                    <input></input>
                                    <p>Enter Ammount</p>
                                
                                    <div className="btn btn-orde mt-3" onClick={()=>sendOrder(orderObject)}>Confirm now</div>
                                </div>
                                </div>
                            )
                        }

                        
                        {
                            payment==="visa-card" &&(
                                <div className=" ">
                                     <div className="ps-4">
                                    <br />
                                    <h5>Visa Card</h5>
                                    <div className="v  p-2 mb-2">
                                    <h6>Our Master Card Number to payment</h6>
                                    <h6> 4003 5500 0000 0003</h6>
                                    </div>
                                
                                    
                                    <input></input>
                                    <p>Enter your full name</p>
                                    <input value={mobile} onChange= {(e)=> setMobile(e.target.value)}></input>
                                    <p>Enter your phone number</p>
                                  
                                    <div>
                                        <textarea                                   
                                            value={address}
                                            onChange={e=>setAddress(e.target.value)}>
                                        </textarea>
                                    </div>
                                    <p>Enter Your Delivery Address</p>
                                    <div>
                                        <input style={{width:"50px"}} placeholder="DD" value={state.day} name="day" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"50px"}} placeholder="MM" value={state.month} name="month" onChange={e=>handlChange(e)} />/
                                        <input style={{width:"60px"}} placeholder="YYYYY" name="year" value={state.year} onChange={e=>handlChange(e)} />
                                        <p>Enter delivery date</p>
                                    </div>

                                    <input value={cardNumber} onChange= {(e)=> setCardNumber(e.target.value)}></input>
                                    <p>Enter your card number</p>
                                    <input></input>
                                    <p>Enter CVC</p>
                                    <input></input>
                                    <p>Enter Ammount</p>
                                
                                    <div className="btn btn-orde mt-3" onClick={()=>sendOrder(orderObject)}>Confirm now</div>
                                </div>
                                </div>
                            )
                        }

                        {/* Succesfull  */}
                        {
                            completeOrder &&(
                                <div className="order-msg">
                                     <br />
                                     <h6>Your Order Has been placed. We are validating your payment.</h6>
                                     <button className='btn' onClick={()=>backHome()}>Go Home</button>
                                </div>
                            )
                        }
                    </div>
                        
                    
                )
            }
            
        </div>
    )
}

export default OrderPage