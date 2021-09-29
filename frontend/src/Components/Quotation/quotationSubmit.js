import {useState} from 'react'
import './qoutation.css'

import logo from '../../Project-Image/images/Baanthaii.png'
const Qoutation = ()=>{

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
            
        </div>
    )
}

export default Qoutation