import React, { useEffect, useState } from 'react';
import SingleServiceCard from '../../../components/SingleServiceCard/SingleServiceCard';

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
            <div className=' my-20 grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 px-20'>

                {
                    services.map(service => <SingleServiceCard key={service._id} service={service}></SingleServiceCard>)
                }

            </div>
            <div className='flex items-center justify-center'>
                <button className='btn btn-primary btn-outline px-10 text-lg text-white'> see more</button>
            </div>
        </section>

    );
};

export default Services;