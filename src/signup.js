import React, { useState } from 'react'
import "./signup.css";

const Signup = () => {

        const [fullname, setFullname] = useState();
        const [email, setEmail] = useState();
        const [mobile, setMobile] = useState();
        const [password, setPassword] = useState();
        const [confirmp, setConfirmp] = useState();

       const nameHandlar =(event)=>{
            setFullname(event.target.value);
       }

       const emailHandlar =(event)=>{
           setEmail(event.target.value);
       }

       const mobileHanlar =(event)=>{
           setMobile(event.target.value);
       }

       const passwordHandlar =(event)=>{
           setPassword(event.target.value);
       }

       const confirmHandlar =(event)=>{
           setConfirmp(event.target.value);
       }

       const submitHandlar =(event)=>{
           event.preventDefault();

           if(submitHandlar === 0){
               window.alert("unSuccessfull Signup");
               console.log("Invalid Signup");
           }
           else{
            window.alert("Successfull Signup");
            console.log("Invalid Signup"); 
           }

           setFullname('');
           setEmail('');
           setMobile('');
           setPassword('');
           setConfirmp('');
       }

  return (
    <div className='search_main_section'>
    <div className='container0'>
        <div className='row res_padd'>
            <div className='main-center-div'>
                <div className='top-border-div'>
                    <div className='login-form-area'>
                        <h2>Create Account</h2>
                        <div>
                            <input className='login-type' type="text" placeholder='Full name' 
                            value={fullname}
                            onChange={nameHandlar}
                             name=''/>
                            <div className='clearfix'>
                            </div>
                        </div>
                        <div>
                            <input className='login-type' type="text" placeholder='Email' 
                            value={email}
                            onChange={emailHandlar}
                            name=''/>
                            <div className='clearfix'>
                            </div>
                        </div>
                        <div>
                            <input className='login-type' type="text" placeholder='Mobile number' 
                                value={mobile}
                                onChange={mobileHanlar}
                            name=''/>
                            <div className='clearfix'>
                            </div>
                        </div>
                        <div className='password-in'>
                            <input id="password-field" className='login-type' type="password" 
                                value={password}
                                onChange={passwordHandlar}
                            name="password" placeholder=' password'/>
                            <div className='clearfix'>
                        </div>
                        <span className='field-icon fa fa-fw fa-eye toggle-password' toggle="#password-field">
                        </span>
                        </div>
                        <div className='password-in'>
                            <input id="password-field" className='login-type' type="password" 
                                value={confirmp}
                                onChange={confirmHandlar}
                            name="password" placeholder='Confirm password'/>
                            <div className='clearfix'>
                        </div>
                        <span className='field-icon fa fa-fw fa-eye toggle-password' toggle="#password-field">
                        </span>
                        </div>
                            <p>By clicking Sign In or Continue with Facebook or Google, you agree to all
                                Terms of Service and Privacy Policy
                            </p>
                            <button className='login-submit'
                                onClick={submitHandlar}
                            type='submit'>Sign up</button>
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
                        Already have an account?
                        <a href='/'>Login</a> 
                    </p>
                </div>
            </div>
         </div>
    </div>
</div>
  )
}

export default Signup;