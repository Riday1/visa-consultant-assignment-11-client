import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

const ServiceInfo = ({ serviceData }) => {
    const { _id, title, img, price, ratings, description } = serviceData;

    return (
        <div className='my-20'>
            {/* <p className='text-gray-400 text-lg text-center font-bold my-4'>Speciality of us</p> */}
            <h1 className=' text-6xl font-bold text-indigo-500 text-center'>Service Details</h1>
            <div className='grid grid-cols-2 gap-10 my-20'>
                <div>
                    <h1 className=' text-4xl font-bold text-indigo-500 text-center'>{title}</h1>
                    <p className='text-lg text-gray-500 mt-4'>{description}</p>
                    <div className='mt-4 space-y-2'>
                        <p className='text-lg font-bold text-indigo-500 flex items-center '><FaRegCircleCheck className='mr-4' />Price : ${price}</p>
                        <p className='text-lg font-bold text-indigo-500 flex items-center '><FaRegCircleCheck className='mr-4' />Ratings : ({ratings})</p>
                        <p className='text-lg font-bold text-indigo-500 flex items-center '><FaRegCircleCheck className='mr-4' />Quick Visa Processing</p>
                        <p className='text-lg font-bold text-indigo-500 flex items-center '><FaRegCircleCheck className='mr-4' />99% Visa Approval</p>

                    </div>
                </div>
                <div>
                    <img src={img} className='rounded-lg shadow-md' alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;