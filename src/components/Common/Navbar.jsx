import React, { useState } from "react";
import { Link } from "react-scroll";
import "../../assets/sass/navbar.scss";

export const Navbar = () => {
    const [active, setActive] = useState(false);

    return (
        <header className='navbar-wrapper'>
            <h1>
                <Link to='home'>Doba</Link>
            </h1>
            <button className='btn-collapse' onClick={() => setActive(!active)}>
                <i className='fas fa-bars'></i>
            </button>
            <div className={`menu ${active ? "active" : ""}`}>
                <Link to='home' className='item' smooth={true} duration={500}
                onClick={() => setActive(!active)}>
                    Home
                </Link>
                <Link to='about' className='item' smooth={true} duration={500} 
                onClick={() => setActive(!active)}>
                    About me
                </Link>
                <Link
                    to='resume'
                    className='item'
                    smooth={true}
                    duration={500}
                    onClick={() => setActive(!active)}>
                    Resume
                </Link>
                <Link
                    to='contact'
                    className='item'
                    smooth={true}
                    duration={500}
                    onClick={() => setActive(!active)}>
                    Contact me
                </Link>
            </div>
        </header>
    );
};
