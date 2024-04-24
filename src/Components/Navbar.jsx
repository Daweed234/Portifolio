import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { FiSun } from "react-icons/fi";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="px-5 py-5">
        <ul className="flex flex-row justify-center items-center gap-32 text-[12px]">
          <Link to={"/"}>
            <li className="hover:translate-y-[-5px] duration-300 text-sm hover:cursor-pointer ">
              Home
              <div className="border-blue-600 border-2"></div>
            </li>
          </Link>
          <li
            className="hover:translate-y-[-5px] duration-300 text-sm hover:cursor-pointer "
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li className="hover:translate-y-[-5px] duration-300 text-sm hover:cursor-pointer">
            Service
          </li>
          <li className="hover:translate-y-[-5px] duration-300 text-sm hover:cursor-pointer" onClick={() => navigate('/contact')}>
            Contact
          </li>
          <FiSun className="hover:translate-y-[-5px] duration-300 text-lg" />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;