import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import  {restaurantList} from "./config.js";
import CartItem from "./Cartitem.js";
import Shimmer from "./Shimmer.js";
function filterData(searchText, restaurants) {
  const filtered = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filtered;
}
const Body=()=>{
    
    const [allResto,setallResto]=useState([]);
    const [filterRestoList,setfilterRestoList]=useState([]);
     const[searchText,setSearchText]=useState();
     useEffect(()=>{
      getResto();
     },[]);

     async function getResto() {
      const data = await fetch("https://food-api-beta.vercel.app/service");
      const json = await data.json();
      // console.log(json[0].data.name);  // Inspect the API response structure
      setallResto(json);  // Adjust based on the actual API structure
      setfilterRestoList(json);
    }
    if(!allResto) return null;  // not render component

    

 return (allResto.length===0)?(<Shimmer/>):(
    <>
    <div className="search">
    <input type="text" placeholder="search"  
    value={searchText}
    onChange={(e)=>{setSearchText(e.target.value)}} // The purpose is to update a state variable that holds the current value of the input field.
    />
    </div>
    <button onClick={()=>{
        const result=filterData(searchText,allResto);
        setfilterRestoList(result);
    }}>search</button>
   
    
    <div className="cardView">
    {
        filterRestoList.map((resturant)=>{
          
        return(
        <CartItem{...resturant.data} key={resturant.data.id}/>);
        
        })
    }
   </div>
    </>
 );
}
export default Body;