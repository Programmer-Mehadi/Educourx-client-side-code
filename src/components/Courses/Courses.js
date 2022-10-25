import React from 'react';
const Courses = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <div>Sidebar</div>
                <div className='col-span-3'></div>
            </div>
        </div>
    );
};

export default Courses;