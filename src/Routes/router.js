import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <div></div>
            },
            {
                path: '/register',
                element: <div></div>
            },
            {
                path: '/services',
                element: <div></div>
            }
        ]
    }
])