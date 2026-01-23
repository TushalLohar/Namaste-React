import { LOGO_URL } from "./utils/constants.utils";
import { useState } from "react";

const Header = () => {
  const [LoggedIn, setLoggedIn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
