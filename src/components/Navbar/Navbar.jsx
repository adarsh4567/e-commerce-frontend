import React, { useCallback, useEffect, useState } from "react";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSearchProduct } from "../../customHooks/productsHook";

const Navbar = ({ showNavbar }) => {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [search, setSearch] = useState();
  const handleSearch = (e)=>{
       setSearch(e.target.value)
  }

  const data = useSearchProduct(search)

  // const data = useSearchProduct(search)
  const handleScroll = useCallback(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <header
      className={
        visible ? (showNavbar ? "navbarVisible" : "navbar") : "hideNav"
      }
    >
      <nav>
        <div className="left">
          <div className="navlogo" onClick={()=> navigate('/')}>eTown</div>
        </div>
        <div className="searchSection">
        <div className="box">
          <div>
            <input
              placeholder="Search.."
              type="text"
              value={search}
              onChange={(e) => handleSearch(e)}
              className="input"
              name="txt"
            />
            <i class="fas fa-search" id="one"></i>
          </div>
          <div className="options">
            {data &&
              data?.map((item) => (
                <div key={item.id}>
                  <Link
                    to={`/getproductsone/${item.id}`}
                  >
                    <option style={{color:'black'}}>{item.title.longTitle}</option>
                  </Link>
                </div>
              ))}
          </div>
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
            <Button onClick={() => navigate("/cart")}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCart id="icon" style={{ color: "white" }} />
              </Badge>
            </Button>
          </div>
          <Avatar className="avtar" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
