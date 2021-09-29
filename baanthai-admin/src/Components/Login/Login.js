import {useState} from 'react'
import axios from 'axios'
import {validateEmail, validatePassword} from './validate'
import './Login.css'

const Login = (props)=>{
    const [state, setState] = useState({
            name:'', 
            password:'', 
            errors:{
                name:'',
                password: '',
    
            },
            button:false
        })
    
    const handlChange = e=>{
        const property = e.target.name
        state[property] = e.target.value
        state.errors.invalid =''
        // Validate(property) 
        console.log('state', state)
        setState({...state})
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log('submit')
        submit(state.name,state.password);
        setState({...state})
        // console.log(state)
    }

    const submit =async (name , password)=>{
        try{
            const {data} = await axios.post('https://baanthai.herokuapp.com/api/auth/admin',{
                name,
                password
            })
            localStorage.setItem('token', data) 
            window.location = '/'
        }
        catch(ex){
            if(ex.response && ex.response.status===400){
              state.errors.invalid = ex.response.data
              setState({...state})
            }
        }
    }

    const Validate = (property) =>{
        switch(property){
            case 'email':
                const valid = validateEmail(state[property])
                if(!valid){
                    state.errors[property] = 'Enter valid email'
                }
                if(valid){
                    state.errors[property] = null
                }
        }
        switch(property){
            case 'password':
                const valid = validatePassword(state[property])
                if(!valid){
                    state.errors[property] = 'password length must be greater than 5.'
                }
                if(valid){
                    state.errors[property] = null
                }
        }
        if (state.errors.email ===null && state.errors.password === null ){
            state.button = false
         }
        else{
            state.button =true
        }
    }
    
    return(
        <div>
         <br/><br/>   
        <div className='login-section container-box'>
            <h3 className="color-main">Baanthaii Admin Login</h3>
            <div className='from-group'>
                <form onSubmit = {event=>handleSubmit(event)}>
                    <div className='input-block'>
                        <input 
                            name='name'
                            type='text'
                            value={state.email}
                            placeholder='admin username'
                            onChange = {e=>handlChange(e)}
                            /> 
                    </div>
                    {state.errors.password === null ? null: <div className='err-alert'>{state.errors.email}</div>} 
                
                    <div className='input-block'>
                        <input 
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={state.password}
                            onChange={e=>handlChange(e)}
                            />
                    </div>
                    {state.errors.password === null ? null: <div className='err-alert'>{state.errors.password}</div>}
                    <button disabled={ state.button ? true : false} className={state.button ? 'btn-deactive' : 'btn-active'} >Submit</button>
                </form>
                {state.errors.invalid ? <div>{state.errors.invalid}</div>: null}
            </div>
        </div>
        </div>
    )
}
export default Login
