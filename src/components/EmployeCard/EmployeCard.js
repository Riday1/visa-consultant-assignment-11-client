import React from 'react';
import instaLogo from '../../photos/social_icon/instagram.png'
import facebookLogo from '../../photos/social_icon/facebook.png'
import linkedInLogo from '../../photos/social_icon/linked-in.png'
const EmployeCard = ({ employe }) => {
    const { name, img, _id } = employe;

    return (
        <div className=" hover:scale-105 duration-200 card-compact bg-base-100 w-64 shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="Shoes"
                    className='' />
            </figure>
            <div className="card-body after:">
                <h2 className=" text-xl font-bold text-indigo-600 text-center">{name}</h2>

                <div className="flex justify-between my-2 px-8">
                    <img src={instaLogo} className='w-8 h-8 cursor-pointer' alt="" />
                    <img src={facebookLogo} className='w-8 h-8 cursor-pointer' alt="" />
                    <img src={linkedInLogo} className='w-8 h-8 cursor-pointer' alt="" />
                </div>

            </div>
        </div>
    );
};

export default EmployeCard;