import {useState, useEffect, useContext, useDebugValue} from 'react'
import React from 'react';
import AddCartState from '../../ContextApi/addCart';
import { Link } from 'react-router-dom';
import './cart.css'

const Cart = ()=>{
    const value = useContext(AddCartState);
    const {cart, updateCart, removeItem, totalPrice, cartDisplay} = value 
    
    useEffect(()=>{

    },[])

    const quantityAdd = (selectItem)=>{
        console.log('click quantity', selectItem)
        let item = cart.filter(item=> item.id ===selectItem.id)
        item[0].quantity = item[0].quantity + 1
        console.log(item)
         updateCart(item)
    }

    const quantityMinus = (selectItem)=>{
        console.log('click quantity', selectItem)
        let item = cart.filter(item=> item.id ===selectItem.id)
        if(item[0].quantity>1){
            item[0].quantity = item[0].quantity - 1
            updateCart(item)
        }
    }

    const deleteItem = (selectItem) =>{
        removeItem(selectItem)
    }

    
    
    return(
        
        <div className="cart-body border border-1">
            <br></br>
            <div className="mb-3" onClick={()=>cartDisplay()} style={{float:"right", cursor:"pointer" , color:"red"}}><i class="fas fa-times"></i></div>
            <br />
            {cart.length <1 &&(
                <div>
                    Your Cart is Empty
                </div>
            )}
            
            {cart.length >=1&&(
                <div className="mb-3">
                     <div className="menu-bar-c d-flex">
                        <div className="menu-b">
                            Item Name
                        </div>
                        <div className="price-b flex-flow">
                            Price
                        </div>
                        <div className="quantity-b flex-flow">
                            Quantity
                        </div>
                        <div className="sub-price-b flex-flow">
                            Sub Total
                        </div>
                </div>

                {value.cart.map((item,index)=>(
                    <div className="item-body d-flex" key={index}>
                        <div className="menu ">
                            {item.title}
                        </div>
                        <div className="price flex-flow">
                            {item.price}
                        </div>
                        <div className="quantity flex-flow">
                            <span className="q-btn me-2" onClick={()=>quantityMinus(item)}>-</span>
                                {item.quantity}
                            <span className="q-btn ms-2" onClick={()=>quantityAdd(item)}>+</span> 
                        </div>
                        <div className="sub-price flex-flow"> 
                            {item.quantity*item.price}
                        </div>
                        <span onClick={()=>deleteItem(item)}><i class="fas fa-trash"></i></span>
                    </div>
                ))}
                <div className="totalPrice">
                    Total Price {totalPrice()}
                </div>
            </div>
            )}
            
            {cart.length >=1 &&(
                <div className="d-flex c-btn ">
                <div>
                    {/* <Link to="/profile" onClick={()=>cartDisplay()} className="btn border border-1">Save To Cart</Link> */}
                </div>
                <div>
                    <Link to="/order-page" onClick={()=>cartDisplay()} className="btn border border-1">order Now</Link>
                </div>
            </div>
            )}
            
        </div>
    )
}

export default Cart 



// const OrderNow = ()=>{
    //     cartDisplay()
    // }