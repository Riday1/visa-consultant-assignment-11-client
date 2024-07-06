import React, { useContext } from 'react';
import animation from '../../LottieAnimation/login_animation.json';
import Lottie from 'react-lottie';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import googleLogo from "../../photos/social_icon/google.png"
import instagramLogo from "../../photos/social_icon/instagram.png"
import facebookLogo from "../../photos/social_icon/facebook.png"
import Swal from 'sweetalert2';


const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleSubmit = event => {
        event.preventDefault();




        const form = event.target;

        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = { email: user?.email }

                Swal.fire({
                    title: "Successfully Login",
                    icon: "success"
                });
                fetch('https://assignment-11-server-ashen.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)

                })
                    .then(res => res.json())
                    .then(data => {

                        localStorage.setItem('review-token', data.token)
                    })
                navigate('/')
            })
            .catch(err => console.error(err))


    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const handleLoginWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                const currentUser = { email: user?.email }
                Swal.fire({
                    title: "Successfully Login",
                    icon: "success"
                });
                fetch('https://assignment-11-server-ashen.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)

                })
                    .then(res => res.json())
                    .then(data => {

                        localStorage.setItem('review-token', data.token)
                    })
                navigate('/')
            })
            .catch(err => console.error(err))
    }


    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="flex min-h-screen flex-col lg:flex-row justify-evenly items-center px-20">
                <div className=" text-center  lg:text-left">
                    <Lottie options={defaultOptions} />
                </div>
                <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ml-10">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className='text-4xl font-bold text-gray-700 text-center'>Login</h1>
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
                        <p className='text-center'>don't have any account?<Link to='/register' className='text-indigo-500'>register</Link></p>
                        <div className="flex justify-evenly my-2 px-8">
                            <img onClick={handleLoginWithGoogle} src={googleLogo} className='w-8 h-8 cursor-pointer' alt="" />
                            <img src={facebookLogo} className='w-8 h-8 cursor-pointer' alt="" />
                            <img src={instagramLogo} className='w-8 h-8 cursor-pointer' alt="" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;