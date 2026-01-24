import { LOGO_URL } from "./utils/constants.utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [LoggedIn, setLoggedIn] = useState("Login");
  //if no dependenxies array => useeffect will get render eevrytime header is render
  //id dependencies is empty => means useefect calls on only initial render only and (just once)
  //if dependency array is LoggedIn , useffect will called everytime my LoggedIn chanegs
  useEffect(() => {}, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="navitems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                LoggedIn === "Login"
                  ? setLoggedIn("Logout")
                  : setLoggedIn("Login");
              }}
            >
              {LoggedIn}
            </button>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
