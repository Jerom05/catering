import axios from 'axios'
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

  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowCPassword = () => setShowCPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showCPassword);
    const handleMouseDownCPassword = () => setShowCPassword(!showCPassword);
    const [errorMessage, setErrorMessage] = useState(null);
    const [message, setMessage] = useState(null)
    const classes = useStyles();
  
    const history = useHistory();
        let { params } = useParams();
  
    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
      console.log(data);
      let res  = null
        try{
            res = await axios.post(`https://baanthai.herokuapp.com/api/auth/reset-password/${params}`,{
                password:data.password,
                code:data.code
            })
            setErrorMessage(null)
            setMessage(res.data.msg)
            console.log(res)
        }
        catch(err){
            setErrorMessage("Code does not match")
            console.log(err)
        }
    }

    return (
      <div>
        <br />
        <Card className={classes.card}>
            <Typography
                variant='h6'
                style={{marginTop:"2rem"}}
            >
                Reset your password
            </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent >
              <Grid container spacing={0}>
                <Grid item lg={6} xs={12} style={{margin:"0 auto"}}>
                  <br/>
                  <TextField
                    id="code"
                    {...register("code", {
                      required: "code is required"}
            
                    )}
                    name="code"
             
                    label="code*"
                    className={classes.textField}
                    variant="outlined"
                    error={Boolean(errors.password)} 
                  />
                  <br/>
                  <br/>
                  <br />
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
                  <br />
                  <br />
                  
                  {/* <TextField
                    id="Cpassword"
                    name="Cpassword"
                    {...register("Cpassword", {
                      required: "This field is required",
                      validate: (value) =>
                      value.Cpassword === value.password || "The passwords do not match",
                    })}
                    type={showCPassword ? "text" : "password"}
                    label="Confirm Password*"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    error={Boolean(errors.Cpassword)}
                    helperText={errors.Cpassword?.message}
                    InputProps={{
                      // <-- This is where the toggle button is added.
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowCPassword}
                            onMouseDown={handleMouseDownCPassword}
                          >
                            {showCPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  /> */}
                  <br />
                </Grid>
              </Grid>

                {errorMessage ? (
                <Typography component="p" color="error">
                  {errorMessage}
                </Typography>) 
                    : 
                    <Typography component="p" color="primary">
                        {message}
                    </Typography>
             }

            </CardContent>
            <CardActions>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                className={classes.submit}
              >
                SUBMIT
              </Button>
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }