import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const AddReview = () => {

    const { user } = useContext(AuthContext);
    const { title, _id } = useLoaderData();



    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const reviewText = form.review.value;
        const ratings = form.ratings.value;

        const review = {
            text: reviewText,
            name: user?.displayName,
            img: user?.photoURL,
            ratings: ratings,
            service_id: _id,
            service_title: title,
            user_email: user?.email,
        }

        console.log(review)
        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
            })

    }



    return (
        <div className='my-20'>

            <h1 className=' text-6xl font-bold text-indigo-500 text-center'>Your Feedback</h1>
            <form onSubmit={handleSubmit} className='my-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <input type="text" name='name' placeholder="name" defaultValue={user?.displayName} className="input input-bordered text-lg py-8 w-full " />
                    <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered text-lg py-8 w-full " />
                    <input type="text" name='serviceName' placeholder="service name" defaultValue={title} className="input input-bordered text-lg py-8 w-full " />
                    <input type="text" name='serviceId' placeholder="service id" defaultValue={_id} className="input input-bordered text-lg py-8 w-full " />
                    <input type="text" name='ratings' placeholder="Ratings " className="input input-bordered text-lg py-8 w-full " />
                </div>
                <>
                    <textarea className="textarea textarea-bordered w-full h-52 my-10" name='review' placeholder="Bio"></textarea>
                </>
                <div className='flex justify-center items-center'>
                    <button className='btn btn-primary text-white'>Upload Review</button>
                </div>
            </form>
        </div >
    );
};

export default AddReview;