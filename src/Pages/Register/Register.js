import React, { useContext } from 'react';
import animation from '../../LottieAnimation/login_animation.json';
import Lottie from 'react-lottie';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import googleLogo from "../../photos/social_icon/google.png"
import instagramLogo from "../../photos/social_icon/instagram.png"
import facebookLogo from "../../photos/social_icon/facebook.png"


const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate();



    const handleSubmit = event => {
        event.preventDefault();





        const form = event.target;

        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user;

                updateUser(name, photoUrl)
                form.reset()
                navigate('/login')
            })
            .catch(err => console.error(err))

    }


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,

    };

    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="flex min-h-screen flex-col lg:flex-row justify-evenly items-center px-20">
                <div className=" text-center  lg:text-left">
                    <Lottie options={defaultOptions} />
                </div>
                <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ml-10">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className='text-4xl font-bold text-gray-700 text-center'>Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='name' placeholder="username" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url </span>
                            </label>
                            <input type="text" name='photoUrl' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center'>have an account? please <Link to='/login' className='text-indigo-500'>login</Link></p>
                        <div>

                            <div className="flex justify-evenly my-2 px-8">
                                <img src={googleLogo} className='w-8 h-8 cursor-pointer' alt="" />
                                <img src={facebookLogo} className='w-8 h-8 cursor-pointer' alt="" />
                                <img src={instagramLogo} className='w-8 h-8 cursor-pointer' alt="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;