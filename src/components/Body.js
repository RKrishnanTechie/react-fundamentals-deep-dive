import CardComponent from "./Card";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList); // State variable to hold restaurant data
  
    return (
    <div className="body">
    <div className="filter-data">
      <button className="btn-filter" onClick={() => {
        const filteredList = listOfRestaurants.filter(
          (res) => res.rating > 4
        );
        setListOfRestaurants(filteredList);
      }}>
        Top Rated Restaurants
      </button>
    </div>
      <div className="restaurant-list">
        {listOfRestaurants.map((restaurant) => (
          <CardComponent key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;