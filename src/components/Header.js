import React from "react";
import { NavLink } from "react-router-dom";
import { testRoutes } from "../utils";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useAtom } from "jotai";
import { showAuthModalAtom } from "../atoms";
const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 2xl:px-0">
      <span>Logo</span>
      <Links />
    </div>
  );
};

export default Header;

const Links = () => {
  const [show, setShow] = useAtom(showAuthModalAtom);
  const toggleModal = () => setShow((prevState) => !prevState);

  return (
    <>
      <button className="block md:hidden text-xl text-rose-500">
        <HiOutlineMenuAlt3 />
      </button>
      <nav className="hidden md:flex space-x-14 items-center">
        {testRoutes.map(({ label, path }) => (
          <CustomNavLink key={label} path={path} label={label} />
        ))}
        <button
          className="rounded rounded-full text-sm border font-medium border-gray-800 px-5 py-2 hover:bg-gray-700 hover:text-white cursor-pointer"
          onClick={toggleModal}
        >
          Login
        </button>
      </nav>
    </>
  );
};

const CustomNavLink = ({ label, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "font-bold" : "")}
    >
      {label}
    </NavLink>
  );
};
