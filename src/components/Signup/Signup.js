import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Signup = () => {
    const { user, providerLogin, createNewUser } = useContext(AuthContext);
    const handleGoogleSignin = () => {
        const provider = new GoogleAuthProvider();
        providerLogin(provider)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubSignin = () => {
        const provider = new GithubAuthProvider();
        providerLogin(provider)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const createUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
        createNewUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className=''>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL} alt="" />
            <div className="hero min-h-screen bg-[#f5f7fe]">
                <div className="hero-content grid grid-cols-6 w-11/12">
                    <div className="col-span-3 lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="col-span-3 card flex-shrink-0 w-full shadow-2xl bg-base-100 border-0 rounded">
                        <form onSubmit={createUser} className="card-body ">
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered rounded" />
                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 border-0">
                                <input type='submit' className="btn rounded btn-primary bg-[#000481]"
                                    value="Signup"
                                />
                            </div>
                            <div>
                                <p  className='py-2'>Already have an account?<span className='ml-1 font-bold text-[#FB2576]' >Login</span></p>
                            </div>
                            <div>
                                <p onClick={handleGoogleSignin} className='btn bg-white text-black hover:bg-[#000439] hover:text-white border-2 rounded w-full'>
                                    <span className='mr-2 '>
                                        <FaGoogle className='w-5 h-5' />
                                    </span>
                                    Continue with Google</p>

                            </div>
                            <div>
                                <p onClick={handleGithubSignin} className='btn bg-white text-black hover:bg-[#000439] hover:text-white border-2 rounded w-full'>   <span className='mr-2 '>
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

export default Signup;