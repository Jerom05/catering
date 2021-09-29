import React from 'react'
import { useState,useContext } from 'react'
import ChickenBiriyani from '../../Project-Image/Menus/chicken-biriyani.jpg'
import MuttonBiriyani from '../../Project-Image/Menus/mutton-biriyani.jpg'
import KacchiBiriyani from '../../Project-Image/Menus/kacchi.jpg'
import AddCartState from '../../ContextApi/addCart';
import './Menu.css'


import s1 from '../../Project-Image/set menu/set menu 1.jpg'
import s2 from '../../Project-Image/set menu/set menu 2.jpg'
import s3 from '../../Project-Image/set menu/set menu 3.png'
import s4 from '../../Project-Image/set menu/set menu 4.jpg'
import s5 from '../../Project-Image/set menu/set menu 5.jpg'
// import s6 from '../../Project-Image/set menu/set menu 6.jpg'
import s7 from '../../Project-Image/set menu/set menu 7.jpg'
import s8 from '../../Project-Image/set menu/set menu 8.jpg'
import s9 from '../../Project-Image/set menu/set menu 9.jpg'
import s10 from '../../Project-Image/set menu/set menu 10.jpg'
import s11 from '../../Project-Image/set menu/set menu 11.jpg'
import s12 from '../../Project-Image/set menu/set menu 12.jpg'
import s13 from '../../Project-Image/set menu/set menu 13.jpg'




const ItemList =[
    {
        id:1,
        Image:s1,
        price:695,
        title:"Set menu-1",
        quantity:1,
        description:"Shahi Polao - MotorShuti Polao ,Chicken Roast - Tandoori Chicken Mutton Rezala ,Prawn MalaiKari - DoPiaza ,Jali Kabab (Beef - Chicken), Jorda - Firni, Borhani"
    },
    {
        id:2, 
        price:670,
        Image:s2,
        title:"Set menu-2",
        quantity:1,
        description:" Plain Polao - Bhuna Khichuri Chicken Roast - Tandoori Chicken Beef Rezala - Bhuna Prawn Malai Curry - DoPiaza Shami Kabab (Beef - Chicken) Jorda - Firni Borhani",
    },
    {
        id:3,
        price:770,
        Image:s3,
        title:"Set menu-3",
        quantity:1,
        description:"Shahi Polao - MotorShuti Polao Chicken Roast - Tandoori Chicken Beef Rezala - Bhuna Duck Meat Bhuna Jali Kabab (Beef or Chicken) Jorda - Firni Borhani."

    },
    {
        id:4,
        price:740,
        Image:s4,
        title:"Set Menu-4",
        quantity:1,
        description:"Shahi Polao - MotorShuti Polao Chicken Roast - Tandoori Chicken Beef Rezala - Shahi Polao -  Bhuna Duck Meat Bhuna Jali Kabab (Beef - Chicken) Jorda - Firni Borhani."

    },
    {
        id:5,
        price:780,
        Image:s5,
        title:"Set Menu-5",
        quantity:1,
        description:"MotorShuti Polao Chicken Roast - Tandoori Chicken Beef Rezala - Bhuna Duck Meat Bhuna Jali Kabab (Beef - Chicken) Jorda - Firni Borhani."

    },
    {
        id:6,
        price:800,
        Image:s7,
        title:"Set Menu-6",
        quantity:1,
        description:" Tandoori Chicken Beef Rezala-  Polao Chicken Roast - Tandoori Chicken Beef Rezala - Bhuna Duck Meat Bhuna Jali Kabab (Beef - Chicken) Jorda - Firni Borhani."

    },
    {
        id:7,
        price:660,
        Image:s7,
        title:"Set Menu-7",
        quantity:1,
        description:"Shahi Polao - MotorShuti Polao Chicken Roast - Shahi Polao - MotorShuti Polao Chicken Roast - Tandoori Chicken Beef Rezala - Bhuna Duck Meat Bhuna."

    },
    {
        id:8,
        price:750,
        Image:s8,
        title:"Set Menu-8",
        quantity:1,
        description:" Bhuna Prawn Malai Curry - DoPiaza Shami Kabab (Beef / Chicken) Jorda- Tandoori Chicken Beef Rezala - Bhuna Duck Meat Bhuna Jali Kabab (Beef - Chicken) Jorda - Firni Borhani."

    },
    {
        id:9,
        price:870,
        Image:s9,
        title:"Set Menu-9",
        quantity:1,
        description:" MotorShuti Polao Chicken Roast - Tandoori Chicken Beef Rezala - Bhuna Duck Meat Bhuna Jali Kabab (Beef / Chicken) Jorda - Firni Borhani."

    },
    {
        id:10,
        price:770,
        Image:s10,
        title:"Set Menu-10",
        quantity:1,
        description:"Special Beef Tehari / Tandoori Chicken Beef Rezala / Bhuna Duck Meat Bhuna Jali Kabab (Beef / Chicken) Jorda / Firni Borhani."

    },
    {
        id:11,
        price:800,
        Image:s11,
        title:"Set Menu-11",
        quantity:1,
        description:"White Rice (Kataribhog)  / MotorShuti Polao Chicken Roast / Bhuna Duck Meat Bhuna Jali Kabab (Beef / Chicken) Jorda Tandoori Chicken Beef Rezala /  / Firni Borhani."

    },
    {
        id:12,
        price:350,
        Image:s13,
        title:"Set Menu-12",
        quantity:1,
        description:" \n Akni Biriyani / Kala Vuna / Soft Drinks \n"

    },
    {
        id:13,
        price:800,
        Image:s12,
        title:"Set Menu-13",
        quantity:1,
        description:"Rice Mejabni Gosht / Dal Gosht / Paya / Kala Vuna / Soft Drinks"

    },
]

const Menu = () =>{
    const value = useContext(AddCartState);
    const [itemList, setItemList] = useState(ItemList)
    const { addCartState } = value

    return(
            <div className="container">
                <br />
                <br />
                <h1 className=" mt-3 mb-5 text-center">Our Menus</h1>
                <div className="row row-m  g-2 __service-items">
                    {
                        itemList.map(item=>(
                            <div className="col-lg-4"  key={item.id}> 
                                <div className="item-card card-p menus">
                                    <div className="item-content">
                                        <h5 className="text-center mb-2">{item.title}</h5>
                                        <hr />
                                        {/* <br />
                            
                                         <br/> */}
                                        <div className="item-img">
                                            <img src={item.Image} className="m-auto" alt="somephoto"/>
                                        </div>
                                        <p className="text-center item-description">{item.description}</p>
                                        
                                        <hr/>
                                        <p className="item-price ms-2 mt-3">Tk.{item.price}</p>
                                        <button className="btn" onClick={()=>addCartState(item)} >Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    )
}

export default Menu 
