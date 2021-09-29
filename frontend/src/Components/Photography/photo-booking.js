import {data} from './data'
import { useState ,useEffect} from 'react';
import jwtDecode from 'jwt-decode'
import { bookPhotography } from '../../api-request/apiRequest';

import {
    useParams,useHistory
  } from "react-router-dom";

const PhotoBook = ()=>{

    const [user , setUser] = useState(null)
    const [year , setYear] = useState('')
    const [day , setDay] = useState('')
    const [month , setMonth] = useState('')
    const [address , setAddress] = useState('')
    const [mobile , setMobile] = useState('')
    const [email , setEmail] = useState('')

    const [completeOrder, setCompleteOrder] = useState(false)

    let { id } = useParams();
    let history = useHistory();

    let decoration = data.filter(d=> d.id.toString()===id)
    console.log("decoration", decoration)
    console.log("decoration list", data)


    useEffect(()=>{
        try{
            const token = localStorage.getItem('token')
            const user = jwtDecode(token)
            if(user){
                setUser(user)
              }
        }
        catch(ex){
            return 
        }
    },[])

    const confirmBooking = ()=>{
        let bookingObj = {
            username: user.name,
            userid:user._id,
            decorationType: decoration[0].title,
            price:decoration[0].price,
            eventDate: {
                day,
                month,
                year
            },
            mobile:mobile,
            email,
            address,
            bookingDate: Date.now()
        }
        console.log(bookingObj)


        bookPhotography(bookingObj)
        setCompleteOrder(true)
    }

    const backHome = ()=>{
        history.push("/");
    }

    return(        
        
        <div className="container">
            {
                console.log("tt")
            }
            <br />
            <h4 className="text-center">Confirm your {decoration[0].title} Booking</h4>
            <hr />
            <div className="p-5 border border-1">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <h2>{decoration[0].title}</h2>
                            <p>Price {decoration[0].price}</p>
                            {
                                user === null ? null :(
                                <p >Booking by {user.name}</p>
                                )
                            }
                             {
                user !==null && completeOrder ===false ?
                    <div className="">
                        <hr />
                        <div className="">
                             <h6 className="mt-3">Enter Your Event Date</h6>
                            <input style={{width:"50px"}} placeholder="MM" value={month} onChange={e=>setMonth(e.target.value)}/>-
                            <input style={{width:"50px"}} placeholder="DD" value={day} onChange={e=>setDay(e.target.value)}/>-
                            <input style={{width:"60px"}} placeholder="YYYYY" value={year} onChange={e=>setYear(e.target.value)}/>
                            <div></div>
                            
                        </div>
                        <div className="mt-4">
                            <h6>Enter Your Address For Booking</h6>
                            <input className="" value={address} onChange={e=>setAddress(e.target.value)}></input>
                        </div>
                        <div className="mt-1">
                            <h6>Email Address</h6>
                            <input className="" value={email} onChange={e=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="mt-1">
                            <h6>Mobile Number</h6>
                            <input className="" value={mobile} onChange={e=>setMobile(e.target.value)}></input>
                        </div>

                        <button className="btn text-center" onClick={()=>confirmBooking()}>Confirm</button>
                        
                    </div>
                : null
            }    
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="item-img">
                            <img src={decoration[0].image}/>
                        </div>
                    </div>
                </div>
                
            </div>
            <br />
            {
                user ===null &&(
                    <h3 style={{color:"red"}}>Please Login for Booking.</h3>
                )
            }

            {/* Succesfull  */}
            {
                            completeOrder &&(
                                <div className="order-msg" >
                                     <br />
                                     <h6>Your Booking Has been placed Succesfully</h6>
                                     <button className='btn' onClick={()=>backHome()}>Go Home</button>
                                </div>
                            )
                        }
           
        </div>
    )
}


export default PhotoBook