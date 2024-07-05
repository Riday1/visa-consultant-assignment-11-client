import React from 'react';

const SingleReview = ({ review }) => {
    const { text, _id, name, img, ratings, service_id, service_title, ser_email, user_name } = review;
    return (
        <div className="max-w-md sm:mx-auto sm:text-center bg-gray-50 p-5">
            <p className="mb-3 text-lg text-gray-900">{text}</p>
            <div className="flex items-center justify-center">
                <img src={img} className='w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24' alt="" />
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">{name}</h6>

        </div>
    );
};

export default SingleReview;