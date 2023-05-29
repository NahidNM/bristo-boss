import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProveiders';
import { Result } from 'postcss';


const SignUp = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const {createUser} = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };
   
    return (
        <>
        <Helmet><title>Bristo Boss | signup</title> 
      </Helmet>
        <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100 md:w-1/2">
            
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                {errors.name && <span className='text-red-600'>Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span>Email field is required</span>}
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true, minLength: 6,
                     maxLength: 20,
                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                      })} name="password" placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less than 20 characters</p>}
                {errors.password?.type === 'pattern' && <p role="alert">Password must have one number, one upper case, one lower case  ane one special character</p>}
               
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              
              <div  className="mt-6 form-control">
                <input  type="submit" value="Sign up" className='btn-primary btn' />
              </div>
            </form>
            <p><small>Already have an account ? <Link to='/login'>Login</Link></small></p>
          </div>
        </div>
      </div>
        </>
    );
};

export default SignUp;