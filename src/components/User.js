const User =({name, age}) => {
  return (
    <div className="user-card">       
        <h1>User Component</h1> 
        <h2>Name:{name} </h2>
        <h2>Age: {age}</h2>
    </div>
  );
}   
export default User;    
