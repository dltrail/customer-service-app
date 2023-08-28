"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import CloseIcon from '@mui/icons-material/close';
import MenuIcon from '@mui/icons-material/Menu';


type Props = {
  navLinks: LinkItem[];
};

export type LinkItem = {
  linkText: string;
  href: string;
};

export default function Nav({ navLinks }: Props) {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);

  const showNavigation = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <button className="md:hidden" onClick={showNavigation}>customer service links</button>
      {/* {showNav && ( */}
      <div className={`md:block ${showNav ? 'block' : 'hidden'}`}>
        <div className={`flex flex-col h-screen w-full md:w-1/4 justify-center items-center md:flex-1 fixed md:fixed top-0 md:flex bg-white border-r-4`}>
          <button
            className='md:hidden absolute right-4 top-4'
            onClick={showNavigation}
          >
            <CloseIcon />
          </button>{" "}
          <ul className=''>
            {navLinks.map((link, i) => {
              const isActive: boolean = pathname === link.href;
              return (
                <li
                  key={i}
                  className='uppercase my-4 hover:underline underline-offset-8 '
                >
                  {" "}
                  <Link
                    onClick={() => (setShowNav(false))}
                    className={
                      isActive ? "text-blue-500 font-bold" : "text-black"
                    }
                    href={link.href}
                    key={link.linkText}
                  >
                    {link.linkText}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
