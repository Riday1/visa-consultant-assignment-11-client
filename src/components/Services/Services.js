import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleServiceCard from '../SingleServiceCard/SingleServiceCard';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <section className='my-20'>
            <div className='my-10'>
                <p className='text-gray-400 text-lg text-center font-bold my-4'>Service We Provide</p>
                <h1 className='text-6xl font-bold text-indigo-500 text-center'>Explore Our Services</h1>
            </div>
            <div className=' my-20 grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 px-20'>

                {
                    services.map(service => <SingleServiceCard key={service._id} service={service}></SingleServiceCard>)
                }

            </div>
            <div className='flex items-center justify-center'>
                <Link to='/all-services'><button className='btn btn-primary btn-outline px-10 text-lg text-white'> see more</button></Link>
            </div>
        </section>

    );
};

export default Services;