import { useState } from "react";

const User = (props) => {

  const [count ] = useState([0,1,2,3,4]);
  const [count2 ] = useState([4,3,2,1,0]);
  return (
    <div className="user-card">

      <h1>Count = {count.join(", ")}</h1>
      <h1>Count = {count2.join(", ")}</h1>
      <h2>Name:{props.xyz}</h2>
      <h3>Location:{props.loca}</h3>
      <h4>Contact :@Tushal_loahr</h4>
    </div>
  );
};

export default User;
