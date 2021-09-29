import {useState} from 'react'
import './qoutation.css'
import { Contact } from '../../api-request/apiRequest'
import logo from '../../Project-Image/images/Baanthaii.png'
const ContactReq = ()=>{
    const [success , setSuccess] = useState(false)

    const [button, setButton] = useState(true)

    const [state, setState] = useState({
        name:null,
        mobile:null,
        email:null,
        description:null,
        button:true
    })

    const handlChange = e=>{
        const property = e.target.name
        state[property] = e.target.value
        console.log('state', state)
        setState({...state})
        if(state.name !==null && state.description !==null && state.mobile !==null && state.email !==null){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    const submit = (event)=>{
        Contact(state)
        setSuccess(!success)
        event.preventDefault();
        
    }

    return(
        <div className="container quotation">
            <br />
            <div className="text-center">
                <img src={logo}/>
                <h3>Contact Us</h3>
                <hr />
            </div>
            <br />
            {
                success === false &&(
                    <div className="row con">
                        <div className="col-lg-6 flex-flow">
                            <div className="contact-address text-center">
                                <div> 
                                    <h5>Address</h5>
                                    <p>Road no-05, Holding no-342, Gulshan, Dhaka</p>
                                </div>
                                <div className="mt-2"> 
                                    <h5>Email</h5>
                                    <p>MANAGER@BAANTHAII.COM</p>
                                </div>
                                <div className="mt-2"> 
                                    <h5>Contact Us</h5>
                                    <p>01648500219</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="form-q flex-flow col-lg-6">
                            <form onSubmit={(event)=>submit(event)}>
                                <p>Full Name</p>
                                <input className="form-control mb-3" name="name" value={state.name} onChange={e=>handlChange(e)} />
                                <p>Mobile No.</p>
                                <input className="form-control mb-3" name="mobile" value={state.mobile} onChange={e=>handlChange(e)} />
                                <p>Email Address</p>
                                <input className="form-control mb-3" name="email" value={state.email} onChange={e=>handlChange(e)} />

                                <br/>
                                <p>Message</p>
                                <textarea  name="description" onChange={e=>handlChange(e)}  value={state.description}  >
                                </textarea>

                                <br />
                                <br />
                                <button type="submit" className="btn" disabled={button}>Submit</button>
                            </form>
                        </div>
                    </div>
                )
            }
            {
                success &&(
                    <div className="flex-flow">
                        <div>
                            <h1 className="color-main">We got your contact Message succcesfully </h1>
                            <div className=" flex-flow ">
                                <div className="q-card border border-1">
                                    <h5>Contact Request</h5>
                                    <hr />
                                    <p>Name : {state.name}</p>
                                    <hr />
                                    <p>Email : {state.email}</p>
                                    <hr />
                                    <p>Mobile No : {state.mobile}</p>
                                    <hr />
                                    <p>Your Message : {state.description}</p>

                                </div>
                             </div>
                        </div>   
                     </div>
                )
            }
            
        </div>
    )
}

export default ContactReq