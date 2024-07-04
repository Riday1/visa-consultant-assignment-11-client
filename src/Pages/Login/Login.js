import React from 'react';
import animation from '../../LottieAnimation/login_animation.json';
import Lottie from 'react-lottie';
const Login = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        console.log(form)
        const email = form.email.value
        const password = form.password.value



    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="flex min-h-screen flex-col lg:flex-row justify-evenly items-center px-20">
                <div className=" text-center  lg:text-left">
                    <Lottie options={defaultOptions} />
                </div>
                <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ml-10">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className='text-4xl font-bold text-gray-700 text-center'>Sign In</h1>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;