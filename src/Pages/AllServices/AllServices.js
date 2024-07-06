import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleServiceCard from '../../components/SingleServiceCard/SingleServiceCard';

const AllServices = () => {

    const allServices = useLoaderData()

    return (
        <section className='my-20'>
            <div className='my-10'>
                <p className='text-gray-400 text-lg text-center font-bold my-4'>Service We Provide</p>
                <h1 className='text-5xl font-bold text-indigo-500 text-center'>Explore Our All Services</h1>
            </div>
            <div className=' my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20'>

                {
                    allServices.map(service => <SingleServiceCard key={service._id} service={service}></SingleServiceCard>)
                }
            </div>

        </section>
    );
};

export default AllServices;