import React from 'react'

import wed from '../../Project-Image/photgraphy/wed.webp'
import birth from '../../Project-Image/photgraphy/birth.jpg'
import annual from '../../Project-Image/photgraphy/annual.jpg'
import pesonal from '../../Project-Image/photgraphy/personal.jpg'


import './Photography.css'
import { Link } from 'react-router-dom'

const PhotoGraphyList =[
    {
        id:1,
        price:20000,
        title:"Wedding Photgraphy",
        description:"",
        feature:['Contrast Your Neutrals', "Play With Texture", "Work in Some Wood","Mix Up Your Upholstery"],
        image: wed
    },
    {
        id:2, 
        price:15000,
        description:"",
        title:"One Day Program",
        feature:["Lighting", "Sound System", "Mike, Mouse, Joker", "Flowers "],
        image: birth
    },
    {
        id:3, 
        price:8000,
        description:"",
        title:"Two Day Program",
        feature:["Lighting", "Sound System", "Mike, Mouse, Joker", "Flowers "],
        image: pesonal
    },
    {
        id:4, 
        price:20000,
        title:"Pesonal Photography",
        description:"",
        feature:["Lighting", "Sound System", "Mike, Mouse, Joker", "Flowers "],
        image: annual
    },
]

const Decoration = () =>{

    const book = ()=>{

    }
    return(
            <div>
            <div className="banner-photo">
                <br/>
                <h1 className="hee mt-3 mb-5 text-center">Photography</h1>
                <Link to="/quotation" className="btn btn-p btn-primary mx-auto mt-5 flex-flow w-25" role="button">Request For Booking</Link>

            </div>
            <div className="container bg-photo">
                
                <br />
                <h1 className=" mt-3 mb-5 text-center">Photography Category</h1>
                <hr />
                <br />
                <div className="row  g-2 __service-items">
                    {
                        // PhotoGraphyList.map(item=>(
                        //     <div className="col-lg-4"  key={item.id}> 
                        //         <div className="item-card card-p ">
                        //             <div className="item-content">
                        //                 <h5 className="text-center mb-2">{item.title}</h5>
                        //                 <hr />

                        //                 <div className="item-img">
                        //                     <img src={item.image} className="m-auto" alt="somephoto"/>
                        //                 </div>
                        //                 {/* <p className="text-center item-description">{item.description}</p> */}
                        //                 <div className="flex-flow justify-content-evenly mt-4">
                        //                     <p className="item-price">Tk.{item.price}</p>
                        //                     <Link className="btn" to={`/photo-booking/${item.id}`}>Book now</Link>
                        //                 </div>
                                        
                        //             </div>
                        //         </div>
                        //     </div>
                        // ))
                    }







                            <div className="col-lg-4"> 
                                <div className="item-card card-p ">
                                    <div className="item-content">
                                        <h5 className="text-center mb-2">Wedding Photography</h5>
                                        <hr />

                                        <div className="item-img">
                                            <img src={wed} className="m-auto" alt="somephoto"/>
                                        </div>
                                        {/* <p className="text-center item-description">{item.description}</p> */}
                                        <div className="ms-3 dd">
                                        <p>Unlimited Photo</p>
                                        <p>300 professional edited photo</p>
                                        <p>Good quality Video</p>
                                        <p>Duration : 80 Minutes</p>
                                        </div>
                                        
                                        <div className="flex-flow justify-content-evenly mt-4">
                                            <p className="item-price">Tk.20000</p>
                                            <Link className="btn" to={`/photo-booking/${1}`}>Book now</Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4"> 
                                <div className="item-card card-p ">
                                    <div className="item-content">
                                        <h5 className="text-center mb-2">One Day Program</h5>
                                        <hr />

                                        <div className="item-img">
                                            <img src={birth} className="m-auto" alt="somephoto"/>
                                        </div>
                                        {/* <p className="text-center item-description">{item.description}</p> */}
                                        <div className="ms-3 dd">
                                        <p>Unlimited Photo</p>
                                        <p>200 professional edited photo</p>
                                        <p>Good quality Video</p>
                                        <p>Duration : 30 Minutes</p>
                                        </div>
                                        <div className="flex-flow justify-content-evenly mt-4">
                                            <p className="item-price">Tk.15000</p>
                                            <Link className="btn" to={`/photo-booking/${2}`}>Book now</Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4"> 
                                <div className="item-card card-p ">
                                    <div className="item-content">
                                        <h5 className="text-center mb-2">Two Day Program</h5>
                                        <hr />

                                        <div className="item-img">
                                            <img src={pesonal} className="m-auto" alt="somephoto"/>
                                        </div>
                                        <div className="ms-3 dd">
                                        <p>Unlimited Photo</p>
                                        <p>300 professional edited photo</p>
                                        <p>Good quality Video</p>
                                        <p>Duration : 100 Minutes</p>
                                        </div>
                                        {/* <p className="text-center item-description">{item.description}</p> */}
                                        <div className="flex-flow justify-content-evenly mt-4">
                                            <p className="item-price">Tk.30000</p>
                                            <Link className="btn" to={`/photo-booking/${3}`}>Book now</Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4"> 
                                <div className="item-card card-p ">
                                    <div className="item-content">
                                        <h5 className="text-center mb-2">Pesonal Photography</h5>
                                        <hr />

                                        <div className="item-img">
                                            <img src={annual} className="m-auto" alt="somephoto"/>
                                        </div>

                                        <div className="ms-3 dd">
                                        <p>Unlimited Photo</p>
                                        <p>50 professional edited photo</p>
                                        <p>Good quality Video</p>
                                        <p>Duration : 30 Minutes</p>
                                        </div>
                                        {/* <p className="text-center item-description">{item.description}</p> */}
                                        <div className="flex-flow justify-content-evenly mt-4">
                                            <p className="item-price">Tk.10000</p>
                                            <Link className="btn" to={`/photo-booking/${4}`}>Book now</Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>



                </div>
            </div>
            </div>
    )
}

export default Decoration 
