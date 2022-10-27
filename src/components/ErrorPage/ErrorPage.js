import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../../404.jpeg';
const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col justify-center py-8'>
                <img className='h-[400px] w-[70%] mx-auto' src={errorImage} alt="" />
                <button className='btn btn-primary rounded w-fit mx-auto'>
                    <Link to='/'>Go To Home Page</Link>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;