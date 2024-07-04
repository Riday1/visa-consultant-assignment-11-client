import React from 'react';

const SingleServiceCard = () => {
    return (
        <div className=" hover:scale-105 duration-200 card-compact bg-base-100 w-80 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className='' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex justify-between">
                    <p>Price : $</p>
                    <span>ratings</span>
                </div>
                <button className="btn btn-outline btn-primary">view details</button>
            </div>
        </div>
    );
};

export default SingleServiceCard;