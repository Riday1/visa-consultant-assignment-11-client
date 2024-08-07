import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddReview = () => {

    const { user } = useContext(AuthContext);
    const { title, _id } = useLoaderData();
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const reviewText = form.review.value;
        const ratings = form.ratings.value;
        console.log(typeof ratingss)
        const review = {
            text: reviewText,
            name: user?.displayName,
            img: user?.photoURL,
            ratings: ratings,
            service_id: _id,
            service_title: title,
            user_email: user?.email,
        }

        fetch(`https://assignment-11-server-ashen.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    Swal.fire({
                        title: "Review Added",
                        icon: "success"
                    });
                    navigate(`/services/${_id}`)
                    form.reset()
                }
            })

    }



    return (
        <div className='my-20'>
            <Helmet>
                <title>Add review - kopa visa consultant</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            {
                user ?

                    <>
                        <h1 className=' text-6xl font-bold text-indigo-500 text-center'>Your Feedback</h1>
                        <form onSubmit={handleSubmit} className='my-20'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                <input type="text" name='name' placeholder="name" defaultValue={user?.displayName} className="input input-bordered text-lg py-8 w-full " />
                                <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered text-lg py-8 w-full " />
                                <input type="text" name='serviceName' placeholder="service name" defaultValue={title} className="input input-bordered text-lg py-8 w-full " />
                                <input type="text" name='serviceId' placeholder="service id" defaultValue={_id} className="input input-bordered text-lg py-8 w-full " />
                                <select name="ratings" id="" className='w-full rounded-lg border-[1px] border-gray-300 py-5' placeholder="Ratings">
                                    <option value="">Ratings</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <>
                                <textarea className="textarea textarea-bordered w-full h-52 my-10" name='review' placeholder="Bio"></textarea>
                            </>
                            <div className='flex justify-center items-center'>
                                <button className='btn btn-primary text-white'>Upload Review</button>
                            </div>
                        </form>
                    </>
                    :
                    <div className='h-screen flex justify-center items-center'>
                        <h1 className='text-2xl text-gray-600 text-center my-20'>Please <Link to='/login' className='text-indigo-500 font-bold'>login</Link> to add review</h1>
                    </div>
            }
        </div >
    );
};

export default AddReview;