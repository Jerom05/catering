import React,{useState,useEffect} from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import lodash from 'lodash'
import AddCartState from '././ContextApi/addCart'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Menu from './Components/Menus/Menu'
import Service from './Components/Services/Service'
import Decoration from './Components/Decoration/Decoration'
import Faq from './Components/FAQ/Faq'
import Photography from './Components/Photography/Photography'
import NotFound from './Components/NotFound/NotFound'
import Footer from './Components/Footer/footer'
import PriceList from './Components/PriceList/PriceList';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import Cart from './Components/Cart/Cart';
import UserProfile from './Components/userProfile/userProfile';
import OrderPage from './Components/OrderPage/OrderPage'
import Cancelation from './Components/Cancelation/cancelation';
import NewPriceList from './Components/PriceList/NewPriceList';
import About from './Components/About/about';
import Terms from './Components/Terms/Terms';
import Privacy from './Components/Privacy/Privacy';
import Quotation from './Components/Quotation/Quotation';
import Contact from './Components/Contact/contact';
import DecBook from './Components/Decoration/dec-booking';
import PhotoBook from './Components/Photography/photo-booking';
import Feedback from './Components/Feedback/feedback'
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword'


function App() {
  let cartClassName = "cart cartHide"
  const [cartState, setCartState] = useState([])
  const [cartClass, setCartClass] = useState(cartClassName)
  const [totalOrderPrice, setTotalOrderPrice] = useState(0)
  useEffect(()=>{
    console.log(cartState)
  },[cartState])

  const addCartState = (item)=>{
    const hasItem = cartState.find(i=>i.id === item.id)
    // return if the item already in the cart.
    if(hasItem) return
    const updateCart = [...cartState, item]
    setCartState(updateCart)  
    console.log(cartState)
  }

  const updateCart = (item)=>{
      const updateItem = cartState.filter(item=>item.id===item.id)
      const indexItem = cartState.indexOf[updateItem[0]]
      cartState[indexItem] = item
      console.log(cartState)
      setCartState([...cartState])
  }

  const clearCart = ()=>{
    setCartState([])
  }

  const removeItem = (selectItem) =>{
      let item = cartState.filter(i=> i.id !==selectItem.id)
      setCartState(item)
  }

  const totalPrice = ()=>{
      const priceArray = cartState.map(item=>item.quantity * item.price)
      const totalPrice = lodash.sum(priceArray)
      setTotalOrderPrice(totalPrice)
      return totalPrice
  }

  const cartDisplay = ()=>{
    if(cartClass===cartClassName){
        setCartClass('cart cartShow')
    }
    else{
        setCartClass('cart cartHide')
    }
  }

  // Set Order 
  const Order = ()=>{
    if(cartState.length < 1 ){
      return 
    }
    const orderObj = {
      totalPrice: totalOrderPrice,
      cartItem : cartState,
      user_id :  ''
    }
  }


  return (
    <AddCartState.Provider value={{cart:cartState, updateCart, removeItem, totalPrice, addCartState, cartDisplay, clearCart}} >
      <div className="App">
        <Header />
        <div className="__space">
          <Switch>
            <Route path="/service">  <Service/> </Route>
            <Route path="/Menu">  <Menu /> </Route>
            <Route path="/faq"> <Faq/> </Route>
            <Route path="/photography">  <Photography/> </Route>
            <Route path="/decoration">  <Decoration/> </Route>
            <Route path="/price">  <NewPriceList/> </Route>
            <Route path="/login">  <Login/> </Route>
            <Route path="/profile">  <UserProfile/> </Route>
            <Route path="/order-page">  <OrderPage/> </Route>
            <Route path="/register">  <Register/> </Route>
            <Route path="/cancelation">  <Cancelation/> </Route>
            <Route path="/about">  <About/> </Route>
            <Route path="/terms">  <Terms/> </Route>
            <Route path="/privacy">  <Privacy/> </Route>
            <Route path="/quotation">  <Quotation/> </Route>
            <Route path="/feedback">  <Feedback/> </Route>
            <Route path="/contact">  <Contact/> </Route>
            <Route path="/dec-booking/:id">  <DecBook/> </Route>
            <Route path="/photo-booking/:id">  <PhotoBook/> </Route>
            <Route path="/forgot-password">  <ForgotPassword/> </Route>
            <Route path="/reset-password/:params"> <ResetPassword/> </Route>
            <Route exact path="/"> <Home/> </Route>
            <Route path="/not-found"> <NotFound/> </Route>
          </Switch>
        </div>
        
        <div className="cart-icon" onClick={()=>cartDisplay()}>
            <i className="fas fa-shopping-cart color-main"></i>
              {
                cartState.length>0 &&(
                  <div className="cart-item-num flex-flow">{cartState.length}</div>
                )
              } 
        </div>

        <div className={cartClass}>
          <Cart /> 
        </div>

        <br />
        <br />
        <br />
        <Footer />
      </div>
    </AddCartState.Provider>
  );
}

export default App;
