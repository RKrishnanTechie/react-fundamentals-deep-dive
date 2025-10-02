import CardComponent from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";    
import { SWIGGY_API } from "../utils/constants";

const BodyComponent = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]); // State variable to hold restaurant data
    const [searchText, setSearchText] = useState(""); // State variable to hold search text
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); // State variable to hold filtered restaurant data      
    useEffect(() => {
     fetchData();
    },[])

    const fetchData = async () => {
        try{
            const data = await fetch(SWIGGY_API);
        const json = await data.json();
        console.log(json);      
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []); // Update this path after checkiing JSON Viewer Pro extension in your browser
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []); // filtered list is same as original list at the beginning
        } catch (error){
           console.error("Failed to fetch restaurants:", error);
        }
         }

    

    return (listOfRestaurants.length === 0)? ( <Shimmer />)  :(
    <div className="body">
    <div className="filter-data">
    
    <input className="input" type="text" placeholder="Search for restaurants" value={searchText} 
    onChange={(e)=> {setSearchText(e.target.value)}}/>
    
    <button className="btn-search" onClick={() => {
        const filteredList = listOfRestaurants.filter(
    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
             res.info.cuisines.join(",").toLowerCase().includes(searchText.toLowerCase()));
             setFilteredRestaurants(filteredList);
      }}> Search </button>

      <button className="btn-filter" onClick={() => {
        const filteredList = listOfRestaurants.filter(
          (res) => Number(res.info.avgRating) > 4.5 
        );
        setFilteredRestaurants(filteredList);
      }}>
        Top Rated Restaurants
      </button>

    </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <CardComponent key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;