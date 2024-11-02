import React from "react";
import ReactDom from "react-dom";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";
import Instamart from "./Instamart";
const Header = () => {
  const [isLogin,setisLogin]=useState(false);
  const isOnline=useOnline();
  return (
    <>
      <div className="header">
        <div className="logo">Food Villa</div>

        <div className="nav-item">
          <ul>
            <Link to="/" ><li>Home</li></Link>
           <Link to="/About"><li>About us</li></Link> 
            <Link to="/Contact"><li>Contact</li></Link>
            <Link to="/Instamart"><li>Instamart</li></Link>
          </ul>
        </div>
        <h1>{isOnline? "online":"offline"}</h1>
       {(isLogin)
        ?(<button onClick={()=>setisLogin(false)}>Logout</button>)
        :(<button onClick={()=>setisLogin(true)}>Login</button>)}
      </div>
    </>
  );
};
export default Header;
