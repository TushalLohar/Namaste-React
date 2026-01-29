import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      count2: 10,
    };
  }

  render() {
    const { name } = this.props; ///deconstruting
    const { count2 } = this.state; ///deconstruting
    return (
      <div className="user-card">
        <h1>Count :{this.state.count}</h1>
        <h1>Count2 :{count2}</h1>
        <button
          onClick={() => {
            //never update state variabels directly
            this.setState({
              count: this.state.count + 1,
              count2: count2 * this.state.count,
              
            });
          }}
        >
          Count increment
        </button>

        <h2>Name:{name}</h2>
        <h3>Location:{this.props.loc}</h3>
        <h4>Contact :@Tushal_loahr</h4>
      </div>
    );
  }
}
export default UserClass;
