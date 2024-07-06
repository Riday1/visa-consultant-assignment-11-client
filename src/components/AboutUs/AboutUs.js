import React from 'react';
import sideImage from '../../photos/images/side_image_1.jpg'
import { FaRegCircleCheck } from "react-icons/fa6";
const AboutUs = () => {
    return (
        <section className='px-20'>
            <p className='text-gray-400 text-lg text-center font-bold my-4'>Speciality of us</p>
            <h1 className=' text-6xl font-bold text-indigo-500 text-center'>Reasons To Choose Us</h1>
            <div className='grid gird-cols-1 md:grid-cols-2 gap-10 my-20'>
                <div>
                    <p className='text-md text-gray-500 mt-4'>Need help with your visa application? Our experienced team  is here to assist! Specializing in medical, tourist, student, migration, family, business, and visit visas, we ensure a smooth and stress-free process. Trust us to handle your visa needs with expertise and care.</p>
                    <div className='mt-4 space-y-2'>
                        <p className='text-lg font-bold text-indigo-500 flex items-center '><FaRegCircleCheck className='mr-4' />Quick Visa Processing</p>
                        <p className='text-lg font-bold text-indigo-500 flex items-center '><FaRegCircleCheck className='mr-4' />99% Visa Approval</p>
                        <p className='text-lg font-bold text-indigo-500 flex items-center '><FaRegCircleCheck className='mr-4' />Cost Effective</p>
                        <p className='text-lg font-bold text-indigo-500 flex items-center '><FaRegCircleCheck className='mr-4' />Dedicated Support Team</p>
                        <p className='text-lg font-bold text-indigo-500 flex items-center '><FaRegCircleCheck className='mr-4' />Direct Interview</p>
                    </div>
                </div>
                <div>
                    <img src={sideImage} className='rounded-lg shadow-md' alt="" />
                </div>

            </div>
        </section>
    );
};

export default AboutUs;