import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../ThemeProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { setTheme, theme } = useTheme();

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark:text-white bg-[#DCD6C8] dark:bg-[#0D2538] top-0 sticky">
      <nav className="px-5 py-5 dark:bg-[#0D2538]" >
        <ul className="flex flex-row justify-center items-center gap-32 text-[12px]  dark:bg-[#0D2538]">
          <Link to="/">
            <li className="hover:translate-y-[-5px] duration-300 text-sm hover:cursor-pointer dark:bg-[#0D2538] ">
              Home
              <div className="border-blue-600 border-2 dark:bg-[#0D2538]"></div>
            </li>
          </Link>
          <li
            className="hover:translate-y-[-5px] duration-300 text-sm hover:cursor-pointer dark:bg-[#0D2538] "
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li
            className="hover:translate-y-[-5px] duration-300 text-sm hover:cursor-pointer dark:bg-[#0D2538]"
            onClick={() => navigate("/projects")}
          >
            Projects
          </li>
          <li
            className="hover:translate-y-[-5px] duration-300 text-sm hover:cursor-pointer dark:bg-[#0D2538]"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
          <div className=" dark:bg-[#0D2538]">
            {theme == "dark" ? (
              <FiSun
                className=" text-sm hover:translate-y-[-5px]  dark:bg-[#0D2538]"
                onClick={handleThemeSwitch}
              />
            ) : (
              <FiMoon
                className=" text-sm hover:translate-y-[-5px] dark:bg-[#0D2538]"
                onClick={handleThemeSwitch}
              />
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;