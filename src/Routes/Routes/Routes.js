import { createBrowserRouter } from "react-router-dom";
import Courses from '../../components/Courses/Courses';
import Home from '../../components/Home/Home';
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
            }
        ]
    }
])