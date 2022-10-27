import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    const m = 'mehadi';
    return (
        <div>
            <div className={`home-main-container ${m} w-[98%] mx-auto grid grid-cols-1 md:grid-cols-2 py-10 min-h-[550px] items-center gap-8`}>
                <div className='top-section'>
                    <h2 className='font-extrabold text-4xl '>Best Learning<p className='text-[#6141b8] py-2'>Education Platform</p><p className='text-[#6a46cb]'>in The World</p></h2>
                    <p className='text-xl font-semibold py-2'>Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                    <div className='flex gap-4'>
                        {
                            !user?.uid && <Link to='/login'><button className='btn mt-3 rounded bg-[#000481]'>Join Free Now</button></Link>
                        }
                        <Link to='/courses'><button className='btn mt-3 rounded bg-white text-primary border-[1.5px] border-primary hover:text-white'>View all courses</button></Link>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img className='rounded w-full' src={`https://edpolicyinca.org/sites/default/files/styles/max_1300x1300/public/2021-06/learning_header.jpg?itok=9H9kMQIm`} alt="" />
                    </div>
                    

                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Home;