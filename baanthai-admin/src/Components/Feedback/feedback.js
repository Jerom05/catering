
import {useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

import jwtDecode from 'jwt-decode'

import { Contact, Feedback, FeedbackG ,FeedbackP} from '../../api-request/apiRequest'
import './feedback.css'

const Feedbacks = ()=>{
    const [user , setUser] = useState(null)

    const [success , setSuccess] = useState(false)

    const [button, setButton] = useState(true)
    const [feedback,setFeedback] = useState([])

    const [rating,setRating] = useState(null)

    const [state, setState] = useState({
        feedback:null,
    })


    useEffect(()=>{
        const getFeedback = async()=>{
            try{
                const r =await FeedbackG()
                setFeedback(r.data.reverse().filter(f=> f.approve !== true))
                console.log("f",r)
                console.log('ff',feedback)
            }
            catch{
                return
            }
            
        }
        getFeedback()
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
       
        console.log('ff',feedback)
        // console.log('oderObject', orderObject)
    },[state,feedback, success])


    const handlChange = e=>{
        const property = e.target.name
        state[property] = e.target.value
        console.log('state', state)
        setState({...state})
    }

    const submit = (event)=>{
        Feedback({
            comment:state.feedback,
            name: user.name,
            date: Date().toString()
        })
        setState({
            feedback:''
        })
        setSuccess(!success)
        event.preventDefault();
        
    } 

    const feedbackCard = (data)=>{
        return(
            <div className="border feedbackCard border-1 w-50 p-3 my-2" style={{boxShadow: "0 0 8px #d4d7d5"}}>
                <h5>{data.name}</h5>
                <p style={{fontSize:"13px"}}>Posted {data.date?.slice(3, 15)}</p>
                <div className="feedback d-flex ">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star none"></i>
                </div>
                <hr />
                <p className="mt-1">{data.comment}</p>
                <hr />
                <div className="mt-4">
                    <Link className="btn me-3" onClick={()=>FeedbackP(data._id)}>Approve</Link>
                    {/* <Link className="btn" onClick={""}>Cancel</Link> */}
                </div>
            </div>
        )
    }


    return(
        <div className="container  feedback">
            <br />
            <br />
            <h2>Feedback Approval</h2>
            <br />
            <div className="feedback-body  mt-3">
                {
                    feedback.map(data=>(
                        <div>
                            {
                                 feedbackCard(data)
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Feedbacks