import { Link } from "react-router-dom";
//import logo from "../assets/arbiter.png";
import React from "react";

const Navbar = () => {

    const [darkMode, setDarkMode] = React.useState(true);
    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    return (
        <nav className="flex justify-between items-center bg-[#3C0056] p-5">
            {/*<img src={logo} alt="Logo" />*/}
            {/*<h1 className="text-text-dark text-3xl pl-5"> Arbiter Adjusters</h1>*/}
            <ul className="flex gap-1 text-white text-l ml-auto mr-5">
                <li className="hover:bg-[#36004d] rounded-xl p-3">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:shadow hover:ring-2 rounded-xl p-3">
                    <Link to="/about">Services</Link>
                </li>
                <li className="hover:shadow hover:ring-2 rounded-xl p-3">
                    <Link to="/about">About</Link>
                </li>
                <li className="hover:shadow hover:ring-2 rounded-xl p-3">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
