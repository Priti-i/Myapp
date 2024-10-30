import { useEffect, useState } from "react";
import {API_URL} from "../components/config";

const useRestaurant =(resId) =>{
const [restaurant,setRestaurant] =useState(null);
useEffect(() => {
    getRestaurantInfo();
}, []);

async function getRestaurantInfo() {

        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setRestaurant(data.data)


        const selectedRestaurant = data.find(item => item.data.id === resId);
        if (selectedRestaurant) {
            setRestaurant(selectedRestaurant.data);
        }
   
    
    }
    return restaurant;
}
export default useRestaurant;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    