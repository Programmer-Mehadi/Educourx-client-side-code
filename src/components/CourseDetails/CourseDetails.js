import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaCertificate, FaChartBar, FaClock, FaFileExcel, FaLocationArrow, FaMoneyBill, FaPhone, FaSms, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef()
const CourseDetails = () => {
  
    const course = useLoaderData();

    const [authorInfo, setAuthorInfo] = useState({});

    const { _id, courseName, img, categoryName, authorName, rating, price, lessons, time, levels, about, authorId, categoryId, certificated, } = course;
    useEffect(() => {
        fetch(`https://edu-courx-server.vercel.app/author/${authorId}`)
            .then(res => res.json())
            .then(data => setAuthorInfo(data))
    }, [])
    return (
        <div className='py-4  max-w-[1440px] mx-auto'>

            <div ref={ref} className='w-[98%] mx-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' >
                <div className='col-span-1 md:col-span-2 lg:col-span-3 ' >
                    <h2 className='font-bold text-3xl pt-6 mt-6'>{courseName}</h2>
                    <Link to={`/courses/category/${categoryId}`}>
                        <div className="btn btn-primary mb-6 p-2 ">{categoryName}</div>
                    </Link>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className='btn btn-primary py-2 px-3 m-4' onClick={toPdf}>Download Pdf</button>}
                    </Pdf>
                    <img src={img} alt="" className=' pb-2 w-full h-[400px] rounded' />

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

                    <div className='grid grid-cols-3 justify-evenly rounded bg-gray-700 text-white py-5 my-6'>
                        <div className='flex flex-col justify-center align-middle items-center  border-r-4'>
                            <FaStar />
                            <p>Rating: {rating}</p>
                        </div>
                        <div className='flex flex-col justify-center align-middle items-center border-r-4'>
                            <FaMoneyBill />
                            <p>{price}</p>
                        </div>
                        <div className='flex flex-col justify-center align-middle items-center '>
                            <FaCertificate />
                            <p>{certificated ? 'Get Certificated' : "No Certificated"}</p>
                        </div>
                    </div>
                    <div className='py-4'>{
                        about
                    }
                    </div>
                    <div className='flex justify-center'>
                        <Link to={`/checkout/${_id}`} className=''>
                            <button className="btn btn-primary w-full rounded ">Get premium access.<FaAngleRight className='ml-3' /></button>
                        </Link>
                    </div>

                </div>
                <div>
                    <div>
                        <h2 className='py-5 bg-black text-white rounded-t text-center font-bold'>Author Information</h2>
                    </div>
                    <div className='bg-slate-700 text-white h-fit rounded-b'>
                        <div className='w-full pt-4'>
                            <div className="avatar w-full">
                                <div className="w-24 rounded-full ring ring-primary mx-auto ring-offset-base-100 ring-offset-2">
                                    <img src={authorInfo.authorImage} alt="" />
                                </div>
                            </div>
                        </div>

                        <h3 className='text-lg font-bold text-center'><span className='text-xl font-bold'>{authorName}</span></h3>
                        <h3 className='text-lg font-bold text-center pb-4'>Age: <span className='text-sm font-medium'>{authorInfo.age}</span></h3>

                        <div className='grid grid-cols-1 py-4 px-6 gap-4 border-t'>
                            <h3 className='text-lg font-bold flex gap-4'><FaSms /><span className='text-sm font-medium'>{authorInfo.email}</span></h3>
                            <h3 className='text-lg font-bold flex gap-4'><FaPhone /> <span className='text-sm font-medium'>{authorInfo.phone}</span></h3>
                            <h3 className='text-lg font-bold flex gap-4'>
                                <FaLocationArrow />
                                <span className='text-sm font-medium'>{authorInfo.address}</span></h3>
                        </div>
                        <h3 className='text-lg font-bold border-t border-b  py-4 px-6 rounded-b text-center'>Registered Date: <span className='text-sm font-medium'>{authorInfo.registered}</span></h3>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;