import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Login = () => {
    const [error, setError] = useState(null);
    const { user, providerLogin, userLogin } = useContext(AuthContext);
    
    const location = useLocation();
    const from = location?.state?.form?.pathname || '/';
    const navigate = useNavigate();
    if (user && user.uid) {
        return <Navigate to="/"></Navigate>
    }
    const handleGoogleSignin = () => {
        const provider = new GoogleAuthProvider();
        providerLogin(provider)
            .then(result => {
                console.log(result);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubSignin = () => {
        const provider = new GithubAuthProvider();
        providerLogin(provider)
            .then(result => {
                console.log(result);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }
    const login = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        userLogin(email, password)
            .then(result => {
                console.log(result);
                event.target.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorText = error.code;
                console.log(error.code);
                if ('auth/user-not-found' === errorText) {
                    setError('No user found');
                }
                else if ('auth/wrong-password' === errorText) {
                    setError('Wrong password');
                }
            })
    }
    return (
        <div className=''>
            <div className="hero min-h-screen">
                <div className="hero-content grid grid-cols-6 w-11/12">
                    <div className="col-span-3 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="col-span-3 card flex-shrink-0 w-full shadow-2xl bg-base-100 border-0 rounded">
                        <form onSubmit={login} className="card-body ">
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" name='email' placeholder="email" className='input input-bordered rounded' />
                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                {error && <p className='font-bold py-2 rounded  text-[#ff0000]'>{error}*</p>}
                            </div>
                            <div className="form-control mt-6 border-0">
                                <input type="submit" className="btn rounded btn-primary bg-[#000481]" value="Login" />
                            </div>
                            <div>
                                <p className='py-2'>Don't have an account?<span className='ml-1 font-bold text-[#FB2576]' > <Link to='/signup'>Sign up</Link></span></p>

                            </div>
                            <div>
                                <p onClick={handleGoogleSignin} className='btn  bg-[#000439] hover:text-white border-2 rounded w-full'>
                                    <span className='mr-2 '>
                                        <FaGoogle className='w-5 h-5' />
                                    </span>
                                    Continue with Google</p>

                            </div>
                            <div>
                                <p onClick={handleGithubSignin} className='btn bg-[#000439] hover:text-white border-2 rounded w-full'>   <span className='mr-2 '>
                                    <FaGithub className='w-5 h-5' />
                                </span> Continue with Github</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;