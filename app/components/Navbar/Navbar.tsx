'use client';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import {IoCloseSharp} from 'react-icons/io5';
import {RxHamburgerMenu} from 'react-icons/rx';
import './Navbar.css';
import {usePathname} from 'next/navigation';

const navigation = {
  items: [
    {
      path: '/blog',
      label: 'blog',
      id: 1
    }
  ]
};

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 shadow-sm z-50 bg-white  border-b-4 border-gray-200 border-solid">
      <div className="flex justify-around container mx-auto py-10">
        <Link href={"/"} className="text-xl my-auto text-slate-900 font-bold ">
          <h1>Coding With Zak</h1>
        </Link>

        <span
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden cursor-pointer self-center"
        >
          {!navbarOpen ? (
            <RxHamburgerMenu className="text-4xl" />
          ) : (
            <IoCloseSharp className="text-4xl" />
          )}
        </span>

        <ul
          className={classNames(
            `absolute left-0 bg-white w-full flex flex-col items-center
            gap-8 py-8 border-b-4 border-gray-200 border-solid md:static 
            md:flex-row md:justify-end md:flex-wrap md:max-w-[32rem] md:border-0 md:p-0.5
          `,
            `${navbarOpen ? "top-[116px]" : "top-[-390px]"}`
          )}
        >
          {navigation.items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={classNames("link", {
                  "text-blue-600": pathname === item.path,
                })}
              >{ item.label }</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
