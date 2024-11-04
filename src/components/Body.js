import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import { restaurantList } from "./config.js";
import CartItem from "./Cartitem.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import {filterData} from "../utils/search"
import useOnline from "../utils/useOnline.js";


const Body = () => {
  const [allResto, setallResto] = useState([]);
  const [filterRestoList, setfilterRestoList] = useState([]);
  const [searchText, setSearchText] = useState();
  
  useEffect(() => {
    getResto();
  }, []);

  async function getResto() {
    const data = await fetch("https://food-api-beta.vercel.app/service");
    const json = await data.json();
    // console.log(json.data.data);  // Inspect the API response structure
    setallResto(json); // Adjust based on the actual API structure
    setfilterRestoList(json);
  }
  // online offline
  const isOnline=useOnline(); 
  if (!isOnline) {
    alert("You are offline");
    return null; // or any other fallback UI element if needed
}


  if (!allResto) return null; // not render component

  return allResto.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input className="bg-yellow-200 border-solid  p-2"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }} // The purpose is to update a state variable that holds the current value of the input field.
        />
      
      <button className="bg-orange-400 rounded-sm p-2"
        onClick={() => {
          const result = filterData(searchText, allResto);
          setfilterRestoList(result);
        }}>search</button>
        </div>

      <div className="flex flex-wrap">
        {filterRestoList.map((resturant) => {
          //When clicked, this <Link> navigates to the specific menu page for that restaurant, identified by its id.
          return<Link to={`/RestaurantMenu/${resturant.data.id}`}> 
          
          <CartItem {...resturant.data}  /></Link>;
        })}
      </div>
    </>
  );
};
export default Body;
