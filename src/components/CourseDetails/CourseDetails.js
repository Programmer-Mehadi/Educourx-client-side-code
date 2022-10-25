import React, { useContext } from 'react';
import { FaAngleRight, FaChartBar, FaClock, FaFileExcel, FaMoneyBill, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const CourseDetails = () => {
    const course = useLoaderData();
    const { darkMode } = useContext(AuthContext);
    const { id, courseName, img, categoryName, authorName, rating, price, lessons, time, levels } = course;
    return (
        <div className='py-10  max-w-[1440px] mx-auto'>
            <div className='w-[98%] mx-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='col-span-1 md:col-span-2 lg:col-span-3'>
                    <img src={img} alt="" className='w-full h-[400px] rounded' />
                    <h2 className='font-bold text-3xl py-6 my-6'>{courseName}</h2>
                    <div className='grid grid-cols-3 justify-evenly rounded bg-gray-700 text-white py-5'>
                        <div className='flex flex-col justify-center align-middle items-center'>
                            <FaClock />
                            <p>{time}</p>
                        </div>
                        <div className='flex flex-col justify-center align-middle items-center border-x-4'>
                            <FaChartBar />
                            <p>{levels}</p>
                        </div>
                        <div className='flex flex-col justify-center align-middle items-center'>
                            <FaFileExcel />
                            <p>{lessons} Lessons</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 justify-evenly rounded bg-gray-700 text-white py-5 my-6'>
                        <div className='flex flex-col justify-center align-middle items-center border-r-4 '>
                            <FaStar />
                            <p>Rating: {rating}</p>
                        </div>
                        <div className='flex flex-col justify-center align-middle items-center '>
                            <FaMoneyBill />
                            <p>{price}</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Link to={`/checkout/${id}`} className=''>
                            <button className="btn btn-primary w-full rounded ">Get premium access.<FaAngleRight className='ml-3' /></button>
                        </Link>
                    </div>

                </div>
                <div className='bg-[#000481] p-6 text-white h-fit rounded'>
                    <p className='text-xl font-bold'>Category: <span className='text-lg font-medium'>{categoryName}</span></p>
                    <h3 className='text-xl font-bold'>Author Name: <span className='text-lg font-medium'>{authorName}</span></h3>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;