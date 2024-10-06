import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams(); // Uncomment if resId is needed

    const [restaurant, setRestaurant] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
    
            const response = await fetch("https://food-api-beta.vercel.app/service");
            const data = await response.json();
            console.log(data);
            setRestaurant(data.data)


            const selectedRestaurant = data.find(item => item.data.id === resId);
            if (selectedRestaurant) {
                setRestaurant(selectedRestaurant.data);
            }
       
        
        }

        return (
            <>
                <h1>{restaurant?.name}</h1>
                <img src={restaurant?.imagee} alt={restaurant?.name} width="300" />
                <h3>Area: {restaurant?.area}</h3>
                <h3>Rating: {restaurant?.rating}</h3>
                <h4>Cuisines:</h4>
                <ul>
                    {restaurant?.cuesine?.map((cuisine, index) => (
                        <li key={index}>{cuisine}</li>
                    ))}
                </ul>
            </>
        );
    };

export default RestaurantMenu;
