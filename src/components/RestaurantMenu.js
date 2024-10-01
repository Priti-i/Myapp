import { useParams } from "react-router-dom";
import React, { useState,useEffect } from "react";
const RestaurantMenu=()=>{
    const {id}=useParams();
    const [resturant,setresturant]=useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=658210&submitAction=ENTER");
        const json =await data.json();
        console.log(json.data);
        setresturant(json.data);
    } 
    return(
       
        <>
        <h1>Resturent id :{id}</h1>
        </>
    );
}
export default RestaurantMenu;