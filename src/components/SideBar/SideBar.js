import React, { useEffect, useState } from 'react';

const SideBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://edu-courx-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);


    return (
        <div className='border border-black bg-[#000481] text-white rounded'>
            <h2 className='text-2xl text-center p-4 bg-[#262525] text-white text-bold'>Categories </h2>
            <ul className='p-4'>
            {
                categories.map(category => {
                    return <li className='text-xl text-semibold hover:underline' key={category.id}>{category.categoryName}</li>
                })
            }
            </ul>
           
        </div>
    );
};

export default SideBar;