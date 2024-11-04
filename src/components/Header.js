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
      <div className="flex justify-between bg-green-200 shadow">
        <div className="py-10">Food Villa</div>

        <div className="">
          <ul className="flex py-10">
            <Link to="/" className="px-2"><li>Home</li></Link>
           <Link to="/About" className="px-2"><li>About us</li></Link> 
            <Link to="/Contact" className="px-2"><li>Contact</li></Link>
            <Link to="/Instamart" className="px-2"><li>Instamart</li></Link>
          </ul>
        </div>
        <h1 className="py-10">{isOnline? "online":"offline"}</h1>
       {(isLogin)
        ?(<button onClick={()=>setisLogin(false)}>Logout</button>)
        :(<button onClick={()=>setisLogin(true)}>Login</button>)}
      </div>
    </>
  );
};
export default Header;
