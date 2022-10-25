import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
const Login = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen bg-[#f5f7fe]">
                <div className="hero-content grid grid-cols-6 w-11/12">
                    <div className="col-span-3 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="col-span-3 card flex-shrink-0 w-full shadow-2xl bg-base-100 border-0 rounded">
                        <div className="card-body ">
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered rounded" />
                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered rounded" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 border-0">
                                <button className="btn rounded btn-primary bg-[#000481]">Login</button>
                            </div>
                            <div>
                                <p className='py-2'>Don't have an account?<span className='ml-1 font-bold text-[#FB2576]' >Sign up</span></p>
                            </div>
                            <div>
                                <p className='btn bg-white text-black hover:bg-[#000439] hover:text-white border-2 rounded w-full'>
                                    <span className='mr-2 '>
                                        <FaGoogle className='w-5 h-5' />
                                    </span>
                                    Continue with Google</p>

                            </div>
                            <div>
                                <p className='btn bg-white text-black hover:bg-[#000439] hover:text-white border-2 rounded w-full'>   <span className='mr-2 '>
                                    <FaGithub className='w-5 h-5' />
                                </span> Continue with Github</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;