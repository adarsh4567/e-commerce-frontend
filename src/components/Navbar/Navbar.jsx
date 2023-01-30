import React, { useCallback, useEffect, useState } from "react";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = useCallback(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  },[prevScrollPos]);

  // new useEffect:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible,handleScroll]);
  return (
    <header className={visible ? 'navbar':'hideNav'}>
      <nav>
        <div className="left">
          <div className="navlogo">
            eTown
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
              Accesories
            </Button>
          </div>
        <div className="nav_btn">
            <Button onClick={() => navigate("/login")} variant="outline">
              Products
            </Button>
          </div>
          <div className="nav_btn">
            <Button onClick={() => navigate("/login")} variant="outline">
              Offer
            </Button>
          </div>
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
