
import axios from 'axios'
import {validateEmail, validatePassword} from './validate'
import './Login.css'


import {
    Grid,
    Icon,
    IconButton,
    InputAdornment
  } from "@material-ui/core";
  import Button from "@material-ui/core/Button";
  import Card from "@material-ui/core/Card";
  import CardActions from "@material-ui/core/CardActions";
  import CardContent from "@material-ui/core/CardContent";
  import TextField from "@material-ui/core/TextField";
  import Typography from "@material-ui/core/Typography";
  import { Visibility, VisibilityOff } from "@material-ui/icons";
  import React, { useState } from "react";
  import { useForm } from "react-hook-form";
  import { Link, useHistory } from "react-router-dom";
  import { makeStyles } from '@material-ui/core'
  import {Container} from "@material-ui/core"
  import {useParams} from "react-router-dom";


  const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 1000,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2),
        boxShadow: '1px 1px 5px #ccc',
      },
      error: {
        verticalAlign: 'middle'
      },
      headline: {
        fontWeight: 700,
        textAlign: 'center',
        paddingTop: '30px',
      },
      subheadline: {
        fontWeight: 500,
        textAlign: 'center',
        paddingTop: '10px',
        color: '#ccc'
      },
      title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
      },
      textField: {
        // margin: '0 2%',
        width: 300,
        border: '#ccc',
        width: '95%',
        height: '45px',
      },
      submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2),
        border: '1px solid #00756A',
        fontWeight: 500,
        width:'250px',
        '&:hover': {
          border: '1px solid #00756A',
          backgroundColor: '#fff',
          color: '#000',
          fontWeight: 500,
        }
      },

}));

const Login = (props)=>{
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showCPassword);
    
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();

    
    const [state, setState] = useState({
            email:'', 
            password:'', 
            errors:{
                email:'',
                password: '',
                invalid:''
            },
            button:false
        })
    
    const onSubmit = (data) =>{
        console.log(data)
        submit(data.email,data.password);
    }
    const submit =async (email , password)=>{
        try{
            const {data} = await axios.post('https://baanthai.herokuapp.com/api/auth',{
                email,
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
    return(
        <div>
         <br/><br/>   
        <div className='login-section container-box'>
            <h3 className="color-main">Login To Baanthaii</h3>
            <div className='from-group'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-block'>
                        <TextField
                            id="email"
                            {...register("email", {
                              required: "email is required",
                              validate: (value) =>
                                value.length>=6 || "Password length must be greater than or equal 6"
                            })}
                            name="email"
                            label="Email or phone*"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                            style={{width:"320px"}}
                        />
                        <br/>
                        <br/>
                    </div>             
                    <div className='input-block'>
                        <TextField
                            id="password"
                            {...register("password", {
                              required: "Password is required",
                              validate: (value) =>
                                value.length>=6 || "Password length must be greater than or equal 6"
                            })}
                            name="password"
                            type={showPassword ? "text" : "password"}
                            label="Password*"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                            style={{width:"320px"}}
                            InputProps={{
                              // <-- This is where the toggle button is added.
                              endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                            ),
                        }}
                        />
                    </div>
                    {state.errors.password === null ? null: <div className='err-alert'>{state.errors.password}</div>}
                    <br/>
                    <br/>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        className={classes.submit}
                    >
                        SUBMIT
                    </Button>
                </form>
                {state.errors.invalid ? <div>{state.errors.invalid}</div>: null}
                <br/>
                <Link to="/forgot-password" className="" role="button">Forgot Password</Link>
            </div>
        </div>
        </div>
    )
}
export default Login
