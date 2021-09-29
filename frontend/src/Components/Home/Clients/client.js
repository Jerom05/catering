import './client.css'

import c1 from '../../../Project-Image/out-clients/c1.jpg'
import c2 from '../../../Project-Image/out-clients/c2.jpg'
import c3 from '../../../Project-Image/out-clients/c3.jpg'
import c4 from '../../../Project-Image/out-clients/c4.jpg'
import c5 from '../../../Project-Image/out-clients/c5.jpg'
import c6 from '../../../Project-Image/out-clients/c6.jpg'
import c7 from '../../../Project-Image/out-clients/c7.jpg'
import c8 from '../../../Project-Image/out-clients/c8.png'

const Client = ()=>{
    return(
        <div className="__our-clients container"> 
            <br />
            <br></br>
            <div className="client-content ">
                <h1>OUR CLIENTS</h1>
                <br></br>
                <p>The list is growing rapidly. Next is yours?</p>

                <div className="row g-3">
                    <div className="col-lg-3">
                        <div className="card  d-flex justify-content-center align-items-center">
                            <div className="client-img d-flex justify-content-center align-items-center">
                                <img src={c1} alt="ourclient"/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">
                        <div className="card  d-flex justify-content-center align-items-center">
                            <div className="client-img d-flex justify-content-center align-items-center">
                                <img src={c2} alt="ourclient"/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">
                        <div className="card  d-flex justify-content-center align-items-center">
                            <div className="client-img d-flex justify-content-center align-items-center">
                                <img src={c3} alt="ourclient"/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-3">
                        <div className="card  d-flex justify-content-center align-items-center">
                            <div className="client-img d-flex justify-content-center align-items-center">
                                <img src={c4} alt="ourclient"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card  d-flex justify-content-center align-items-center">
                            <div className="client-img d-flex justify-content-center align-items-center">
                                <img src={c5} alt="ourclient"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card  d-flex justify-content-center align-items-center">
                            <div className="client-img d-flex justify-content-center align-items-center">
                                <img src={c6} alt="ourclient"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card  d-flex justify-content-center align-items-center">
                            <div className="client-img d-flex justify-content-center align-items-center">
                                <img src={c7} alt="ourclient"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card  d-flex justify-content-center align-items-center">
                            <div className="client-img d-flex justify-content-center align-items-center">
                                <img src={c8} alt="ourclient"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>

        </div>
    )
}

export default Client