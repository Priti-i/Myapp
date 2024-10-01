import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import  {restaurantList} from "./config.js";
import CartItem from "./Cartitem.js";
function filterData(searchText,RestoList)
 {
  const r1=RestoList.filter((resturant) =>{
    resturant.data.name.includes(searchText)}
  );
  return r1;
}
const Body=()=>{
    
    const [RestoList,setRestoList]=useState([]);
     const[searchText,setSearchText]=useState();
     useEffect(()=>{
      getResto();
     },[]);

     async function getResto() {
      const data = await fetch("https://food-api-beta.vercel.app/service");
      const json = await data.json();
      console.log(json[0].data.name);  // Inspect the API response structure
      setRestoList(json);  // Adjust based on the actual API structure
    }
 return(
    <>
    <div className="search">
    <input type="text" placeholder="search"  
    value={searchText}
    onChange={(e)=>{setSearchText(e.target.value)}} // The purpose is to update a state variable that holds the current value of the input field.
    />
    </div>
    <button onClick={()=>{
        const result=filterData(searchText,RestoList);
        setRestoList(result);
    }}>search</button>
   
    
    <div className="cardView">
    {
        RestoList.map((resturant)=>{
        return(
        <CartItem{...resturant.data} key={resturant.data.id}/>);
        
        })
    }
   </div>
    </>
 );
}
export default Body;