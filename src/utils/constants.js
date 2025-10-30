export const LOGO_URL = "https://static.vecteezy.com/system/resources/previews/048/067/082/non_2x/biryani-dish-malabar-biryani-with-thalassery-chicken-isolated-illustration-on-a-transparent-background-png.png";

const DEFAULT_LAT = 12.9405997;
const DEFAULT_LNG = 77.5737633;

// Use your local proxy server
export const SWIGGY_API = "http://localhost:5000/api/restaurants";

export const getRestaurantMenuProxyUrl = (resId) =>
  `http://localhost:5000/api/menu/${resId}`;