import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li tabIndex={0}>

                        <ul className="p-2 bg-base-100">
                            <li>
                                <Link to='/home'>Home</Link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Header;