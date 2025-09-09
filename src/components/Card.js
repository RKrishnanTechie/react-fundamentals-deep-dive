const CardComponent = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData; // resData?.data if API data
  return (
    <div className="card">
      <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
        cloudinaryImageId}
       />
      <h3>{name}</h3>
      <h4> {cuisines?.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla?.deliveryTime} Minutes</h4>
      <button> Order Now</button>
    </div>
  );
};

export default CardComponent;