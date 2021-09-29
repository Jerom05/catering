import { Link } from 'react-router-dom'

import './footer.css'

const Footer = ()=>{
    return(
        <div className="mt-5">
            <footer className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="f-about-company">
                                <h1><span>Baan</span>Thai</h1>
                                <p>Copy rights @Baanthai</p>
                                <div className="d-flex mt-3">
                                    <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook me-3" ></i></Link>
                                    <Link to="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter me-3" ></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mt-2 d-flex justify-content-center">
                            <div className="footer-link mb-4 ">
                                <p>Services</p>
                                <Link className="mb-1" to="#">Buffet</Link>
                                <Link className="mb-1" to="#">Weeding Photography</Link>
                                <Link className="mb-1" to="#">Birthday Party</Link>
                                <Link className="mb-1" to="#">Decoration</Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-2 d-flex d-flex justify-content-center">
                            <div className="footer-link mb-4">
                                <p>Important Links</p>
                                <Link className="mb-1" to="#">Shop</Link>
                                <Link className="mb-1" to="#">Contact us</Link>
                                <Link className="mb-1" to="#">About us</Link>
                                <Link className="mb-1" to="#">Order Policy</Link>
                                <Link className="mb-1" to="#">My Account</Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-2 d-flex justify-content-center">
                            <div className="footer-contact mb-4">
                                <p className="mb-2 contact-us">Contact us</p>
                                <div className="d-flex"> 
                                    <p>Savar, Dhaka Bangladesh</p>
                                </div>
                                <div className="d-flex mb-1">
                                    <p>+880008888999</p>
                                </div>
                                <div className="d-flex">
                                    <p>Baanthai@gmail.com</p>
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
