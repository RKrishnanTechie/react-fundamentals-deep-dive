const CardComponent = ({ resData }) => {
  const { name, image, cuisine, rating } = resData; // resData?.data if API data
  return (
    <div className="card">
      <img className="card-img" src={image} />
      <h3>{name}</h3>
      <h4> {cuisine}</h4>
      <h4>{rating} Stars</h4>
      <button>Order Now</button>
    </div>
  );
};

export default CardComponent;