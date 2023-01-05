import React from "react";
import images from "../Styles/img/images.png";
import Search from "./../Components/Pure/Search";
import BasicExample from "../Components/Pure/BtnAccount";
import Navbar from "../Styles/Navbar.scss";
import { Cart } from "../Components/Pure/Cart";
const NavBar = () => {
  return (
    <div className="containerN">
      <div class="row">
        <div class="col-sm">
          <img class="imgL" src={images} alt="logo" />
        </div>
        <div class="col-sm">
          <Search />
        </div>
        <div class="col-sm">
          <BasicExample />
        </div>
        <div class="col-sm">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
