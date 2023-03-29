import React, { useState } from "react";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link className="logo" to="/">Algoes</Link>


        <ul className={"menu-link"}>
          <li>
            <Link className="aHov" to="/screen1">
              Screen1
            </Link>
          </li>
          <li>
            <Link className="aHov" to="/screen2">
              Screen2
            </Link>
          </li>
          <li>
            <Link className="aHov" to="/screen3">
              Screen3
            </Link>
          </li>
        
        </ul>

        <div className="hamBurger">
          <GiHamburgerMenu
            className="hamburger-menu"
            style={{
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>

      {isOpen && (
        <ul className="menu-link2">
          <li>
            <Link className="aHov2" to="./screen1" onClick={() => setIsOpen(!isOpen)}>
              Screen1
            </Link>
          </li>
          <li>
            <Link className="aHov2" to="./screen2" onClick={() => setIsOpen(!isOpen)}>
              Screen2
            </Link>
          </li>
          <li>
            <Link className="aHov2" to="./screen3" onClick={() => setIsOpen(!isOpen)}>
              Screen3
            </Link>
          </li>
          
        </ul>
      )}
    </>
  );
};

export default NavBar;