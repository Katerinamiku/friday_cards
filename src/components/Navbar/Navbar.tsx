import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <header className={s.navbarContainer}>
                <NavLink to='/'>Login</NavLink>
                <NavLink to='/registration'>Registration</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/Error404'>error 404</NavLink>
                <NavLink to='/reset'>Forget password</NavLink>
                <NavLink to='/reset/new'>New password</NavLink>
                <NavLink to='/templates'>Super Components</NavLink>
            </header>
        </div>
    );
};

export default Navbar;
