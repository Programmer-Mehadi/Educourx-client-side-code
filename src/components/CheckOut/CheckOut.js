import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const selectedCourse = useLoaderData();
    const { _id, courseName, img, categoryName, authorName, rating, price, lessons, time, levels, about, authorId, categoryId, certificated, } = selectedCourse;
    return (
        <div className='w-[98%] mx-auto'>
            <div className='max-w-[500px] mx-auto border-[2px] border-blue-800 p-4 rounded my-5 text-center bg-slate-500 text-white'>
                <p className='font-bold text-3xl py-8 bg-[#000481] rounded mb-5 '>Checkout</p>
                <div>
                    <p className='text-2xl font-bold'>{courseName}</p>
                    <p className='text-xl font-semibold   py-2'>{price}</p>
                    <img className='h-[250px] w-[300px] mx-auto block rounded' src={img} alt="" />
                    <button className='btn rounded btn-primary my-4'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;