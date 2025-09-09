import CardComponent from "./Card";
import { useState, useEffect } from "react";

const BodyComponent = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]); // State variable to hold restaurant data
  
    useEffect(() => {
     fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://swiggy-api-4c740.web.app/swiggy-api.json");
        const json = await data.json();
        console.log(json);      
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []); // Update this path after checkiing JSON Viewer Pro extension in your browser
    }

    if(listOfRestaurants.length === 0){
        return <h1>Loading...</h1>
    }

    return (
    <div className="body">
    <div className="filter-data">
      <button className="btn-filter" onClick={() => {
        const filteredList = listOfRestaurants.filter(
          (res) => Number(res.info.avgRating) > 4.3
        );
        setListOfRestaurants(filteredList);
      }}>
        Top Rated Restaurants
      </button>
    </div>
      <div className="restaurant-list">
        {listOfRestaurants.map((restaurant) => (
          <CardComponent key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;