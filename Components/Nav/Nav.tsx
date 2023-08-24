"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

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

  // const navFunction = () => {
  //   setShowNav((prev) => !prev);
  // };

  //     href: "/customer-services/contact-us",
  //     linkText: "contact us",
  //   },
  //   {
  //     href: "/customer-services",
  //     linkText: "customer services",
  //   },

  //   {
  //     href: "/customer-services/delivery",
  //     linkText: "Delivery",
  //   },
  //   {
  //     href: "/customer-services/returns",
  //     linkText: "Returns",
  //   },
  //   {
  //     href: "/customer-services/size-guide",
  //     linkText: "Size guide",
  //   },
  //   {
  //     href: "/customer-services/care-guide",
  //     linkText: "Care guide",
  //   },
  //   {
  //     href: "/customer-services/faqs",
  //     linkText: "FAQs",
  //   },
  //   {
  //     href: "/customer-services/klarna",
  //     linkText: "Klarna",
  //   },
  //   {
  //     href: "/customer-services/terms",
  //     linkText: "Terms & Conditions",
  //   },
  //   {
  //     href: "/customer-services/privacy-policy",
  //     linkText: "Privacy policy",
  //   },
  //   {
  //     href: "/customer-services/Cookies",
  //     linkText: "Cookies",
  //   },
  //   {
  //     href: "/customer-services/wholesale",
  //     linkText: "Wholesale",
  //   },
  // ];
  return (
    <>
      <button onClick={showNavigation}>test</button>
      {showNav && (
        <div className='flex flex-col h-screen w-full md:w-1/4 justify-center items-center md:flex-1 fixed md:fixed top-0 md:flex bg-white'>
          <button
            className='md:hidden absolute right-4 top-4'
            onClick={showNavigation}
          >
            close
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
                    onClick={() => setTimeout(() => setShowNav(false), 2000)}
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
      )}
    </>
  );
}
