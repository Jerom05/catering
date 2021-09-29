import React, { useEffect, useState } from 'react'
import './Faq.css'

const AccordionItems = [
    {
        id:0,
        active:true,
        title:" What services do you offer? ",
        description:"Our focus is on event catering – small or BIG. We offer super delicious food and fabulous service for all types of events, namely friends & family get together, birthday celebration, marriage anniversary, wedding reception, meeting, training, workshop, seminar, conference, and conventions, etc."
    },
    {
        id:1,
        active:false,
        title:" Where can I see your menus and pricing? Can I order customized menu? ",
        description:"You can visit the “Menus & Pricing” page on our website and the “Services” option on our Facebook page. In addition, the “Shop” section of the Facebook page also displays our food items and prices along with images. We welcome you to customize your menu with the help of our itemized price list."
    },
    {
        id:2,
        active:false,
        title:"What is your order policy? How do I confirm my order?",
        description:"Our order policy says that you need to order a full menu for at least 20 persons and at the same time your total order value has to be at least 8000 Taka. And, to confirm your order you need to pay half of the total bill in advance and the rest to be paid in full on delivery  (preferebly in cash)."
    },
    {
        id:3,
        active:false,
        title:" What is the latest time to order?",
        description:"For <50 people, you need to confirm your order at least 24 hrs prior to your scheduled delivery time. And, for >50 people you are kindly requested to confirm your order at least 2 days in advance."
    },
    {
        id:4,
        active:false,
        title:"Do you have home delivery service? Is it free?",
        description:"Yes, we do have home (/office) delivery service. And, it’s chargeable and the charge varies depending on the order volume. Typically, we charge 300 tk for an order of 50 people within our coverage. Larger orders requiring pick up van will incur additional delivery charge."
    },
    {
        id:5,
        active:false,
        title:" Do you have cutlery and crockery i.e. chafing dish (serving dish / hot dish), spoon, fork, knife, glass, and plate, etc?",
        description:"Yes, we do have premium quality cutlery and crockery items as you’ve mentioned in your question. Please find the rental charge here. Delivery charge will also apply.",
    },
    {
        id:6,
        active:false,
        title:"Do you have waiter to serve the food? How much is the charge?",
        description:"Yes, we have well-trained and well-groomed waiters ready to serve you onsite and offsite. Within our coverage area the charge is 600 tk per waiter."
    },
    {
        id:7,
        active:false,
        title:"How can I contact you?",
        description:"You may call us at +8801648500219 / 01303321137 or send an email to banthaii@gmail.com."
    },
    {
        id:8,
        active:false,
        title:"  How do you deliver your food? ",
        description:"We delivery our food in air-tight and food grade plastic containers that are usually taken back at the time of delivery. However, if you can’t vacate the boxes during delivery and/or want us to collect them later, then you need to pay additional charge to cover the transportation expenses."
    },
    {
        id:9,
        active:false,
        title:" What about your food quality, quantity, and taste? Is it possible to taste your food before ordering?",
        description:"Quality: We hand-pick fresh and premium quality produce and ingredients from reliable suppliers and prepare the food in a neat and clean kitchen maintaining health and hygiene best practices We provide top quality food in sufficient quantity especially rice based and non-countable items like Polao, Kacchi, Biryani, Jorda, and Firni, etc. As for meat, we have industry leading standard that no one in the market can even think of. For example, most catering providers feed 8-10 persons with one kg beef or mutton. But our ratio is 1:6 i.e. one kg of beef or mutton is allocated for 6 persons. Countable items like Roast, Kabab, etc are given as per order."
    },
]


const FAQ= ()=>{
    const [items, setItem] = useState(AccordionItems) 
    const [activeId, setActiveId] = useState(0)
   
    useEffect(()=>{
        console.log(activeId)
    },[items])

    const handleAccordion = (item)=>{
        let newUpdateItems =items.map(i=> {
            if(i.id === item.id){
                i.active = !item.active
                setActiveId(item.id)
                return i
            }
            if( item.id === activeId){
                setActiveId(item.id)
                return i
            }
            if(i.id ===activeId){
                i.active = !i.active
                setActiveId(item.id)
            }
            return i
        })

        setItem(newUpdateItems)
    }

    return(
        <div className="_faq container">
            <br />
            <br />
        
            <div className="_Fa-Content text-center">
                <h1>Frequently Asked Questions (FAQs)</h1>
                <p></p>
            </div>
            <br />
            <br />

            {
                items.map(item=>(
                    <div className="accordion-content border border-1">
                        <div className="title border border-1 d-flex align-items-center" onClick={()=>handleAccordion(item)}>
                            <span className="mx-2" >{item.active ? "-" : "+"}</span>
                            <h4>{item.title}</h4>
                            
                        </div>
                        
                        {
                            item.active? 
                            <div className="accordion-body border border-1">
                                <p>{item.description}</p>
                            </div>
                            : null
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default FAQ