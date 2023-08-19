import Link from "next/link";
import React from "react";

const Header = () => {
  const menu = [
    {
      id: 1,
      slug: "/",
      title: "Home",
    },
    {
      id: 2,
      slug: "/about",
      title: "About",
    },
    {
      id: 3,
      slug: "/movie",
      title: "Movie",
    },
    {
      id: 4,
      slug: "/contact",
      title: "Contact Us",
    },
  ];

  return (
    <div className="navbar justify-between bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
             {menu.map((item) => (
            <li key={item.id}>
              {" "}
              <Link href={item.slug}>{item.title}</Link>{" "}
            </li>
          ))}
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Movie's
        </Link>
      </div>
      <div className=" navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          {menu.map((item) => (
            <li key={item.id}>
              {" "}
              <Link href={item.slug}>{item.title}</Link>{" "}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
