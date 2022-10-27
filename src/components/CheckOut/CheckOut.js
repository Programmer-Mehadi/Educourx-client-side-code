import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const selectedCourse = useLoaderData();
  
    return (
        <div className='w-[98%] mx-auto'>
            <div>
                
            </div>
            <p>Check Out.</p>
            <p>{selectedCourse.price}</p>
        </div>
    );
};

export default CheckOut;