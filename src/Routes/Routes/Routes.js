import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CheckOut from "../../components/CheckOut/CheckOut";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from '../../components/Courses/Courses';
import Faq from "../../components/Faq/Faq";
import Home from '../../components/Home/Home';
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import Main from "../../layout/Main";
import PrivateRoute from "./PrivateRoute";
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
                loader: async ({ params }) => {
                    return fetch(`https://edu-courx-server.vercel.app/course/${params.id}`);
                }
                ,
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/courses/category/:id',
                loader: async ({ params }) => {
                    return fetch(`https://edu-courx-server.vercel.app/courses/category/${params.id}`);
                }
                ,
                element: <Courses></Courses>
            },
            {
                path: '/checkout/:id',
                loader: async ({ params }) => {
                    return fetch(`https://edu-courx-server.vercel.app/course/${params.id}`);
                }
                ,
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }, {
                path: '/faq',
                element: <Faq></Faq>
            }
            , {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])