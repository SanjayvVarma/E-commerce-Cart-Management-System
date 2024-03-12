import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import './Navbar.css'

const Navbar = ({ quantity }) => {
  return (
    <div>
      <ul className="nav">
        <li>AddYourBag</li>
        <li>
          <FaCartArrowDown className="cart_icon" />
          <span className="cart_quantity">{quantity}</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
