import React, { useEffect, useRef, useState } from 'react';
import { FaAngleRight, FaCertificate, FaChartBar, FaClock, FaFileExcel, FaLocationArrow, FaMoneyBill, FaPhone, FaSms, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const ref = useRef()
    const course = useLoaderData();

    const [authorInfo, setAuthorInfo] = useState({});

    const { _id, courseName, img, categoryName, authorName, rating, price, lessons, time, levels, about, authorId, categoryId, certificated, } = course;
    useEffect(() => {
        fetch(`https://edu-courx-server.vercel.app/author/${authorId}`)
            .then(res => res.json())
            .then(data => setAuthorInfo(data))
    }, [])
    return (
        <div className='py-10  max-w-[1440px] mx-auto'>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref} className='w-[98%] mx-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' >
                <div className='col-span-1 md:col-span-2 lg:col-span-3 ' >
                    <h2 className='font-bold text-3xl pt-6 mt-6'>{courseName}</h2>
                    <Link to={`/courses/category/${categoryId}`}>
                        <div className="badge badge-primary mb-6 ">{categoryName}</div>
                    </Link>
                    <img src={img} alt="" className='w-full h-[400px] rounded' />

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
                    <div className='py-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione debitis similique, sunt quia ducimus illum consectetur exercitationem ad sequi quasi distinctio eum, atque obcaecati optio ut porro aperiam. Rerum explicabo facere reiciendis itaque placeat quas eligendi dolores consequatur accusantium eos adipisci aliquid perspiciatis recusandae, quis voluptatum ad sequi. Recusandae eum libero rerum laboriosam earum pariatur accusantium quaerat eveniet, esse, repellat amet enim voluptatum eius sapiente, sit laborum corrupti corporis quibusdam aut magnam ratione! Eius placeat dignissimos impedit provident illum architecto expedita vitae deserunt maxime odit tenetur facere iure sequi molestiae perspiciatis tempore accusamus aut quos itaque atque, in, accusantium distinctio sint? Ullam similique dolorem tempore tempora doloribus fuga molestias porro quas nisi mollitia doloremque assumenda modi nobis laborum omnis aut, voluptate rerum adipisci sapiente ex natus consectetur, voluptatum labore ipsa. Quibusdam delectus voluptatem eos minima saepe natus sunt mollitia porro voluptatum ea, nesciunt quidem eius odit sequi ducimus. Perspiciatis fuga autem facere amet similique eius delectus excepturi rem, ab iusto. Quae impedit ex reprehenderit, fugit vitae animi iste? Consequatur incidunt, quasi quos at totam voluptate rem dolores, deleniti voluptatum autem modi temporibus nobis beatae porro! Sunt reiciendis possimus tempore, voluptate officia officiis, earum rerum esse deserunt corporis, quos architecto suscipit! Ratione, sapiente dolores asperiores quisquam expedita maiores earum minima ad explicabo aperiam quas ullam soluta eum officiis suscipit dicta similique! Labore accusamus, officiis a deleniti sapiente, tenetur nostrum impedit aspernatur minus dolores amet dicta voluptate. Maiores eius nemo omnis quod iste dolorum veniam rerum, laborum eligendi. Debitis eos voluptatum officia inventore quaerat dignissimos molestias consequatur unde tenetur, eius recusandae facere omnis ipsa rerum id explicabo sit sint amet odio itaque, mollitia natus veritatis, repudiandae cupiditate! Esse rerum alias doloribus adipisci eius maiores ratione asperiores repellat nesciunt atque cumque, fugiat voluptatibus odit. Facilis voluptatibus qui veniam ratione nobis aliquam. Facilis porro doloribus iusto aperiam, similique odit tempore beatae sint architecto, aliquam fuga voluptas aspernatur corrupti error quae atque neque ad harum accusantium, excepturi velit. Veniam quisquam reprehenderit dolore! Adipisci quas quibusdam aut voluptate, explicabo, et omnis cumque nulla aliquid ea, in repellendus. Porro aliquid beatae nesciunt quia neque enim odio saepe temporibus adipisci, dignissimos pariatur unde cumque nihil alias consequuntur nemo facere assumenda atque ab ullam fugit eos ipsam suscipit ratione. Sunt voluptas harum dolore et itaque eaque fuga laborum nemo eos ratione possimus error eligendi tempore quis totam laboriosam porro, architecto aut eveniet aspernatur non beatae. Tempora ab nihil eaque molestias assumenda, voluptates voluptas perferendis tempore ullam provident excepturi culpa iure consequatur est ipsam quidem officiis sed consequuntur eligendi error nam voluptate quas ipsum quod? Natus nihil magnam sed repellendus totam possimus minus. Similique, impedit? Veniam necessitatibus aut nisi eligendi. Reprehenderit totam iure sint sed adipisci quos molestias! Quae error eos placeat vitae deleniti aliquid minus magnam laborum animi repellendus quidem sit repudiandae, quasi optio quam nemo delectus a officiis nihil voluptatum totam eum labore dolorum. Et ut dolore porro quod, animi nam dolores aspernatur. Fugit voluptatem temporibus mollitia et, nostrum deserunt nisi nesciunt itaque corrupti unde? Fuga, saepe dicta.
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
                                    <img src={authorInfo.authorImage} />
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