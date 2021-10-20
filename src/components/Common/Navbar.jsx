import React from "react";
import { Link } from "react-scroll";
import "../../assets/sass/navbar.scss";

export const Navbar = () => {
    return (
        <header className='navbar-wrapper'>
            <h1>
                <Link to='home'>Doba</Link>
            </h1>
            <div className='menu'>
                <Link
                    to='home'
                    className='item'
                    smooth={true}
                    duration={1000}>
                    Home
                </Link>
                <Link
                    to='about'
                    className='item'
                    smooth={true}
                    duration={1000}>
                    About me
                </Link>
                <Link
                    to='resume'
                    className='item'
                    smooth={true}
                    duration={1000}>
                    Resume
                </Link>
                <Link
                    to='contact'
                    className='item'
                    smooth={true}
                    duration={500}>
                    Contact me
                </Link>
            </div>
        </header>
    );
};
