import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthorContext } from '../context/Context';

const Navbar = () => {

    const{user, logout} = useContext(AuthorContext)

    const menubar = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>


const handdleLogOut =() => {
    logout()
    .then( data => console.log(data))
    .catch(err => console.log(err));
}

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                         {menubar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">jobPoRtaL</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {menubar}
                </ul>
            </div>
            <div className="navbar-end">
                 {
                    user ? 
                    <button onClick={handdleLogOut}>Log Out</button>
                    :
                    <Link to='/login'>Log In</Link>
                 }
            </div>
        </div>
    );
};

export default Navbar;