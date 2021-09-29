import {useState,useEffect} from 'react'
import './Header.css'
import jwtDecode from 'jwt-decode'
import {Link} from 'react-router-dom'
let navClassName = "nav align-items-center"

const Header = () =>{
    const[navClass, setNavClass] =useState(navClassName)
    const [state, setState] = useState({})

    useEffect(()=>{
        try{
            const token = localStorage.getItem('token')
            const user = jwtDecode(token)
            if(user){
                setState({user})
              }
        }
        catch(ex){
            return 
        }
        console.log(user)
    },[])


    const {user} = state
    const logout = ()=>{
        localStorage.removeItem('token')
        window.location='/'
    }


    const navShow = ()=>{
       if(navClass ===navClassName){
           setNavClass("nav align-items-center active")
       }
       else{
           setNavClass("nav align-items-center")
       }
    }
     
    return(
        <header>
            <div className="header d-flex align-items-center">
                <div className="logo">
                    <Link to='/'><span className="color-main">Baan</span>thaii Admin</Link>
                </div>
                <nav id="nav-list" className={navClass}>
                        <ul><li><Link to="/">DashBroad</Link></li></ul>
                        
                        {
                            user && (
                                <ul className="d-flex align-items-center">
                                <li><Link to="/order-request">Order Request</Link></li>
                                <li><Link to="/order-complete">Completed Order</Link></li>
                                {/* <li><Link to="/order-cancel">Canceled Order</Link></li> */}
                                <li><Link to="/users">Users</Link></li>
                                <li><Link to="/photography-request">Photography</Link></li>
                                <li><Link to="/decoration-request">Decoration</Link></li>
                                <li><Link to="/feedback">Feedback</Link></li>
                                <li className="nav-item active" onClick={()=>logout()}><Link className="item" to="/Login">Logout</Link></li>
                                </ul>
                            )
                        }

                        {/* <li><Link to="/quotation">Quotation</Link></li> */}
                    
                </nav>
                <div className="menu-bar desktop" onClick={()=>navShow()}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </header>   
    )
}

export default Header
