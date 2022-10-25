import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    const { img } = course;
    return (
        <div className='w-[98%] mx-auto py-10'>
            <img src={img} alt="" className='w-full h-72 '/>
        </div>
    );
};

export default CourseDetails;