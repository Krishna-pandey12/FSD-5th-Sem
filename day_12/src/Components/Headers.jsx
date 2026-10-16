import React from 'react';
import {useNavigate} from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
  return (
    <div>
      <nav style={{
        display: "flex",
        gap: "35px",
        backgroundColor: "navy",
        color: "white",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "35px",
        padding: "15px"
      }}>
        <div>My Website</div>

        <div style={{ display: "flex", gap: "35px" }}>
          <div onClick={()=>navigate("/")}>Home</div>
          <div onClick={()=>navigate("/product")}>Product</div>
          <div onClick={()=>navigate("/cart")}>Cart</div>
          <div onClick={()=>navigate("/contact")}>Contact us</div>
        </div>
      </nav>
    </div>
  )
}

export default Header