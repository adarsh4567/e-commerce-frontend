import { Box, Button, Divider, Drawer } from "@mui/material";
import React, { useEffect } from "react";
import "./sidecard.css";
import { Add, Remove } from "@mui/icons-material";
import { setUserCart } from "../../features/cartSlice";
import { useSelector } from "react-redux";

const SideCard = ({ open, setOpen }) => {
  const { cart } = useSelector(({ cartReducer }) => cartReducer);
  return (
    <>
      <Drawer
        anchor="right"
        onClose={() => setOpen(false)}
        open={open}
      >
      <div className="cover">
        {cart && cart?.map((item,idx)=>
        <div className="drawer" key={idx}>
          <div className="leftDrawer">
            <img
              src={item.url}
              alt="cart_img"
            ></img>
          </div>
          <div className="rightDrawer">
            <div className="name">{item.title.longTitle}</div>
            <div className="addRemove">
              <div><Add fontSize="small"/></div>
              <div><Remove fontSize="small"/></div>
            </div>
          </div>
        </div>
       )}
        <div className="drawerBtn">
          <div><Button color="success">View Cart</Button></div>
          <div><Button color="warning">Empty Cart</Button></div>
        </div>
        </div>
      </Drawer>
    </>
  );
};

export default SideCard;
