import {useEffect, useState} from 'react'
import './qoutation.css'

import logo from '../../Project-Image/images/Baanthaii.png'
import { bookQuotation } from '../../api-request/apiRequest'

const Qoutation = ()=>{

    const [state, setState] = useState({
        name:null,
        mobile:null,
        email:null,
        event:null,
        year:null,
        day:null,
        month:null,
        description:null,
        guest:null,
        food:null,
        cutlery:null,
        waiter:null,
        button:true
    })
    const [success , setSuccess] = useState(false)

    const [button, setButton] = useState(true)

    const [render , setRender] = useState(true)


    const handlChange = e=>{
        const property = e.target.name
        state[property] = e.target.value
        console.log('state', state)
        setState({...state})
        if(state.name !==null && state.description !==null &&state.mobile !==null && state.email !==null && state.event !==null && state.year !==null & state.day !==null && state.month !==null && state.guest !==null){
            // if(state.food ===true || state.cutlery ===true || state.waiter===true){
                
            // }
            state.button = false
            setButton(false)
           
            
        }
        else{
            state.button = true
            setButton(true)
           
        }
    }





    const submit = (event)=>{
        event.preventDefault();
        
        bookQuotation(state)
        setSuccess(!success)
        
    }

    return(
        <div className="container quotation">
            <br />
            <div className="text-center">
                <img src={logo}/>
                <h3>REQUEST FOR QUOTATION</h3>
                <p  mk  bvf>Please fill out the form below and hit 'Submit'</p>
                <p>We will get back to you ASAP</p>
                <hr />
            </div>
            <br />
            {
                success === false &&(
                    <div>
                        <div className="form-q flex-flow">
                <form onSubmit={(event)=>submit(event)} >
                    <p>Full Name</p>
                    <input className="form-control mb-3" name="name" value={state.name} onChange={e=>handlChange(e)} />
                    <p>Mobile No.</p>
                    <input className="form-control mb-3" name="mobile" value={state.mobile}onChange={e=>handlChange(e)} />
                    <p>Email Address</p>
                    <input className="form-control mb-3" name="email" value={state.email} onChange={e=>handlChange(e)} />
                    <p>Event Type</p>
                    <div>
                        <input
                          type="radio"
                          name="event"
                          value="Private"
                          checked={state.event === "Private"}
                          
                          onChange={e=>handlChange(e)}
                       
                        />
                        <span className="ms-2">Private</span>
                    </div>
                    <div>
                        <input
                          type="radio"
                          name="event"
                          value="Corporate"
                          checked={state.event === "Corporate"}
                          
                          onChange={e=>handlChange(e)}
                          
                        />
                        <span className="ms-2">Corporate</span>
                    </div>
                    <p className="mt-3">Event Date</p>
                    <div>
                        <input style={{width:"60px"}} placeholder="YYYYY" name="year" value={state.year} onChange={e=>handlChange(e)} />/
                        <input style={{width:"50px"}} placeholder="MM" value={state.month} name="month" onChange={e=>handlChange(e)} />/
                        <input style={{width:"50px"}} placeholder="DD" value={state.day} name="day" onChange={e=>handlChange(e)} />
                    </div>
                    <br/>

                    {/* CheckBox */}
                    {/* <p>Select your requirements</p>
                    <div className="mb-2">
                        <input type="checkbox" onClick={()=>clickFood()} ></input>
                        <label className="ms-2">Only food</label>
                        <p></p>
                        <input type="checkbox" onClick={()=>clickCultery()} ></input>
                        <label className="ms-2">Cutlery & Crockery</label>
                        <p></p>
                        <input type="checkbox" onClick={()=>clickWaiter()} ></input>
                        <label className="ms-2">Waiter</label>
                    </div> */}

                    <p>Write down your menu and other requirements</p>
                    <p className="gray">Be specific about quantity of your menu items and others (cutlery, crockery, buffet dish, and waiter, etc)</p>
                    <textarea value={state.description} onChange={e=>handlChange(e)} name="description" >
                    </textarea>
                    <br />
                    <p className="mt-3">Total Number of Guest</p>
                    <input value={state.guest} name="guest" onChange={e=>handlChange(e)} />
                    <br />
                    <br />
                   
                    <button type="submit" className="btn" disabled={button} >Submit</button>
                </form>
                
            </div>
                    </div>
                )
            }
            {
                success &&(
                    <div className="flex-flow">
                        <div>
                        <h1 className="color-main">Your Quotation Request was successfully submitted </h1>
                        <div className=" flex-flow ">
                            <div className="q-card border border-1">
                            <h5>Quotation Request</h5>
                            <hr />
                            <p>Name : {state.name}</p>
                            <hr />
                            <p>Email : {state.email}</p>
                            <hr />
                            <p>Mobile No : {state.mobile}</p>
                            <hr />
                            <p>Event Type : {state.event}</p>
                            <hr />
                            <p>Event Date: {state.day}-{state.month}-{state.year}</p>
                            <hr />
                            <p>requirements Details : {state.description}</p>
                            <hr />
                            <p>Selected requirements : {state.food ? "Food" :null} {state.cutlery ? "Cultery" :null} {state.waiter? "Waiter" :null}</p>
                            <hr />
                            <p>Number of Guests : {state.guest}</p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                )
            }
            
        </div>
    )
}

export default Qoutation


