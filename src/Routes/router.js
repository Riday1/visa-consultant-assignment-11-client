import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <div>home</div>
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