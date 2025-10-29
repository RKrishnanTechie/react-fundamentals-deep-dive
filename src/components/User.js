import { use, useState } from "react";
const User =({name, age}) => {

const [count] = useState(0); // functional component state
const [count2] = useState(1);
  return (
    <div className="user-card">       
        <h1>User Component</h1> 
        <h2> Count: {count}</h2>
        <h2> Count2: {count2}</h2>
        <h2>Name:{name} </h2>
        <h2>Age: {age}</h2>
    </div>
  );
}   
export default User;    
