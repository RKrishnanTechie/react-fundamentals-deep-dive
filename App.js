import React from "react";
import ReactDOM from "react-dom/client";

const restaurantList = [
  {
    id: "1",
    name: "Pizza Palace",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    cuisine: "Italian",
  },
  {
    id: "2",
    name: "Curry Express",
    image:
      "https://media.istockphoto.com/id/1182881229/photo/chicken-tikka-masala.jpg?s=612x612&w=0&k=20&c=hBvSzu1SbkNlLGJLOvb5gXHi4-feEgiy-CBen6IbMas=",
    rating: 4.2,
    cuisine: "Indian",
  },
  {
    id: "3",
    name: "Sushi Central",
    image:
      "https://media.istockphoto.com/id/109836388/photo/sushi.jpg?s=612x612&w=0&k=20&c=hxJOXWEAq1V_9r8EHf26zgvShv26GbhMhlVzgTgv8cw=",
    rating: 4.8,
    cuisine: "Japanese",
  },
  {
    id: "4",
    name: "Burger Hub",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    rating: 4.1,
    cuisine: "American",
  },
  {
    id: "5",
    name: "Tacos Town",
    image:
      "https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFjb3N8ZW58MHx8MHx8fDA%3D",
    rating: 4.7,
    cuisine: "Mexican",
  },
  {
    id: "6",
    name: "Green Vegan",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    cuisine: "Vegetarian",
  },
  {
    id: "7",
    name: "Noodle House",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    cuisine: "Chinese",
  },
  {
    id: "8",
    name: "Steak Station",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    cuisine: "Steakhouse",
  },
  {
    id: "9",
    name: "Falafel Bros",
    image:
      "https://media.istockphoto.com/id/1139093193/photo/tortilla-wrap-with-falafel-and-fresh-salad-vegan-tacos-vegetarian-healthy-food.jpg?s=612x612&w=0&k=20&c=uUS2GP7JHvTMhqeuZbdfFcaV-zEDe3wEAHeKtZ4vKOw=",
    rating: 4.2,
    cuisine: "Middle Eastern",
  },
  {
    id: "10",
    name: "Seafood Delight",
    image:
      "https://media.istockphoto.com/id/507377821/photo/salmon-satay.jpg?s=612x612&w=0&k=20&c=psbzrtb37gGEkUtKRb868tMRII-1KqPsbb3ms8eTyjw=",
    rating: 4.7,
    cuisine: "Seafood",
  },
];

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="img"
          src="https://static.vecteezy.com/system/resources/previews/048/067/082/non_2x/biryani-dish-malabar-biryani-with-thalassery-chicken-isolated-illustration-on-a-transparent-background-png.png"
        />
        <h3 className="brand-name"> Lets Eat</h3>
      </div>
      <div className="nav">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const CardComponent = ({ resData }) => {
  const { name, image, cuisine, rating } = resData;
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

const AppComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
