import { Outlet, NavLink, useLocation } from "react-router-dom";
import './layout.css'

export const Layout = () => {
  const menu = [
    { url: "/", name: "Sobre mi" },
    { url: "/resumen", name: "Resumen" },
    { url: "/portfolio", name: "Portafolio"},
/*     { url: "/contacts", name: "Contactos"}
 */  ];

  const location = useLocation();
  const pageName =
    menu.find((item) => item.url === location.pathname)?.name || "";

  return (
    <div>
      <header className=" relative">
        <nav className=" absolute -right-8 top-0 w-3/4 ml-auto bg-[#0D86FF] rounded-3xl pl-20 pr-2 py-[18px]">
          <ul className="flex justify-around">
            {menu.map((item) => (
              <li key={item.url}>
                <NavLink to={item.url} className="text-gray-200">{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
        <h1 className=" text-3xl font-sans font-bold leading-7 pt-8 ">
          {pageName}
          <div className="w-12 h-[5px] bg-blue-500 my-6 rounded"></div>
        </h1>
        </div>
      </header>
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};
