import { Link } from 'react-router-dom';
//import logo from "../assets/arbiter.png";
import React from 'react';
import hamburger from '../assets/Hamburger_icon.svg';

const Navbar = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  const [open, setOpen] = React.useState(false);
  return (
    <nav className='flex justify-between items-center bg-[#3C0056] p-5'>
      {/*<img src={logo} alt="Logo" />*/}
      {/*<h1 className="text-text-dark text-3xl pl-5"> Arbiter Adjusters</h1>*/}

      <div className='sm:hidden flex w-full justify-end'>
        <img
          src={hamburger}
          alt='Menu'
          className='w-8 cursor-pointer '
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <ul className='sm:hidden flex flex-col gap-1 text-white text-l ml-auto mr-5'>
          <li className='hover:bg-[#36004d] rounded-xl p-3'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hover:shadow hover:ring-2 rounded-xl p-3'>
            <Link to='/about'>Services</Link>
          </li>
          <li className='hover:shadow hover:ring-2 rounded-xl p-3'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='hover:shadow hover:ring-2 rounded-xl p-3'>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      )}
      <ul className='hidden sm:flex gap-1 text-white text-l ml-auto mr-5'>
        <li className='hover:bg-[#36004d] rounded-xl p-3'>
          <Link to='/'>Home</Link>
        </li>
        <li className='hover:shadow hover:ring-2 rounded-xl p-3'>
          <Link to='/about'>Services</Link>
        </li>
        <li className='hover:shadow hover:ring-2 rounded-xl p-3'>
          <Link to='/about'>About Us</Link>
        </li>
        <li className='hover:shadow hover:ring-2 rounded-xl p-3'>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
