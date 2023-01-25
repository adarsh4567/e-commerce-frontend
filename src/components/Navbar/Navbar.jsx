import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo-3.png";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src={logo} alt="Not loaded" />
          </div>
        </div>
        <div className="box">
             <div>
              <input placeholder="Search.." type="text" className="input" name="txt" />
              <i class="fas fa-search" id="one"></i>
              </div>
          </div>
        <div className="right">
          <div className="nav_btn">
            <Button onClick={() => navigate("/login")} variant="outline">
              Sign In
            </Button>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
              <ShoppingCart id="icon" style={{ color: "white" }} />
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className="avtar" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
