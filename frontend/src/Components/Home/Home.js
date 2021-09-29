import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import {Link} from 'react-router-dom'
import Feature from './Feature/Feature'
import Bishal from '../../Project-Image/client/bishal.jpeg'
import Mamun from '../../Project-Image/client/mamun.jpeg'
import Wali from '../../Project-Image/client/wali.jpeg'
import Client from './Clients/client'
import './Home.css'

const Home = () =>{
    const [user, setUser] = useState(null)
    useEffect(()=>{
      try{
        const token = localStorage.getItem('token')
        const user = jwtDecode(token)
        
        if(user){
            setUser(user)
          }
    }
      catch(ex){
          console.log(ex)
      }
    },[])

    return(
        <section className="pb-5 home">
            <div className="home-content home-section">
                <br/>
                <div className="bg-opacity-h d-flex flex-column align-items-center">
                    <h1 style={{color:"#88ce36"}}>BAANTHAII</h1>
                    <h3 style={{color:"#cbdbca"}}>Full Service Catering and Event Management House for All Your Catering and Event Needs</h3>
                    <Link to="/quotation" className="btn btn-primary mt-4 flex-flow" role="button">Request For Quotetion</Link>
                </div>
            </div>

            <div className="home-service ">
                    <h1 className="text-center mb-4">OUR SERVICES</h1>
                    <div className="row text-center ">
                        
                        <div className="col-lg-4 p-2 ms-auto ">
                            <div className="home-card border border-1 px-3 py-5 s1">
                                <h1 className="mb-2">Private</h1>
                                <div className="card-img">
                                    {/* <img /> */}
                                </div>
                                <p className="mt-3">Life is full of occasions and celebrations. Scrumptious food makes these events long-lasting. YES, we proudly deliver super delicious food and fabulous service.</p>
                                <Link to="/service" className="btn " role="button">Know More</Link>
                            </div>
                        </div>

                        <div className="col-lg-4 p-2 me-auto ">
                            <div className="home-card border border-1 px-3 py-5 s2">
                                <h1 className="mb-2">Corporate</h1>
                                <div className="card-img">
                                    {/* <img /> */}
                                </div>
                                <p className="mt-3">From made-to-order foods to flawless service, we are the expert in making your next corporate event – small or large – a delicious success.</p>
                                <Link to="/service" className="btn " role="button">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                
                <div className="banner-section">
                  <div className="banner-content text-center" style={{color:"#000204"}}>
                      <br></br>
                      <br></br>
                      <h1 className="mt-4 mb-3">What Makes us so Special?</h1>
                      <h3 className="mb-3">Unlike others, <span className="color-main">Baan</span>thaii is devoted to delivering super delicious food and fabulous service to spice up your event.</h3>
                      <h3>Whatever you’re planning – a gorgeous wedding, a high-end corporate event, new year party, or anything – we will create an amazing food experience suited to your taste.</h3>
                      {/* <Link to='/menu' className="btn mt-5"> Sec</Link> */}

                  </div>
                  <Link to="/menu" className="btn btn-primary mx-auto mt-5 flex-flow" role="button">See Our Menus</Link>

                </div>
                <br/>

                <Feature />

                <section className="container-fluid">
                    <div className="container client-section">
                      <h1>Happy <span className="color-main">Client says</span></h1>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="client-card">
                            <div className="client-image">
                              <img src={Bishal} alt="profile" />
                            </div>
                            <div className="client-content">
                              <p className="description">Their food and service was really appreciated. They give best service within limited budget and taste quality is so high and enjoyable. Best of luck....</p>
                              <div className="client-ratings d-flex align-items-center justify-content-center">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star none"></i>
                              </div>
                              <p className="client-name">Enam Ahmed</p>
                              <p className="designation">Banker</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="client-card">
                            <div className="client-image">
                              <img src={Mamun} alt="profile" />
                            </div>
                            <div className="client-content">
                              <p className="description">The food was very appetizing. Both the food and the service was appreciated by everyone present at the program.
Thank you for the great food and service.</p>
                              <div className="client-ratings d-flex align-items-center justify-content-center">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star none"></i>
                              </div>
                              <p className="client-name">Alim Hossain</p>
                              <p className="designation">Banker</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="client-card">
                            <div className="client-image">
                              <img src={Wali} alt="profile" />
                            </div>
                            <div className="client-content">
                              <p className="description">Excellent quality of food and services, maintaining all of the requested standards. Strongly recommended, if anyone wants best quality and services.</p>
                              <div className="client-ratings d-flex align-items-center justify-content-center">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star none"></i>
                              </div>
                              <p className="client-name">Mahbub Bhuiyan</p>
                              <p className="designation">Designer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>   
                <br />
                <br></br>
                <Client />  
        </section>
    )
}

export default Home 

