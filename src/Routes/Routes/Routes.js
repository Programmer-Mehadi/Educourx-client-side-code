import { createBrowserRouter } from "react-router-dom";
import Courses from '../../components/Courses/Courses';
import Home from '../../components/Home/Home';
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import Main from "../../layout/Main";
export  const routes = createBrowserRouter([
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
                element: <Courses></Courses>
            }, {
                path: '/login',
                element: <Login></Login>
            }
            , {
                path: '/signup',
                element:  <Signup></Signup>
            }
        ]
    }
])