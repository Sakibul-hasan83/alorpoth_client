import React, { useContext, useState } from 'react';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthenticationElements/AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {user,logout}=useContext(AuthContext)



const handleLogout =()=>{

logout()

}

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Enroll', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 lg:px-8 h-16 w-full">

        {/* Small Screen: Hamburger */}
        <div className="flex items-center lg:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"} />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <a className="flex items-center text-2xl font-extrabold tracking-wider gap-2 lg:ml-0">
          <FaBook className="text-yellow-400 text-3xl drop-shadow-lg animate-pulse"/>
          <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            AlorPoth
          </span>
        </a>

        {/* Large Screen Links */}
        <ul className="hidden lg:flex space-x-6 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-yellow-400 transition">{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <div  className="hidden lg:flex">
          <Link to={"/login"} className="btn bg-pink-600 hover:bg-pink-500 border-none text-white font-semibold shadow-md hover:scale-105 transform transition-all duration-300">
            Login
          </Link>
        </div>

        {/* Small Screen Login */}
        <div className="lg:hidden">
         {

user? <><button className="btn bg-red-500 hover:bg-pink-500 border-none text-white font-semibold text-sm shadow-md hover:scale-105 transform transition-all duration-300" onClick={handleLogout}>Logout </button></>:<> <Link to={"/login"} className="btn bg-pink-600 hover:bg-pink-500 border-none text-white font-semibold text-sm shadow-md hover:scale-105 transform transition-all duration-300">
            Login
          </Link></>

         }
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white w-full px-4 py-4 space-y-2">
          {links.map((link) => (
            <li key={link.name} className="hover:text-yellow-400 transition font-medium">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
