import React from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProveiders';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    
    
    const [ disabled, setDisabled] = useState(true);
    
    const {signIn} = useContext(AuthContext);
    
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password);
        
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
              title: 'Login succesfull',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
        })
    }
    
    const handleValidateCaptcha = e =>{
        const user_captcha_value = e.target.value;
      if(validateCaptcha(user_captcha_value)){
        setDisabled(false)
      }
      else{
        setDisabled(true)
      }
    }
    
    
    return (
       <>
       <Helmet><title>Bristo Boss | login</title> 
      </Helmet>
        <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100 md:w-1/2">
            
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                < LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidateCaptcha}  type="text" name="captcha"  placeholder="type the captcha" className="input input-bordered" />
                <button className="mt-2 btn btn-outline btn-xs">Validate</button>
              </div>
              
              <div  className="mt-6 form-control">
                <input disabled={disabled} type="submit" value="Login" className='btn-primary btn' />
              </div>
            </form>
            <p><small>New Here? <Link to='/signup'>Create an account</Link></small></p>
          </div>
        </div>
      </div>
       </>
    );
};

export default Login;