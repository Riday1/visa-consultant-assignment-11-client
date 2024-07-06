import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div className='h-screen '>
            <Helmet>
                <title>Blog - kopa visa consultant</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h1 className=' text-6xl font-bold text-indigo-500 text-center mt-20'>FAQ</h1>
            <div className="join join-vertical w-full  my-20 flex justify-center items-center flex-col gap-10">
                <div className="collapse collapse-arrow join-item border-base-300 border w-2/3  ">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Difference between SQL and NoSQL </div>
                    <div className="collapse-content">
                        <p>Sql databases like Mysql is a tabular based database, and data are placed there according their field, and there can be some relation between two table, on the other hand NoSql databases are document based, it means data are stored in a object form, and there is no relation between two tables.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border w-2/3  ">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is JWT, and how does it work?</div>
                    <div className="collapse-content">
                        <p>JWT or jsonwebtoken is a secreet key , which we used to transmit data securely between client and server. There are two types of jwt token which are "Access Token and Refresh Token". Access token are valid for short time, and Refresh token are valid for long time. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border w-2/3  ">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is the difference between javascript ad NodeJS ?</div>
                    <div className="collapse-content">
                        <p>JavaScript is a synchronous programming language, which is used in client and server side. On the other hand nodejs is a javaScript runtime, which is powered by v8 engine.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border w-2/3 ">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How does NodeJS handle multiple requests at the same time?</div>
                    <div className="collapse-content">
                        <p>In nodejs it has a EventQueue, It is build  with the concept of event driven architecture. Through this it handle multiple client architecture.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;