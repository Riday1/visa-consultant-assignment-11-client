import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllServices from "../Pages/AllServices/AllServices";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import { myLoader } from "../utilities/myLoader";
import AddReview from "../Pages/AddReview/AddReview";

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
                element: <Register></Register>
            },
            {
                path: '/all-services',
                loader: () => fetch(`http://localhost:5000/all-services`),
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => myLoader(params),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/add-review/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <AddReview></AddReview>
            }
        ]
    }
])