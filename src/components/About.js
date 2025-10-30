import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
        <h1>About Us Page</h1>  
        <p>This is Namaste React Course</p>
         <User name="RK" age="28" />
        <UserClass name="radha" age="28"/>
    </div>
  )
}   

export default About;