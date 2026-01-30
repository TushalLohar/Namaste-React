import { LOGO_URL } from "./utils/constants.utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [LoggedIn, setLoggedIn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="navitems">
        <ul>
          <li>Online status :{onlineStatus ? "✅" : "🛑"}</li>
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
            <Link to="/Grocery" >Grocery</Link>
            </li>
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
