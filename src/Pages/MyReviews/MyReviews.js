import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MySingleReview from '../../components/MySingleReview/MySingleReview';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
                // console.log(data)
            })
    }, [user?.email])


    // for delete review
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    alert('review is deleted')
                    const remaining = myReviews.filter(rvw => rvw._id !== id)
                    setMyReviews(remaining)
                }
            })
    }
    return (
        <div className='my-20'>

            <h1 className=' text-6xl font-bold text-indigo-500 text-center my-10'>Your Reviews</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>User Name</th>
                            <th>Review Text</th>
                            <th>Service Name</th>
                            <th>Service Id</th>
                            <th>User Email</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReviews?.map(review => <MySingleReview key={review._id} review={review} handleDelete={handleDelete}></MySingleReview>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyReviews;