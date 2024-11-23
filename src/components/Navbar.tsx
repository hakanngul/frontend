import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const links = [
    { id: 1, link: '/', name: 'Home' },
    { id: 2, link: '/experience', name: 'Experience' },
    { id: 3, link: '/portfolio', name: 'Portfolio' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-primary fixed z-50">
      <div>
        <Link to="/" className="text-2xl font-signature ml-2">
          Hakan GÜL
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 ${
              isActive(link) ? 'text-secondary' : 'text-white'
            }`}
          >
            <Link to={link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-primary text-white">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl ${
                isActive(link) ? 'text-secondary' : ''
              }`}
            >
              <Link
                to={link}
                onClick={() => setNav(!nav)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
