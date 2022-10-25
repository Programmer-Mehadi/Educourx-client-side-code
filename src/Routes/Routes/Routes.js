import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from '../../components/Courses/Courses';
import Home from '../../components/Home/Home';
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import Main from "../../layout/Main";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: async () => {
                    return fetch('https://edu-courx-server.vercel.app/courses');
                   }
                ,
                element: <Courses></Courses>
            }, {
                path: '/login',
                element: <Login></Login>
            }
            , {
                path: '/signup',
                element: <Signup></Signup>
            }, {
                path: '/course/:id',
                loader: async ({params}) => {
                    return fetch(`https://edu-courx-server.vercel.app/course/${params.id}`);
                   }
                ,
                element:<CourseDetails></CourseDetails>
            }
        ]
    }
])