import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Signup = () => {
    const [error, setError] = useState(null);
    const [authError, setAuthError] = useState(null);
    const {mode, user, providerLogin, createNewUser, updateUserInfo, logOut,userLogin} = useContext(AuthContext);
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
    const createUser = (event) => {
        event.preventDefault();
        setError(null);
        setAuthError(null);
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmpassword.value;
        const fullname = event.target.fullname.value;
        const photoURL = event.target.file.value;
        if (password.length >= 6) {
            if (password === confirmPassword) {
                createNewUser(email, password)
                    .then(result => {
                        console.log(result);
                        const profile = {
                            displayName: fullname,
                            photoURL: photoURL
                        }
                        updateUserInfo(profile)
                            .then(result => {
                                console.log(result);
                            })
                            .catch(error => {
                                console.log(error);
                            })
                        event.target.reset();
                        logOut()
                            .then(result => {
                                userLogin(email, password)
                                    .then(result => {
                                        navigate(from, { replace: true });
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    })
                            })
                            .catch(error => {
                                console.log(error);
                            });

                    })
                    .catch(error => {
                        console.log(error);
                        const erro = error.code;
                        console.log(erro);
                        if (erro === 'auth/email-already-in-use') {
                            setAuthError('Email already in use')
                        }
                    })
            }
            else {
                setError('Password and confirm password shold be same');
            }
        }
        else {
            setError('Password should be at least 6 characters');
        }
    }
    return (
        <div className=''>

            <div className="hero min-h-screen">
                <div className="hero-content grid grid-cols-6 w-11/12">
                    <div className="col-span-3 lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className={`col-span-3 card flex-shrink-0 w-full shadow-2xl  border-0 rounded ${ mode && 'text-white border-emerald-50 border-[1px]'}`}>
                        <form onSubmit={createUser} className="card-body ">
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="">Full Name</span>
                                </label>
                                <input type="text" placeholder="name" name='fullname' className="input input-bordered rounded" required />
                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered rounded" required />
                            </div>

                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="text-slate-900 input input-bordered rounded" required />
                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmpassword' placeholder="confirm password" className="text-slate-900 input input-bordered rounded" required />

                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="">Photo</span>
                                </label>
                                <input type="text" name='file' className="input input-bordered rounded" placeholder='user photo url' required />
                            </div>
                             
                            {
                                error && <p className='py-2 text-red-700'>{error}*</p>
                            }
                            {
                                authError && <p className='py-2 text-red-700'>{authError}*</p>
                            }
                            <div className="form-control mt-6 border-0">
                                <input type='submit' className="btn rounded btn-primary bg-[#000481]"
                                    value="Signup"
                                />
                            </div>
                            <div>
                                <p className='py-2'>Already have an account?<span className='ml-1 font-bold text-[#FB2576]' > <Link to='/login'>Login</Link></span></p>

                            </div>
                            <div>
                                <p onClick={handleGoogleSignin} className='btn bg-[#000439] hover:text-white border-2 rounded w-full'>
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

export default Signup;