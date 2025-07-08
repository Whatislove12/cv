import { Outlet, NavLink, useLocation } from "react-router-dom";
import "./layout.css";
import { useState } from "react";

import { useTranslation } from 'react-i18next';


export const Layout = () => {

  const { t} = useTranslation();


  const menu = [
    { url: "/", name: t("about") },
    { url: "/resumen", name: t("resumen") },
    { url: "/portfolio", name: t("portafolio") },
    /*{ url: "/translate", name: "translate" },*/

    /*{ url: "/contacts", name: "Contactos"}*/
  ];

  const handleMenuToggle = () => {
    const screenWidth = window.innerWidth;
    if(screenWidth>768) setMenuOpen(false);
    else setMenuOpen(!menuOpen)
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const pageName =
    menu.find((item) => item.url === location.pathname)?.name || "";

  return (
    <div>
      <header className=" relative ">
        <nav className={menuOpen ? "open" : "close"}>
          <ul className=" ">
            {menu.map((item) => (
              <li key={item.url}>
                <NavLink to={item.url} onClick={handleMenuToggle} className="text-gray-200 font-semibold">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h1 className=" text-3xl font-sans font-bold leading-7 pt-8 ">
            {pageName}
            <div className="w-12 h-[5px] bg-blue-500 my-6 rounded"></div>
          </h1>
          <button onClick={handleMenuToggle}>
            <div className="bg-blue-500 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 bg-blue-500 rounded-md"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </button>
        </div>
      </header>
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};
