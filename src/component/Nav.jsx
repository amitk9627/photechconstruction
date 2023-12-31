import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import logo from '../assests/logo.jpg'
function Navbar() {

    const [show, setShow] = useState(false)
    const showNavbar = () => {
        setShow(!show)
    };

    return (
        <>
            <header className="flex justify-between items-center p-4 max-lg:p-1 h-28 w-full z-50 header-bg relative z-50">
                <div>
                    <NavLink to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="h-24 max-lg:h-16 ml-3 relative z-50"
                            alt="photechindia"
                        />
                    </NavLink>
                </div>
                <nav className={show ? "responsive_nav" : ""} >
                    <NavLink to="/h" className="text-xl font-bold">Home </NavLink>
                    <NavLink to="/about" className="text-xl font-bold">About</NavLink>
                    <NavLink to="/" className="text-xl font-bold">Services</NavLink>
                    <NavLink to="/w" className="text-xl font-bold">Our Work</NavLink>
                    <NavLink to="/c" className="text-xl font-bold">Careers</NavLink>
                    <NavLink to="/contact" className="text-xl font-bold">Contact Us</NavLink>

                </nav>
                <button
                    id=""
                    className="lg:hidden relative z-10 right-2"
                    onClick={showNavbar}>
                    <span className="nav-btn"> {show ? <FaTimes  /> : <FaBars className="text-black"/>} </span>
                </button>
            </header>
        </>
    );
}

export default Navbar;