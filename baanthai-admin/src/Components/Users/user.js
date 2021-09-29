import React, { useState ,useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = ()=>{
    const [user, setUser] = useState([])
    const [render, setRender] = useState(true)

    useEffect(()=>{
        const getData = async() =>{
            try{
                const users = await axios.get('https://baanthai.herokuapp.com/api/admin/get/users')
                setUser(users.data)
            }catch(ex){
                console.log(ex)
                return 
            }
        } 

        getData()
        Render()
    },[render])

    const Render = ()=>{
        setTimeout(()=>{
        setRender(!render)
      },3000)
    }

    const userCard = (item,i)=>{
        return(
            <div className="orderCard user-card border border-1 mb-3">
                <div className="">
                    <div className="d-flex">
                        <h6>SL no-{i+1} . User id: {item._id}</h6>
                        <i class="fas fa-trash ms-auto" onClick={()=>Remove(item._id)} style={{color:"#fff"}}></i>
                    </div>
                    
                    <hr />
                </div>
                <div>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Address: {item.address}</p>
                    <p>Phone: {item.phone}</p>
                </div>
            </div>
        )
    }

    const Remove = async(id) =>{
        console.log(id)
        await axios.post(`https://baanthai.herokuapp.com/api/admin/post/delete-user/${id}`)
    }

    return(
        <div className="container">
            <h1 className="pt-5 text-center"><span className="color-main">Baan</span>thai Registered Users</h1>
            <hr />
            <br />
            {
                user.length ===0 ? <h3>We have Zero users </h3> : <h5>Total {user.length} users registered in our platform</h5>
            }
            <br/>
            {
                user.length>0 &&(
                    <div>
                        {user.map((item,i)=>(
                            <div>
                                {userCard(item,i)}
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Users
  