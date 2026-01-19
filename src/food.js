import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.component.js";
import Body from "./components/Body.component.js";

const Applayout = () => {
  return ( 
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const swiggy = ReactDOM.createRoot(document.getElementById("swiggy"));
swiggy.render(<Applayout />);
