import React from 'react';

const Blogs = () => {
    return (
        <div className='h-screen '>
            <h1 className=' text-6xl font-bold text-indigo-500 text-center mt-20'>FAQ</h1>
            <div className="join join-vertical w-full  my-20 grid md:grid-cols-2 gap-10">
                <div className="collapse collapse-arrow join-item border-base-300 border h-36">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Difference between SQL and NoSQL </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border h-36">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is JWT, and how does it work?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border h-36">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is the difference between javascript ad NodeJS ?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border h-36">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">How does NodeJS handle multiple requests at the same time?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;