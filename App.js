import React from "react";
import ReactDOM from "react-dom/client";

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
        <CardComponent name="Subway" cuisine="Sandwiches, Fast Food" rating="4.1" /> 
        <CardComponent name={"Pizza Hut"} cuisine="Pizzas, Fast Food" rating="3.8" />
        <CardComponent name="KFC" cuisine="Burgers, Fast Food" rating="4.0" /> 
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />

      </div>

    </div>
  );
}

const CardComponent = ({name, cuisine, rating}) =>   {
  return (
    <div className="card">
      <img
        className="card-img"
        src="https://th.bing.com/th/id/OIP.JNmlSCN5OtbormFEYgJl1wHaEo?w=278&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"/>  
     <h3>{name}</h3>
      <h4> {cuisine}</h4>
      <h4>{rating} Stars</h4>
      <button>Order Now</button>
    </div>
  );
} 

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
