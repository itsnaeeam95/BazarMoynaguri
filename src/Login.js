import React, { useState } from 'react'
import "./login.css";

const Login = () => {

    const [email, setEmail] = useState();
    const [password , setPassword] = useState();

    const emailHanhlar =(event)=>{
        setEmail(event.target.value);
    }

    const passwordHanlar =(event)=>{
        setPassword(event.target.value);
    }

    const subInHandlar =(event)=>{
        event.preventDefault();

        setEmail('');
        setPassword('');

        if(subInHandlar === 0){
            window.alert("Invalid SignIn");
            console.log("Invalid SignIn");
        }
        else{
         window.alert("Successfull SignIn");
         console.log("Invalid SignIn"); 
        }
    }

  return (
    <div className='search_main_section'>
        <div className='container0'>
            <div className='row res_padd'>
                <div className='main-center-div'>
                    <div className='top-border-div'>
                        <div className='login-form-area'>
                            <h2>Sign In</h2>
                            <div>
                                <input className='login-type' type="text" placeholder='Email or mobile no' 
                                value={email}
                                required
                                onChange={emailHanhlar}
                                name=''/>
                                <div className='clearfix'>
                                </div>
                            </div>
                            <div className='password-in'>
                                <input id="password-field" className='login-type' type="password" 
                                    value={password}
                                    required
                                    onChange={passwordHanlar}
                                name="password" placeholder='password'/>
                                <div className='clearfix'>
                            </div>
                            <span className='field-icon fa fa-fw fa-eye toggle-password' toggle="#password-field">
                            </span>
                            </div>
                                <div className='remmber-area'>
                                    <label className='list_checkBox'>
                                        Remember me
                                        <input type="checkbox" name="text"/>
                                        <span className='list_checkmark'></span>
                                    </label>
                                    <a className='forgot-passwords' href='/'>Forgot Password?</a>
                                </div>
                                <button className='login-submit' 
                                type='submit' 
                                onClick={subInHandlar}>Sign In</button>
                        </div>
                            <div className='or-area'>
                                <span>Or Continue with</span>
                            </div>
                            <div className='login-socials-area'>
                                <div className='socials-btns'>
                                    <a className='common-btns facebook-btn' href='/'>
                                        <img  src='./images/login-facebook.png' alt=''/>
                                        Facebook
                                    </a>
                                    <a className='common-btns google-btn' href='/'>
                                        <img  src='./images/login-google.png' alt=''/>
                                        Google
                                    </a>
                                </div>
                            </div>
                    </div>
                    <div className='bottom-account-div'>
                        <p>
                            Don't have an account?
                            <a href='./Signup.js'>Create Account</a> 
                        </p>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Login