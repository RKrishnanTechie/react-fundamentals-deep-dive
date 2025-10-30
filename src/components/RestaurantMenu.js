import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantMenuProxyUrl } from "../utils/constants";
import { mockMenuData } from "../mocks/restaurantMenu";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { resId } = useParams();
  
  console.log("resId:", resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      if (mockMenuData[resId]) {
        console.log("Using mock menu data for restaurant:", resId);
        setMenu(mockMenuData[resId].data);
      } else {
        console.log("Fetching from API for restaurant:", resId);
        const data = await fetch(getRestaurantMenuProxyUrl(resId));
        const json = await data.json();
        setMenu(json?.data);
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
      if (mockMenuData[resId]) {
        setMenu(mockMenuData[resId].data);
      }
    }
  };

  if (!menu) return <div>Loading...</div>;

  // Extract restaurant info from the first card
  const restaurantInfo = menu?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;

  const { 
    name = "Restaurant", 
    cuisines = [], 
    costForTwoMessage = "N/A", 
    avgRating = "N/A" 
  } = restaurantInfo || {};

  // Extract menu items
  const menuItems = menu?.cards?.find(
    (card) => card?.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <li>{costForTwoMessage}</li>
        <li>{avgRating} ratings</li>
        <li>{cuisines.join(", ")}</li>
      </ul>

      <h2>Menu</h2>
      {menuItems.map((item, index) => {
        const category = item?.card?.card;
        
        if (category?.itemCards) {
          return (
            <div key={index}>
              <h3>{category.title}</h3>
              <ul>
                {category.itemCards.map((dish) => {
                  const dishInfo = dish?.card?.info;
                  return (
                    <li key={dishInfo?.id}>
                      <strong>{dishInfo?.name}</strong> - ₹{(dishInfo?.price / 100).toFixed(2)}
                      <br />
                      <small>{dishInfo?.description}</small>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default RestaurantMenu;