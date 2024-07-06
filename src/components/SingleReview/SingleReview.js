import React from 'react';
import { FaStar } from "react-icons/fa6";



const SingleReview = ({ review }) => {
    const { text, _id, name, img, ratings, service_id, service_title, user_email, user_name } = review;
    const starArray = []
    for (let i = 1; i <= ratings; i++) {
        starArray.push(<FaStar className='ml-2' />)
    }
    return (
        <div className="w-[390px] sm:mx-auto sm:text-center bg-gray-50 p-5 shadow-md hover:scale-105 duration-200">
            <div className='h-[100px]'>
                <p className="mb-3 text-lg text-gray-600">{text.length > 100 ? text.slice(1, 100) + ('...see more') : text}</p>
            </div>
            <div className="flex items-center justify-center">
                <img src={img} className='w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24' alt="" />
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">{name}</h6>
            <div className='flex justify-center items-center my-2 text-yellow-300'>
                {
                    starArray?.map(star => star)
                }
            </div>
        </div>
    );




};

export default SingleReview;