import { createBrowserRouter } from "react-router-dom";
import Courses from '../../components/Courses/Courses';
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
                element: <PrivateRoute><Courses/></PrivateRoute>
            }, {
                path: '/login',
                element: <Login></Login>
            }
            , {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])