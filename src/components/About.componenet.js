import User from "./user.component.js";
import UserClass  from "./UserClass.component.js";

const About=()=>{
    return(
    <div>
        <h1>About</h1>
        <h2>This is namaste react swiggy project</h2>
        <User xyz={"Tushal lohar {function}"} loca={"dehradun"}  />

        <UserClass name={"Tushal lohar {class}"} loc ={"Mumbai"}/>
    </div>
    );
};

export default About;