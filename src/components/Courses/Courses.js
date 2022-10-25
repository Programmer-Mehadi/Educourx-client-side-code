import React from 'react';
import { FaAngleRight, FaChartBar, FaClock, FaFileExcel, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
const Courses = () => {

    const courses = useLoaderData()
    console.log(courses);
    return (
        <div>
            <div className='w-[98%] mx-auto py-14'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <div>
                        <SideBar />
                    </div>
                    <div className='col-span-3'>
                        <div className='grid grid-cols-3 gap-3'>
                            {
                                courses.map((course) =>
                                    <div className="card w-full rounded border-2 shadow" >
                                        <figure><img className='h-60 w-full' src={course.img} alt="car!" /></figure>
                                        <div className="card-body px-2">
                                            <p className='text-[#ff9800] flex gap-2 items-center'>{course.rating}<FaStar className='w-5 h-5' /> </p>
                                            <h2 className="card-title">{course.courseName}</h2>
                                            <div className='flex justify-between'>
                                                <div className='flex gap-1 items-center'>
                                                    <FaFileExcel />
                                                    <span>3 Lessons</span>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <FaClock />
                                                    <span>4 hours</span>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <FaChartBar />
                                                    <p>All Levels</p>
                                                </div>
                                            </div>

                                            <hr />
                                            <div>
                                                <div className='flex justify-between items-center'>
                                                    <div className="avatar flex items-center gap-1">
                                                        <div className="w-10 rounded-full">
                                                            <img src="https://placeimg.com/192/192/people" />
                                                        </div>
                                                        <p className>{course.authorName}</p>
                                                    </div>
                                                    <p className='text-right'>{course.price}</p>
                                                </div>
                                            </div>
                                            <div className="card-actions ">
                                                <button className="btn btn-primary w-full rounded ">View Details <FaAngleRight className='ml-3'/></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;