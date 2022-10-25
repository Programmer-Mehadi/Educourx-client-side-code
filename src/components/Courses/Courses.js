import React from 'react';
import SideBar from '../SideBar/SideBar';
const Courses = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto py-14'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <div>
                        <SideBar/>
                    </div>
                    <div className='col-span-3'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione delectus nulla blanditiis, ipsa labore ab recusandae omnis architecto, voluptatum nostrum, ipsum est tempore nesciunt expedita consequatur ullam non itaque voluptatibus enim perferendis consequuntur adipisci eligendi iure velit? Quisquam sed officia vero, ea laudantium quos voluptatum velit maiores reprehenderit tempora blanditiis dicta similique cumque adipisci fugit obcaecati rem aliquid tenetur deleniti odit? Itaque praesentium hic vel magni assumenda labore culpa repellendus rem nesciunt exercitationem ipsum, cupiditate enim esse, impedit sed fugit neque corporis sint vitae necessitatibus eveniet? Ut tempora iure consequatur quos eveniet, optio molestias praesentium voluptas corrupti dolores impedit quidem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;