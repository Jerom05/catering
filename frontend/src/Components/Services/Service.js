import React from 'react'
import { Link } from 'react-router-dom'
import './Service.css'
import s1 from '../../Project-Image/services/s1.jpg'
import b from '../../Project-Image/services/b.webp'
import s3 from '../../Project-Image/services/s3.webp'
import s4 from '../../Project-Image/services/s4.webp'
import s5 from '../../Project-Image/services/s5.webp'
import s6 from '../../Project-Image/services/s6.webp'

const Service = () =>{
    return(
        <div className="__serivice-page container">
            <br />
            <br />
            <div className="text-center">
                <h1>SERVICE & PACKAGES</h1>
                <br />
                <p>You’ve worked very hard planning for your “Big Day”. You almost want everything to go flawless. There will be so much happening that day. The last thing you should worry about if everything is being documented properly. That’s why we recommend you full day coverage package – one less thing for you to worry about. We will be with you from the very beginning of your day till the end. That means, you just enjoy to the fullest and look fabulous</p>
                <br />
            </div>
            
            <div className= "__service-content">
                <div className="d-flex cr">
                    <div className="description text-center">  
                        <br></br>
                        <h1>Weddings & Anniversaries</h1>
                        <br></br>
                        <p>Wedding photography isn’t about snapshots, it’s about the emotion that overtakes you when he locks eyes with you as you walk towards him down the aisle…the proud little tear that your father wipes away after he hands you over… it’s that shy giggle you’ll give during your first dance when, for a moment, you forget anyone else is in the room. Your wedding lasts merely one day; your wedding photos and movie will last a lifetime.</p>
                        <br />
                        <div className="d-flex justify-content-evenly">
                        <Link to="/menu" className="btn mb-2 " role="button">Our menus</Link>
                        <Link to="/decoration" className="btn mb-2 " role="button">Decoration</Link>
                        <Link to="/photography" className="btn mb-2 " role="button">Photography</Link>
                        </div>
                    </div>
    
                    <div className="photo">
                            <img src={s1} alt="sopho"/>
                    </div>   
                </div>
                
                <div className="d-flex">
                    <div className="photo">
                            <img src={b} alt="sopho"/>
                    </div> 
                    <div className="description text-center">  
                        <br></br>
                        <h1>Birthdays & Celebrations</h1>
                        <br></br>
                        <p>These special occasions deserve to be well-complemented with delicious food.
                            <br />
                            As a leading contemporary caterer, we ensure great food to make your life’s occasions more vibrant.</p>
                        <br />
                        <div className="d-flex justify-content-evenly">
                        <Link to="/menu" className="btn mb-2 " role="button">Our menus</Link>
                        <Link to="/decoration" className="btn mb-2 " role="button">Decoration</Link>
                        <Link to="/photography" className="btn mb-2 " role="button">Photography</Link>
                        </div>
                    </div>  
                </div>

                <div className="d-flex cr">
                    <div className="description text-center">  
                        <br></br>
                        <h1>Private & Family Catering</h1>
                        <br></br>
                        <p>We believe that service is equal in importance to the quality and style of the food we serve. Each member of the Catering By The Family team is fully committed to the flawless execution of every aspect of your event. Our staff is well-trained, highly experienced, and demonstrates unequaled professionalism in any situation. We take great pride in preparation, meticulously planning to ensure that our performance lives up to our reputation.</p>
                        <br />
                        <div className="d-flex justify-content-evenly">
                        <Link to="/menu" className="btn mb-2 " role="button">Our menus</Link>
                        <Link to="/decoration" className="btn mb-2 " role="button">Decoration</Link>
                        <Link to="/photography" className="btn mb-2 " role="button">Photography</Link>
                        </div>
                    </div>
    
                    <div className="photo">
                            <img src={s3} alt="sopho"/>
                    </div>   
                </div>
                
                <div className="d-flex">
                    <div className="photo">
                            <img src={s4} alt="sopho"/>
                    </div>
                    <div className="description text-center">  
                        <br></br>
                        <h1>Conferences & Conventions</h1>
                        <br></br>
                        <p>Delivering excellent food for the big events are our forte. We offer a wide range of menus you can choose from or we will work with you to craft a custom menu to suit your taste and needs</p>
                        <br />
                        <div className="d-flex justify-content-evenly">
                        <Link to="/menu" className="btn mb-2 " role="button">Our menus</Link>
                        <Link to="/decoration" className="btn mb-2 " role="button">Decoration</Link>
                        <Link to="/photography" className="btn mb-2 " role="button">Photography</Link>
                        </div>
                    </div>   
                </div>
                
                <div className="d-flex cr">
                    <div className="description text-center">  
                        <br></br>
                        <h1>Smalls & Mediums</h1>
                        <br></br>
                        <p>Events like in-house staff party, seminars, workshops, town halls, sales meetings, award dinners, staff retreats, and product launches, etc are very frequent. We’ve served many blue chip companies to create high impact events for their valued patrons – internal and external.</p>
                        <br />
                        <div className="d-flex justify-content-evenly">
                        <Link to="/menu" className="btn mb-2 " role="button">Our menus</Link>
                        <Link to="/decoration" className="btn mb-2 " role="button">Decoration</Link>
                        <Link to="/photography" className="btn mb-2 " role="button">Photography</Link>
                        </div>
                       
                    </div>
                    <div className="photo">
                            <img src={s5} alt="sopho"/>
                    </div> 
                      
                </div>
                
                <div className="d-flex">
                    <div className="photo">
                            <img src={s6} alt="sopho"/>
                    </div>
                    <div className="description text-center">  
                        <br></br>
                        <h1>Cafeteria Management</h1>
                        <br></br>
                        <p>Cafeterias are common for corporate offices, factories, hostels, schools, clubs, and hospitals. But getting the right cafeteria/canteen management team on board is the challenge. With several years of working experience in high-end hotels, we are the best fit for this job.</p>
                        <br />
                        <div className="d-flex justify-content-evenly">
                        <Link to="/menu" className="btn mb-2 " role="button">Our menus</Link>
                        <Link to="/decoration" className="btn mb-2 " role="button">Decoration</Link>
                        <Link to="/photography" className="btn mb-2 " role="button">Photography</Link>
                        </div>
                    </div>   
                </div>

            </div>
        </div>
    )
}

export default Service 