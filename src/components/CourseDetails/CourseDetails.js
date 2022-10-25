import React from 'react';
import { FaChartBar, FaClock, FaFileExcel, FaMoneyBill, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    const { courseName, img, categoryName, authorName, rating, price, lessons, time, levels } = course;
    return (
        <div className='py-10 bg-amber-50'>
            <div className='w-[98%] mx-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='col-span-1 md:col-span-2 lg:col-span-3'>
                    <img src={img} alt="" className='w-full h-[400px] ' />
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
                            <FaStar  />
                            <p>Rating: {rating}</p>
                        </div>
                        <div className='flex flex-col justify-center align-middle items-center '>
                            <FaMoneyBill/>
                            <p>{price}</p>
                        </div>
                    </div>

                </div>
                <div>
                    <p>Category: {categoryName}</p>
                    <h3>Author Name: {authorName}</h3>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;