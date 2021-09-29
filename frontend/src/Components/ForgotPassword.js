import React from 'react'
import {useState} from 'react'
import axios from 'axios'
// import { useForm } from "react-hook-form";
import {Container, Typography,TextField, Button, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    container:{
        marginTop:'4rem',
        padding: "4rem 2rem",
        boxShadow:'0 0 7px #aeb0a9',
        
    },
    submit:{
        marginTop: '15px',
        float:"right"
    },
    CenterDiv:{
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        margin:'0 auto'
    }
}))


const ForgotPassword = ()=>{
    const classes = useStyles()
    let history = useHistory();

    const [email, setEmail] = useState(null)
    const [code, setCode] = useState(null)
    const [message, setMessage] = useState(null)
    const [error,setError] = useState(true)

    const ResetPassword = async()=>{
        // const res = await axios.post('https://baanthai.herokuapp.com/api/auth/reset-password/'+email,{
        //         email
        //     })
            // console.log(res)
            history.push("/reset-password/"+email);
        
    }


    const onSubmit = async(e)=>{
        e.preventDefault()
        try{

            const res = await axios.post('https://baanthai.herokuapp.com/api/auth/forgot-password',{
                email
            })
            console.log(res)
            setMessage(res.data.msg)
            setError(false)
            console.log('fdfd',res.status)
        }
        catch(err){
            setMessage('Email not found')
            console.log(err)
        }
        // if(email===null || email === ''){
        //     setError(true)
        //     setMessage('Email is required')
        // }else setError(false)
    }

    return(
        <div >
            <br/>
            <Container maxWidth="lg" className={classes.container}>
                <Typography 
                    variant="h5"
                    align='center'
                    style={{marginBottom:"2.2rem"}}
                >
                    Submit your email for reset password
                </Typography>
                <div className={classes.CenterDiv}>
                    <form
                        onSubmit={e=>onSubmit(e)}
                        noValidate
                        autoComplete="off"
                    >                                                                                                                                                                            
                        <TextField
                            className={classes.TextField}
                            id="email"
                            type="email"
                            label="email"
                            variant="outlined"
                            align="center"
                            error={error}
                            required
                            value={email} 
                            helperText={message}
                            onChange={e=>setEmail(e.target.value)}
                            style={{width:"320px"}}
                        />
                        <br/>
                
                        <Button className={classes.submit}  
                            variant="contained" 
                            type="submit"
                            color="primary">
                              Submit
                        </Button>
                    </form>
                    <br/>
                    
                   
                </div>
                <br />
                <br/>
                <div className="d-flex align-items-center justify-content-center">
                {
                        !error &&(
                            <Button className={classes.submit}  
                            onClick={()=>ResetPassword()}
                            variant="contained" 
                            type="submit"
                            color="primary">
                              Reset Password
                        </Button>
                        )
                    }
                </div>


                
            </Container>
        </div>
    )
}

export default ForgotPassword

