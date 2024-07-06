import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';


const SingleServiceCard = ({ service }) => {
    const { _id, title, img, price, description, ratings } = service;
    return (
        <div className=" hover:scale-105 duration-200 card-compact bg-base-100 w-80 shadow-xl">
            {/* <figure>

            </figure> */}
            <PhotoProvider>
                <PhotoView src={img}>
                    <img
                        src={img}
                        alt="Shoes"
                        className='h-56' />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-indigo-600">{title}</h2>
                <p className='text-gray-500'>{description.length > 100 ? description.slice(0, 100) : ""} <span className='text-indigo-600'>see more...</span></p>
                <div className="flex justify-between my-4">
                    <p className='font-semibold text-indigo-500 text-xl'>Price : ${price}</p>
                    <span>ratings</span>
                </div>
                <Link to={`/services/${_id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default SingleServiceCard;