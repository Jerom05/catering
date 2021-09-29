
import {useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

import jwtDecode from 'jwt-decode'

import { Contact, Feedback, FeedbackG } from '../../api-request/apiRequest'
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
                setFeedback(r.data.reverse().filter(t=>t.approve===true))
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
            <div className="border border-1 feedbackCard p-3 my-2" style={{boxShadow: "0 0 8px #d4d7d5"}}>
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
            </div>
        )
    }

    return(
        <div className="container feedback">
            <br />
            <br />
            <h2>Feedback</h2>
            <br />
            {
                user &&(
                    <div className=" border border-1 p-3">
                    <form onSubmit={(event)=>submit(event)}>
                    <h4>Give Feedback</h4>
                        <hr />
                        <br/>
                        {/* <div className="feedback d-flex ">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                         */}
                        <br/>
                        <textarea  name="feedback" onChange={e=>handlChange(e)}  value={state.feedback} 
                            style={{width:"50%",
                                height: "70px",
                               
                                outlineStyle: "none"}}
                        >
                        </textarea>
                        <br />
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
                )
            }

            <div className="feedback-body mt-5">
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