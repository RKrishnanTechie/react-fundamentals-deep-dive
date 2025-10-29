import React from "react";

class UserClass extends React.Component {
 constructor(props) {
    super(props);
    // You can initialize state or bind methods here if needed

    this.state = {
        count: 0,
        count2: 1,
  } 
 }

  render() {

     const  {name, age} = this.props;
     const {count, count2} = this.state;
    return (    
        <div className="user-card"> 
            <h1>User Class Component</h1>
            <h2> Count: {count} </h2>
            <button onClick={()=>{
                this.setState({
                    count: count + 1
                })
            }}> Increment </button>

      
            <h2>Name:{name} </h2>
            <h2>Age:{age}</h2>       
        </div>
    );
  } 
}

export default UserClass;