import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthorContext } from '../context/Context';

const Login = () => {

    const { singUp, loginProvider, passReset, emailVerify } = useContext(AuthorContext);
    const { register, handleSubmit, onBlur,formState: { errors } } = useForm();
    const googleProvider = new GoogleAuthProvider()
    const[loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handdleLogin = data => {
        setLoginError('')
        singUp(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true });
               
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    }

    const googleSingIn = () => {
        loginProvider(googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user)
                 //jwt token emplement utilitis folder work:
                // setAuthJwt(user)
                //navigate(from, { replace: true });
                
            })
            .catch(error => {
                console.error(error);
                 
            })
    }

   


    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handdleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input   type="text"
                            {...register("email", {
                                required: "Email Address is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format"
                                }
                            })}

                            className="input input-bordered w-full max-w-xs" ></input>
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input  type="password"
                            {...register("password", {
                                required: "Password required",
                                minLength: {
                                    value: 6,
                                    message: "password must be minmum length is 6"
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" ></input>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <div>
                            {
                                loginError && <p className='text-red-600'>{loginError}</p>
                            }
                        </div>
                        <label className="label"><span>Forget password  </span></label>
                        {/* //<button onClick={handlePassReset} className="btn btn-link ml-0"><small className='ml-0'>reset now</small></button>   */}
                    </div>
                    <input className='btn btn-outline btn-secondary w-full' value="Login" type="submit" />
                </form>

                <p>New to  Jobs Portal <Link className='text-secondary' to="/singup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={googleSingIn} className='btn btn-outline btn-secondary w-full'>CONTINUE WITH GOOGLE</button>
                 
            </div>
        </div>
    );
};

export default Login;