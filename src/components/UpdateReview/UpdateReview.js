import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateReview = () => {
    const { user } = useContext(AuthContext);
    const { text, service_title, _id, ratings } = useLoaderData()
    const navigate = useNavigate()
    // console.log(useLoaderData())


    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target;
        const updateRatings = form.ratings.value;
        const updateReviewText = form.review.value;

        const updateData = {
            text: updateReviewText,
            ratings: updateRatings
        }


        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Review Update",
                        icon: "success"
                    });
                    navigate('/my-reviews')
                }
            })
    }
    return (
        <div className='my-20'>

            <h1 className=' text-6xl font-bold text-indigo-500 text-center'>Your Feedback</h1>
            <form onSubmit={handleSubmit} className='my-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <input type="text" name='name' placeholder="name" defaultValue={user?.displayName} className="input input-bordered text-lg py-8 w-full " />
                    <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered text-lg py-8 w-full " />
                    <input type="text" name='serviceName' placeholder="service name" defaultValue={service_title} className="input input-bordered text-lg py-8 w-full " />
                    <input type="text" name='serviceId' placeholder="service id" defaultValue={_id} className="input input-bordered text-lg py-8 w-full " />
                    <input type="text" name='ratings' placeholder="Ratings " defaultValue={ratings} className="input input-bordered text-lg py-8 w-full text-gray-400" />
                </div>
                <>
                    <textarea className="textarea textarea-bordered w-full h-52 my-10 text-gray-400" name='review' defaultValue={text} placeholder="Bio"></textarea>
                </>
                <div className='flex justify-center items-center'>
                    <button className='btn btn-primary text-white'>Update Review</button>
                </div>
            </form>
        </div >
    );
};

export default UpdateReview;