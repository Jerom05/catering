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

// import {useState} from 'react'
import axios from 'axios'
import './Register.css'

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

const Register = ()=>{
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showCPassword);
    
    const [state, setState] = useState({
        name:'',
        email:'',
        password:'',
        address:'',
        phone:'',
        errors:{
            email:'',
            password: '',
            invalid:''
        },
        button:true
    })
    const classes = useStyles();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
    
    const onSubmit = (data) =>{
      
        console.log(data)
        submit(data);
    }
    const submit =async (data)=>{
        try{
            const res = await axios.post('https://baanthai.herokuapp.com/api/user',{
                email:data.email,
                password:data.password,
                name:data.name,
                phone: data.phone,
                address: data.address,
                
            })
            localStorage.setItem("token",res.headers['x-auth-token'])
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
        <div className='container-box login-section'  id='register'>
            <h3>Registration</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-block'>
                        <TextField
                            id="name"
                            {...register("name", {
                              required: "name is required",
                            })}
                            name="name"
                            label="Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message}
                            style={{width:"320px"}}
                        />
                        <br/>
                        <br/>
                    </div>             
                    <div className='input-block'>
                        <TextField
                            id="email"
                            {...register("email")}
                            name="email"
                            label="Email*"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            style={{width:"320px"}}
                        />
                        <br/>
                        <br/>
                    </div>                                     
                    {/* <div className='input-block'>
                        <TextField
                            id="email"
                            {...register("email", {
                              required: "email is required",
                            })}
                            name="email"
                            label="Email*"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                            style={{width:"320px"}}
                        />
                        <br/>
                        <br/>
                    </div>                                      */}
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
                        <br/>
                        <br/>
                    </div> 
                    <div className='input-block'>
                        <TextField
                            id="phone"
                            {...register("phone", {
                              required: "phone is required",
                             })}
                            name="phone"
                            label="Phone*"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            error={Boolean(errors.phone)}
                            helperText={errors.phone?.message}
                            style={{width:"320px"}}
                        />
                        <br/>
                        <br/>
                    </div> 
                    <div className='input-block'>
                        <TextField
                            id="address"
                            {...register("address", {
                              required: "address is required",
                             })}
                            name="address"
                            label="Address*"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            error={Boolean(errors.address)}
                            helperText={errors.address?.message}
                            style={{width:"320px"}}
                        />
                        <br/>
                    </div> 
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
        </div>
        </div>
    )
}

export default Register



