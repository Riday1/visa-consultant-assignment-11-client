import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllServices from "../Pages/AllServices/AllServices";
import Login from "../Pages/Login/Login";

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
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <div></div>
            },
            {
                path: '/all-services',
                loader: () => fetch(`http://localhost:5000/all-services`),
                element: <AllServices></AllServices>
            }
        ]
    }
])