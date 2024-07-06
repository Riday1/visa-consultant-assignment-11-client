import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MySingleReview from '../../components/MySingleReview/MySingleReview';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyReviews = () => {

    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`https://assignment-11-server-ashen.vercel.app/my-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('review-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                setMyReviews(data)
                // console.log(data)
            })
    }, [user?.email, logOut])


    // for delete review
    const handleDelete = (id) => {
        fetch(`https://assignment-11-server-ashen.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    Swal.fire({
                        title: "Review Delete",
                        icon: "success"
                    });
                    const remaining = myReviews.filter(rvw => rvw._id !== id)
                    setMyReviews(remaining)
                }
            })
    }
    return (
        <div className='my-20'>
            <Helmet>
                <title>My review - kopa visa consultant</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            {
                myReviews.length > 0 ?

                    <div className='h-screen'>
                        <h1 className=' text-6xl font-bold text-indigo-500 text-center my-10'>Your Reviews</h1>
                        <div className="overflow-x-auto">

                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>SL.</th>
                                        <th>User Name</th>
                                        <th>Review Text</th>
                                        <th>Ratings</th>
                                        <th>Service Name</th>
                                        <th>Service Id</th>
                                        <th>User Email</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myReviews.map(review => <MySingleReview key={review._id} review={review} handleDelete={handleDelete}></MySingleReview>)

                                    }



                                </tbody>
                            </table>
                        </div>
                    </div>

                    :
                    <div className='h-screen flex justify-center items-center'>
                        <h1 className='text-2xl text-gray-600 text-center my-20'>No review has found</h1>
                    </div>
            }


        </div >
    );
};

export default MyReviews;