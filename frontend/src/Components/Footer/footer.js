import { Link } from 'react-router-dom'
import './footer.css'
import logo from '../..//Project-Image/images/Baanthaii.png'

const Footer = ()=>{
    return(
        <div className="mt-5">
            <footer className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="f-about-company">
                            
                                <Link className="mb-1" to="/" style={{fontSize:"1rem", color:"#da5757", fontWeight:"500"}}><img src={logo}/></Link>
                                <br />
                                <p>Copy rights @Baanthaii</p>

                                <div className="d-flex mt-3">
                                    <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook me-3" ></i></Link>
                                    <Link to="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter me-3" ></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mt-2 d-flex justify-content-center">
                            <div className="footer-link mb-4 ">
                                <p>Services</p>
                                <Link className="mb-1" to="/menu">Foods</Link>
                                <Link className="mb-1" to="/photography">Photography</Link>
                                <Link className="mb-1" to="/decoration">Decoration</Link>
                                <Link className="mb-1" to="/cancelation" style={{fontSize:"1rem", color:"#da5757", fontWeight:"500"}}>CANCELATION</Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-2 d-flex d-flex justify-content-center">
                            <div className="footer-link mb-4">
                                <p>Important Links</p>
                                <Link className="mb-1" to="/contact">Contact us</Link>
                                <Link className="mb-1" to="/about">About us</Link>
                                <Link className="mb-1" to="/privacy">Privacy & Policy</Link>
                                <Link className="mb-1" to="/terms">Terms and Condition</Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-2 d-flex justify-content-center">
                            <div className="footer-contact mb-4">
                                <p className="mb-2 contact-us">Contact us</p>
                                <div className="d-flex"> 
                                    <p>Gulshan, Dhaka Bangladesh</p>
                                </div>
                                <div className="d-flex mb-1">
                                    <p>+8801648500219</p>
                                </div>
                                <div className="d-flex">
                                    <p>Baanthaii.Catering.BD@gmail.com</p>
                                </div>

                                <div className="d-flex">
                                    <Link className="mb-1" to="/feedback" style={{color:"red", marginTop:"2px", fontSize:"18px"}}>Feedback</Link>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
        
    )
}

export default Footer
