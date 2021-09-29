import {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Link } from 'react-router-dom';
import CancelOrder from './cancelOrder'
import MyOrder from './myOrder';
import  UserInfo  from './userInfo';
import './userProfile.css'
import { stat } from 'fs';
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token")

const UserProfile = ()=>{
    const [state, setState] = useState({})
    const [myOrder, setMyOrder] = useState([])
    const [cancelOrder, setCancelOrder] = useState([])
    
    useEffect(()=>{
        const getUser = async() =>{
            try{
                const user = await axios.get('https://baanthai.herokuapp.com/api/user/me') 
                const myorder = await axios.get('https://baanthai.herokuapp.com/api/post/myorder') 
                const myCancelorder = await axios.get('https://baanthai.herokuapp.com/api/post/cancelorder') 

                setState(user.data)
                setMyOrder(myorder.data)
                setCancelOrder(myCancelorder.data)
            }catch(ex){
                console.log(ex)
                return 
            }
        }

        console.log('my order', myOrder)
        console.log('my profile', state)
        getUser()
        
    },[myOrder, cancelOrder])

    return(
        <div className="">
            <br />
            <h5 className="header-title-b">Baanthaii User Profile</h5>
            <div className="cover-box">
                <div className='name-header'>
                    {state.name}
                </div>
            </div>
            <hr />
            <div className="flex-flow">
                <Link to='/profile' className="me-3">My profile</Link>
                <Link to="/profile/myorder" className="me-3">My Order</Link>
                <Link to='/profile/cancelorder'>Canceled Order</Link>
                
            </div>
            <div className="body container">
                <switch>
                    
                    <Route exact path='/profile/myorder'>
                        <h5>My order</h5>
                        <MyOrder MyOrder={myOrder}/>
                    </Route>
                    <Route exact path='/profile/cancelorder'>
                        <h5>Canceled Order</h5>
                        <CancelOrder CancelOrder={cancelOrder}/>
                    </Route>
                    <Route exact path='/profile'>
                        <h5>My Profile</h5>
                        <UserInfo state={state}/>
                    </Route>
                </switch>
            </div>
        </div>
    )
}

export default UserProfile




// <div className="my-order">
// <div className="mb-3 heading">
//     My Orders
// </div>
// <MyOrder MyOrder={myOrder}/>
// <h1>CancelOrder</h1>
// <CancelOrder CancelOrder={cancelOrder}/>
// </div>




// const user = await axios.get('https://baanthai.herokuapp.com/api/user/me')
// const myorder = await axios.get('https://baanthai.herokuapp.com/api/post/myorder') 


// const user = await axios.get('http://localhost:5000/api/user/me')
// const myorder = await axios.get('http://localhost:5000/api/post/myorder') 


 // const user = await axios.get('http://localhost:5000/api/user/me')
// const myorder = await axios.get('http://localhost:5000/api/post/myorder') 
