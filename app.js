import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement( "div" , {id:"parent"},[
    React.createElement( "div",  {id:"child" , key:"child1"},
        [React.createElement("h1", {key:"h1"}, "this is a namaste react") ,
        React.createElement("h2", {key:"h1 sibling h2"}, " i m h2 tag silbling of h1")
    ]),
    React.createElement( "div",  {id:"child2", key:"child2"},
        [React.createElement("h1", {key:"h1-2"}, "i am h1 tag") ,
        React.createElement("h2", {key:"h2-2"}, " i m h2 tag silbling of h1")
    ])
 ]);
 console.log(parent);
 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);