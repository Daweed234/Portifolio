  import React, { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { FiSun, FiMoon } from "react-icons/fi";
  import { useTheme } from "../ThemeProvider";

  const Navbar = () => {
    const navigate = useNavigate();
    const { setTheme, theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
      <div className="sticky top-0 dark:text-white bg-[#DCD6C8] dark:bg-[#0D2538]">
        <nav className="px-5 py-5 dark:bg-[#0D2538]">
          <div className="flex justify-between items-center md:container mx-auto">
            <div className="flex justify-center items-center flex-grow">
              <Link to="/" className="text-sm md:text-base">
                Home
              </Link>
              <Link
                to="/about"
                className="ml-8 text-sm md:text-base hover:underline md:ml-12"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="ml-8 text-sm md:text-base hover:underline md:ml-12"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="ml-8 text-sm md:text-base hover:underline md:ml-12"
              >
                Contact
              </Link>
            </div>
            <div>
              {theme === "dark" ? (
                <FiSun
                  className="text-sm cursor-pointer md:text-base"
                  onClick={handleThemeSwitch}
                />
              ) : (
                <FiMoon
                  className="text-sm cursor-pointer md:text-base"
                  onClick={handleThemeSwitch}
                />
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  };
  export default Navbar;