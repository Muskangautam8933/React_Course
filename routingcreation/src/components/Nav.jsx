import React from "react";
import { NavLink } from "react-router-dom"; // ✅ Import Link properly

const Nav = () => {
  return (
    <nav className="mt-10 flex justify-center gap-10">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
          }; }}
        to="/">Home
      </NavLink>

      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
          };}}
          to="/user" >User
      </NavLink>
      
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
          }; }}
        to="/about" >About
      </NavLink>
    </nav>
  );
};

export default Nav;
