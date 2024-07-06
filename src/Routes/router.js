import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllServices from "../Pages/AllServices/AllServices";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import { myLoader } from "../utilities/myLoader";
import AddReview from "../Pages/AddReview/AddReview";
import MyReviews from "../Pages/MyReviews/MyReviews";
import UpdateReview from "../components/UpdateReview/UpdateReview";
import PrivateRoute from "../context/PrivateRoute/PrivateRoute";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import Login1 from "../Pages/Login1/Login1";
import ContactUs from "../Pages/ContactUs/ContactUs";
import UserProfile from "../Pages/UserProfile/UserProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/update-review/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`),
                element: <UpdateReview></UpdateReview>
            },
            {
                path: '/add-services',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login1',
                element: <Login1></Login1>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            }

        ],
        errorElement: <ErrorPage></ErrorPage>,
    }
])