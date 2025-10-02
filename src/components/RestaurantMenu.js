import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    // You can fetch the menu data here using the resId from the URL params
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // Fetch menu data logic
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9405997&lng=77.5737633&restaurantId=1468&catalog_qa=undefined&submitAction=ENTER#"
    );

    const json = await data.json();
    console.log(json);
    setMenu(json?.data);
  };

  if (!menu) {
    return <Shimmer />;
  }

  console.log("MENU:", menu);

  // Extract restaurant info and menu items using optional chaining
  const { name, areaName, costForTwoMessage, avgRating, cuisines } =
    menu?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ||
    [];

  console.log("ITEM CARDS:", itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{areaName}</h2>
      <ul>
        <li>{costForTwoMessage}</li>
        <li>{avgRating} ratings</li>
        <li>{cuisines.join(",")}</li>
      </ul>

      <h2>Menu</h2>
      <div>
        {itemCards.map((item) => {
          const info = item.card.info;
          return (
            <div className="menu-item" key={info.id}>
              <div className="menu-details">
                <h3>{info.name}</h3>
                <div className="menu-price-rating">
                  <span className="menu-price">
                    ₹{(info.price || info.defaultPrice) / 100}
                  </span>
                  {info.ratings?.aggregatedRating?.rating && (
                    <span className="menu-rating">
                      ★ {info.ratings.aggregatedRating.rating}
                    </span>
                  )}
                </div>
                {info.description && (
                  <p className="menu-desc">{info.description}</p>
                )}
              </div>
              <div className="menu-actions">
                <img
                  className="menu-img"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_120,c_fit/${info.imageId}`}
                  alt={info.name}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
