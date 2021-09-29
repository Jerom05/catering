import React from 'react'
import home from '../../Project-Image/decoration/home.jpg'
import wedding from '../../Project-Image/decoration/wed.webp'
import birthday from '../../Project-Image/decoration/birth.webp'
import shop from '../../Project-Image/decoration/shop.webp'
import office from '../../Project-Image/decoration/office.webp'

import './Decoration.css'
import { Link } from 'react-router-dom'

const DecorationList =[
    {
        id:1,
        price:10000,
        title:"Home Decoration",
        description:"",
        feature:['Contrast Your Neutrals', "Play With Texture", "Work in Some Wood","Mix Up Your Upholstery"],
        image: home
    },
    {
        id:2, 
        price:30000,
        description:"",
        title:"Wedding Decoration",
        feature:["Lighting", "Sound System", "Mike, Mouse, Joker", "Flowers "],
        image: wedding
    },
    {
        id:3, 
        price:8000,
        description:"",
        title:"Birthday Decoration",
        feature:["Lighting", "Sound System", "Mike, Mouse, Joker", "Flowers "],
        image: birthday
    },
    {
        id:4, 
        price:20000,
        title:"Shop Decoration",
        description:"",
        feature:["Lighting", "Sound System", "Mike, Mouse, Joker", "Flowers "],
        image: shop
    },
    {
        id:5, 
        price:25000,
        title:"Office Decoration",
        feature:["Lighting", "Sound System", "Mike, Mouse, Joker", "Flowers "],
        image: office 
    },
]

const Decoration = () =>{

    const book = ()=>{

    }
    return( 
        <div className="container-fluid ">
            <div className="banner-dec">
                <br/>
                <h1 className=" mt-3 mb-5 text-center">Decoration</h1>
                <Link to="/quotation" className="btn btn-p btn-primary mx-auto mt-5 flex-flow w-25" role="button">Request For Booking</Link>

            </div>
            <div className="container bg-dec">
                <br />
                <br />
                <div className="row  g-2 __service-items">
                    {
                        DecorationList.map(item=>(
                            <div className="col-lg-4"  key={item.id}> 
                                <div className="item-card ">
                                    <div className="item-content">
                                        <h5 className="text-center mb-2">{item.title}</h5>
                                        <hr />

                                        <div className="item-img">
                                            <img src={item.image} className="m-auto" alt="somephoto"/>
                                        </div>
                                        {/* <p className="text-center item-description">{item.description}</p> */}
                                        <div className="flex-flow justify-content-evenly mt-4">
                                            <p className="item-price">Tk.{item.price}</p>
                                            <Link className="btn" to={`/dec-booking/${item.id}`}>Book now</Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            </div>
    )
}

export default Decoration 
