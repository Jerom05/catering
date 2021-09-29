import {useState,useEffect} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import logo from '../..//Project-Image/images/Baanthaii.png'


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

    const logout = ()=>{
        localStorage.removeItem('token')
        window.location='/'
    }

    const {user} = state
    console.log('nav', state)

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
                    <Link to='/'><img src={logo} style={{width:"150px"}}/></Link>
                </div>
                <nav id="nav-list" className={navClass}>
                    <ul className="d-flex align-items-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/service">Services</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/price">Price List</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/photography">Photography</Link></li>
                        <li><Link to="/decoration">Decoration</Link></li>
                        
    
                        {!user && (
                            <div className="d-flex">
                                <li className="nav-item active"><Link className="item" to="/login">Login</Link></li>
                                <li className="nav-item"><Link className="item" to="/register">Register</Link></li>
                            </div>
                        )}
                        {user && (
                            <div className="d-flex">
                                <li className="nav-item active"><Link className="item" to="/profile"><i class="fas fa-user"></i> {user?.name?.split(" ")}</Link></li>
                                <li className="nav-item active" onClick={()=>logout()}><Link className="item" to="/Login">Logout</Link></li>
                            </div>
                        )}
                    </ul>
                </nav>
                
                <div className="menu-bar desktop" onClick={()=>navShow()}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </header>   
    )
}

export default Header
