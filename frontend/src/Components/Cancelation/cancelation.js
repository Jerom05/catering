import React from 'react'
import './cancelation.css'
const Cancelation = ()=>{
    return(
        <div id="cancelation" className="text-center flex-flow cancelation">
            
            <div class="col-12 col-lg-8 ">
                <br />
                <br />
                <div class="row">
                    <h1>CANCELLATIONS &amp; REFUNDS</h1>
                    <br />
                    <ul>
                    <br />
                        <li>
                            Cancellations for small orders (less than 100 pax) must reach us in writing (email, message) at least 24 hrs prior to the scheduled delivery time. Failure to do so will forfeit the advance amount or 50% of the total bill needs
                            to be paid (in case of company payment).
                        </li> <br /> 

                        <li>Cancellations for large orders (more than 100) must reach us in writing (email, message) at least 72 hrs before the event time. Failure to do so will forfeit the advance amount or 50% of the total bill needs to be paid (in
                            case of company payment).
                        </li><br /> 

                        <li>
                            The refund is only available to cancellations compliant with the policies.
                        </li> <br /> 
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Cancelation