import CardComponent from "./Card";
import restaurantList from "../utils/mockData";


const BodyComponent = () => {
  return (
    <div className="body">
      <h2>Search</h2>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => (
          <CardComponent key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;