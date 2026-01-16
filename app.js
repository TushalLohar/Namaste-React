import React from "react";
import ReactDOM from "react-dom/client";


//imp >>> React.creatElement  ----> creates React Element ----> Which is an object ----> when rendered ------> becomes an HTML element
//this is react element

const heading = React.createElement(
  "h1",
  { id: "xyz" },
  "Namaste react ,element🚀"
);

const root_react = ReactDOM.createRoot(document.getElementById("root_react"));
root_react.render(heading);

// creating react Element using JSX
const jsxheading = (
  <h1 id="xyz" className="head" tabIndex="1">
    Namaste React , element using JSX🚀
  </h1>
);
const root_jsx = ReactDOM.createRoot(document.getElementById("root_jsx"));
root_jsx.render(jsxheading);

//react functional component
const HeadingComponent = () => {
  return <h1>namste react functional component🚀</h1>;
};

const root_functional = ReactDOM.createRoot(
  document.getElementById("root_functional")
);
root_functional.render(<HeadingComponent />);

//imp Syntax
//rem >>> All the syntax Heading_1 <---> Heading_2 <---> Heading_3 are same
const Heading_1 = () => {
  return <h1> Namaste React </h1>;
};

const Heading_2 = () => <h1> Namaste React </h1>;

const Heading_3 = () => (
  <h1 className="head" tabIndex={1}>
    Namaste React{" "}
  </h1>
);

//rem >>> To render a Functional component inside another functional component
const Child = () => <h1>Namaste React functional component Child</h1>;
const root_functional_2 = ReactDOM.createRoot(
  document.getElementById("root_functional_2")
);
root_functional_2.render(<Child />);
//component composition

// const Parent = () => {
//   return (
//     <div>
//       <h1>this is parent functional component</h1>
//       <Child />
//     </div>
//   );
// };
const Parent = () => (
  <div>
    <h1>this is parent functional component</h1>
    <Child />
  </div>
);

const root_functional_3 = ReactDOM.createRoot(
  document.getElementById("root_functional_3")
);
root_functional_3.render(<Parent />);

//rem >>> Inserting React element inside a react component
const title=(
    <h1>inserting a react element inside react component</h1>

)
const Container =()=>(
    <div>
        <h1>inserting react element below this</h1>
        {title}

    </div>
)
const root_element_4=ReactDOM.createRoot(document.getElementById("root_element_4"));
root_element_4.render(<Container/>);

//rem >>> calling a component inside another component in 3 different ways
const Submain=()=>(
    <h1>component inside component</h1>
)
const Main=()=>(
    <div>
        <h1>putting components below this one</h1>
        {Submain()}
        <Submain/>
        <Submain></Submain>
    </div>
)
const root_component_5=ReactDOM.createRoot(document.getElementById("root_component_5"));
root_component_5.render(<Main/>)