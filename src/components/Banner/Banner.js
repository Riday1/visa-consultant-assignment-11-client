import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div className="hero max-w-screen-xl bg-base-200 min-h-screen banner">
            <div className="hero-content text-center">
                <div className="max-w-screen-xl">
                    <h1 className="text-6xl font-bold text-gray-300">Easy & Simple Visa <br />Processing Agency</h1>
                    <p className="py-6 text-white">
                        Your most trasted partner
                    </p>
                    <button className="btn btn-primary">Explore now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;