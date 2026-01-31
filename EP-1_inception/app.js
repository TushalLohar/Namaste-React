/*
 * FILE: EP-1_inception/app.js
 * ROLE: Episode 1 demo: builds a nested DOM (parent > child1, child2, each with h1/h2) using only
 *       React.createElement (no JSX). Loaded by EP-1_inception/index.html via CDN scripts (no
 *       type="module"). Solves: understanding that React elements are objects; siblings must be
 *       passed as an array to createElement; one root and one render call.
 */

// const heading = React.createElement(
//     "h1",
//     { id: "heading" , xyz:"abc"},
//     "hello world from react!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading); // object

/**
 * <div id:"parebnrt">
 *     <div id="child">
 *        <h1> i m h1 tag</h1>
 *        <h12> i m h2 tag silbling of h1</h2> ..sibling .. for siblings u have make an array
 *
 *    </div>
 * <div id="child">
 *        <h1> i m h1 tag</h1>
 *        <h12> i m h2 tag silbling of h1</h2> ..sibling .. for siblings u have make an array
 *
 *    </div>
 * </div>
 *
 * REActElemnet (object)== html (browser undertsands )
 */
const parent = React.createElement( "div" , {id:"parent"},[
    React.createElement( "div",  {id:"child"},
        [React.createElement("h1", {}, "i am h1 tag") ,
        React.createElement("h2", {}, " i m h2 tag silbling of h1")
    ]),
    React.createElement( "div",  {id:"child2"},
        [React.createElement("h1", {}, "i am h1 tag") ,
        React.createElement("h2", {}, " i m h2 tag silbling of h1")
    ])
 ]);
 console.log(parent);
 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
