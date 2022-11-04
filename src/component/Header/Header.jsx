import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className="navbar bg-base-100 pt-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <img src={Logo} alt="" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/home'>Home</Link>
                        <Link to='/orders'>Orders</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register' className='mx-5'>Register</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/'>Home</Link>
                    <Link to='/orders' className='mx-5'>Orders</Link>
                    <Link to='/login' className='mx-5'>Login</Link>
                    <Link to='/register' className='mx-5'>Register</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;