import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddService = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const servicePrice = form.servicePrice.value;
        const serviceRatings = form.serviceRatings.value;
        const serviceDescription = form.serviceDescription.value;


        const newService = {
            title: serviceName,
            img: serviceImage,
            price: servicePrice,
            ratings: serviceRatings,
            description: serviceDescription

        }


        fetch(`https://assignment-11-server-ashen.vercel.app/add-new-services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {

                if (data?.acknowledged) {
                    Swal.fire({
                        title: "Service Added",
                        icon: "success"
                    });
                    navigate(`/all-services`)
                    form.reset()
                }
            })

    }
    return (
        <div className='my-20'>
            <Helmet>
                <title>Add service - kopa visa consultant</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            {
                user ?

                    <>
                        <h1 className=' text-6xl font-bold text-indigo-500 text-center'>Add Service</h1>
                        <form onSubmit={handleSubmit} className='my-20'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                <input type="text" name='serviceName' placeholder="Service Name" className="input input-bordered text-lg py-8 w-full " />
                                <input type="text" name='serviceImage' placeholder="Service Image URL" className="input input-bordered text-lg py-8 w-full " />
                                <input type="text" name='servicePrice' placeholder="Service Price" className="input input-bordered text-lg py-8 w-full " />
                                <input type="text" name='serviceRatings' placeholder="serviceRatings" className="input input-bordered text-lg py-8 w-full " />

                            </div>
                            <>
                                <textarea className="textarea textarea-bordered w-full h-52 my-10" name='serviceDescription' placeholder="Service Description"></textarea>
                            </>
                            <div className='flex justify-center items-center'>
                                <button className='btn btn-primary text-white'>Add new service</button>
                            </div>
                        </form>
                    </>
                    :
                    <div className='h-screen flex justify-center items-center'>
                        <h1 className='text-2xl text-gray-600 text-center my-20'>Please <Link to='/login' className='text-indigo-500 font-bold'>login</Link> to add new service</h1>
                    </div>
            }
        </div >
    );
};

export default AddService;