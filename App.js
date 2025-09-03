import React from "react";
import ReactDOM from "react-dom/client";

const AppComponent = () => {
  return (
    <div>
      <h1>Hello App comp</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);