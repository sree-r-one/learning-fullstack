import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

// TODO : Tooltip

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const handleCloseSidebar = () => {
    // in smaller screens, close the sidebar when a link is clicked
    if (activeMenu !== undefined && screenSize < 768) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "font-semibold bg-green-100 rounded mx-4 drop-shadow-lg scale-105 z-20 ring-2 ring-green-100 ring-inset";
  const normalLink =
    "text-gray-500 hover:bg-green-50 hover:scale-90 hover:drop-shadow-sm hover:text-gray-600 hover:-z-10";

  return (
    <div className="sidebar h-screen overflow-auto bg-white pb-10 md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          {/* Title of the business */}
          {/* 
          <div className="ml-2 mt-1 flex items-center justify-between">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="flex items-center gap-4 rounded py-2 pl-2 pr-20 text-xl font-extrabold  tracking-tight text-slate-900"
            >
              <SiShopware /> <span>Shoppeei</span>
            </Link>
            {/* Button for closing the sidebar */}
          {/*  
            <button
              className="rounded-full p-2 text-xl"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              >
              <MdOutlineCancel />
            </button>
          </div>
            */}

          <div className="mt-16 md:mt-4">
            {/* Loop over links array */}
            {links.map((item) => (
              <div key={item.title}>
                <p className="m-3 mt-4 uppercase text-gray-400">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) =>
                      `${
                        isActive ? activeLink : normalLink
                      } delay-50 flex items-center gap-5 pb-2.5 pl-4 pt-3 transition ease-in-out`
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
