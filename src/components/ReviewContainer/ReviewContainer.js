import React from 'react';
import SingleReview from '../SingleReview/SingleReview';
import { Link } from 'react-router-dom';

const ReviewContainer = ({ reviews }) => {

    return (
        <div className='my-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                {
                    reviews.map(review => <SingleReview review={review}></SingleReview>)
                }
            </div>
            <div>
                <Link to='/' className='btn btn-primary btn-outline'>Add Review</Link>
            </div>
        </div>
    );
};

export default ReviewContainer;