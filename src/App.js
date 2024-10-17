import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About.js";
import Error from"./components/Error.js"; 
import Contact from"./components/Contact.js"; 
import  RestaurantMenu from"./components/RestaurantMenu.js";
import Footer from "./components/Footer.js"; 
import Profile from "./components/FunctionalBased.js";


const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/> 
       <Footer/>
        </>
    );
}
    const appRouter=createBrowserRouter([
    {
        path:"/", 
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
        {
        path:"/",
        element:<Body/>
    },
    {
        path:"/About",
        element:<About/>,
        children:[
        {
        path:"profile",
        element:<Profile/>
    },
        ],
    },
    {
        path:"/Contact",
        element:<Contact/>
    },
    {
        path:"/RestaurantMenu/:resId",
        element:<RestaurantMenu/>
        
    },
    ],
    },
]);
    
const root = ReactDOM.createRoot(document.getElementById("root"));
// render is modify a dom
root.render(<RouterProvider router={appRouter} />);