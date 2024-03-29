import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import {Link, useLocation, useNavigate,} from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const Login = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    console.log(token)
    let signInError; 
    const navigate = useNavigate()
    const location = useLocation() 
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if(token){
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    if(loading){
        return <Loading></Loading>
    }

    if(error){
        signInError = <p className='text-red-500 mb-2'><small>{error?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card w-80 lg:w-96 bg-base-100 shadow-md" data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="800">
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="input input-bordered w-full max-w-xs" 
                            {...register("email", {
                                required: {
                                  value: true,
                                  message: 'Email is required'  
                                },
                                pattern: {
                                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                  message: 'provide a valid email..'
                                }
                              })}
                        />
                        <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Your Password" 
                            className="input input-bordered w-full max-w-xs" 
                            {...register("password", {
                                required: {
                                  value: true,
                                  message: 'Password is required'  
                                },
                                minLength: {
                                  value: 6,
                                  message: 'Must be 6 characters longer'
                                }
                              })}
                        />
                        <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}
                    <input className='btn w-full uppercase font-bold max-w-xs' type="submit" value="Login"  />
                    </form>
                    <div className="divider">OR</div>
                    <p><small className='font-bold'>New to Doctors portal? <Link to='/signup' className='text-secondary'>Create new Account</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;