import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const selectedCourse = useLoaderData();
    const { darkMode } = useContext(AuthContext);
    return (
        <div className={darkMode ? ' bg-black text-white w-[98%] mx-auto' : 'w-[98%] mx-auto'}>
            <div>
                
            </div>
            <p>Check Out.</p>
            <p>{selectedCourse.price}</p>
        </div>
    );
};

export default CheckOut;