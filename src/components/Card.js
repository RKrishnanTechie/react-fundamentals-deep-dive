
import { Link } from "react-router-dom";
const CardComponent = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla , id} = resData; // resData?.data if API data
  return (
    <div className="card">
      <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
        cloudinaryImageId}
       />
      <h3>{name}</h3>
      <h4> {cuisines?.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla?.deliveryTime} Minutes</h4>
      <Link to={`/restaurants/${id}`}>
       <button> Order Now</button> 
       </Link>
    </div>
  );
};

export default CardComponent;