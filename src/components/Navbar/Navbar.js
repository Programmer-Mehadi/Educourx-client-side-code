import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { themeChange } from 'theme-change';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../educourx-logo.png';
const Navbar = () => {
    const { darkMode, user, logOut, setMode } = useContext(AuthContext);
    const logout = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    let btnValue = false;
    const handleDarkLightMode = (event) => {
        btnValue = event.target.checked;
        setMode(btnValue);
    }
    useEffect(() => {
        themeChange(false)
    },[btnValue])
    return (
        <>
            <div className='navbar-container max-w-[1440px] mx-auto   text-[#140342] '>
                <div className="navbar w-[98%] mx-auto py-2">
                    <div className="navbar-start">
                        <Link to='/' className=" normal-case text-2xl"><img className='h-14 rounded' src={logo} alt="siteImage" /></Link>
                    </div>
                    <div className='navbar-end'>
                        {/* mobile navabr */}
                        <div className=" dropdown w-fit md:hidden text-black">

                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow border-2 border-slate-800 bg-blue-800 text-white w-[152px] left-[-100px] top-[45px] rounded">
                                <li className=''>
                                    <Link to='/' >Home</Link>

                                </li>

                            </ul>
                            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                        {/* pc / laptop navabr */}
                        <div className="  hidden md:flex">
                            <ul className="menu menu-horizontal p-0 text-xl">
                                <li>
                                    <Link to='/' >Home</Link>
                                </li>
                                <li>
                                    <Link to='/courses' >Courses</Link>
                                </li>
                                <li>
                                    <Link to='/faq' >FAQ</Link>
                                </li>
                                <li>
                                    <Link to='/' >Blog</Link>
                                </li>
                                {user ? <>
                                    <li>
                                        <p onClick={logout}>Logout</p>
                                    </li>
                                    <div className="tooltip flex  tooltip-left my-auto" data-tip={user?.displayName}>
                                        <div className="avatar online my-auto">
                                            <div className="border-2 w-12 h-12 my-auto rounded-full">
                                                <img src={user?.photoURL} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                                    :
                                    <>
                                        <li>
                                            <Link to='/login'>Log in</Link>
                                        </li>
                                        <li>
                                            <Link to='/signup'>Sign up</Link>
                                        </li>
                                    </>
                                }
                                <form className='flex items-center ml-3'>
                                    
                                    <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
                                    <div className="form-control">
                                        <input type="checkbox" className="toggle toggle-primary" name='darklightbtn'   />
                                    </div>
                                    </button>
                                </form>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Navbar;