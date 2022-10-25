import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../educourx-logo.png';
const Navbar = () => {
    return (
        <>
            <div className='navbar-container max-w-[1440px] mx-auto bg-white text-[#140342] shadow-md'>
                <div className="navbar w-11/12 mx-auto py-2">
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
                            <ul className="menu menu-horizontal p-0">
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
                                <li>
                                    <Link to='/login'>Log in</Link>
                                </li>
                                <li>
                                    <Link to='/signup'>Sign up</Link>
                                </li>
                                <li>
                                    <p>Logout</p>
                                </li>
                                <div className="avatar my-auto">
                                    <div className="w-10 h-10 rounded-full">
                                        <img alt='avatar' src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <li>
                                    <p>Toggle</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Navbar;