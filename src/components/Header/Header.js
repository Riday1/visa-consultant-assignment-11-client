import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../photos/logo_1.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('logout successfully')
            })
    }
    return (
        <div className="navbar bg-slate-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        <li><Link to='/]
                        '>Home</Link></li>
                        <li>
                            <Link to='/my-reviews'>My Reviews</Link>
                        </li>
                        <li><Link to='/add-services'>Add Services</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        {
                            user && <li><button onClick={handleLogout} className='btn btn-sm btn-primary'>logout </button></li>
                        }

                    </ul>
                </div>

                <Link to='' className="text-xl">
                    <img src={logo} className='w-30 h-20 ' alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/' className='text-lg font-semibold text-indigo-600'>Home</Link></li>
                    {
                        user && <><li><Link to='/my-reviews' className='text-lg font-semibold text-indigo-600'>My Reviews</Link></li>
                            <li><Link to='/add-services' className='text-lg font-semibold text-indigo-600'>Add Services</Link></li></>
                    }
                    <li><Link to='/blogs' className='text-lg font-semibold text-indigo-600'>Blogs</Link></li>
                    <li><Link to='/contact' className='text-lg font-semibold text-indigo-600'>Contact</Link></li>

                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ?
                        <>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                    <Link to='/profile'><img src={user?.photoURL} alt='' /></Link>
                                </div>
                            </div>
                            <button onClick={handleLogout} className='btn btn-sm btn-primary ml-6 hidden lg:block'>logout </button>
                        </>
                        :
                        <>
                            <Link to='/login' className="btn btn-primary btn-sm text-lg ">Login</Link>
                            <Link to='/register' className="btn btn-warning btn-sm ml-4 text-lg">SignUp</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;