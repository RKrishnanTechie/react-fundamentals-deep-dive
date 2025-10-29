import React from "react";

class UserClass extends React.Component {
 constructor(props) {
    super(props);
    // You can initialize state or bind methods here if needed
  } 

  render() {

     const  {name, age} = this.props;
    return (    
        <div className="user-card"> 
            <h1>User Class Component</h1>
            <h2>Name:{name} </h2>
            <h2>Age:{age}</h2>       
        </div>
    );
  } 
}

export default UserClass;