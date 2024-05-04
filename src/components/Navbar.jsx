import React, { useState } from 'react'
import {logo, close, menu, nexcent} from '../assets'
import { navLinks } from '../constants'
import { LoginBtn } from './Button'

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-4">
        <a href="#" className='text-2xl font-semibold flex items-center'>
            <img src={nexcent} alt="" className="w-[60px] h-[60px] object-contain"/>
        </a>

        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal cursor-pointer space-x-2 text-base
            ${active === nav.title ? "text-BrandPrimary" : "text-gray-900"}
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:flex hidden">
        <LoginBtn />
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div className="mr-5">
            <LoginBtn />
        </div>
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-[25px] h-[25px]"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 mx-4 my-2 bg-white min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[10px] ${
                  active === nav.title ? "text-BrandPrimary" : "text-gray-900"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar