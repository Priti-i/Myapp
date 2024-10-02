import React from "react";
import ReactDom from "react-dom";
import React, { useState } from "react";
import {Link} from "react-router-dom";
const Header = () => {
  const [isLogin,setisLogin]=useState(false);
  return (
    <>
      <div className="header">
        <div className="logo">Food Villa</div>

        <div className="nav-item">
          <ul>
            <Link to="/" ><li>Home</li></Link>
           <Link to="/About"><li>About us</li></Link> 
            <Link to="/Contact"><li>Contact</li></Link>
          </ul>
        </div>
       {(isLogin)
        ?(<button onClick={()=>setisLogin(false)}>Logout</button>)
        :(<button onClick={()=>setisLogin(true)}>Login</button>)}
      </div>
    </>
  );
};
export default Header;
