/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// ICONS //
import { LuBox, LuMessageSquare } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { AiOutlineCustomerService } from "react-icons/ai";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

// ICONS //

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const location = useLocation();

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/inventory", name: "inventory", icon: AiOutlineProduct },
    { id: 3, path: "/orders", name: "Orders", icon: FaOpencart },
    { id: 4, path: "/transactions", name: "Transactions", icon: GrTransaction },
    { id: 5, path: "/customers", name: "Customers", icon: AiOutlineCustomerService },
    { id: 6, path: "/services", name: "Services", icon: MdOutlineMiscellaneousServices },
    { id: 7, path: "/messages", name: "Messages", icon: LuMessageSquare },
  ];

  useEffect(() => {
    const currentPathIndex = SIDEBAR_LINKS.findIndex(link => link.path === location.pathname);
    setActiveLink(currentPathIndex);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
        
    
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r   px-4 bg-gray-300">
    <div className="">
      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
              activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm text-gray-500 hidden md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Navigation Links */}

      
      </div>
    </div>
    
  );
};

export default Sidebar;
