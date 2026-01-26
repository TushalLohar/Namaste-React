import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: [0, 1, 2, 3, 4],
      count2: [4, 3, 2, 1, 0],
    };
  }

  render() {
    const { name } = this.props; ///deconstruting
    const { count2 } = this.state; ///deconstruting
    return (
      <div className="user-card">
        <h1>Count :{this.state.count.join(", ")}</h1>
        <h1>Count2 :{count2.join(", ")}</h1>
        <h2>Name:{name}</h2>
        <h3>Location:{this.props.loc}</h3>
        <h4>Contact :@Tushal_loahr</h4>
      </div>
    );
  }
}
export default UserClass;
