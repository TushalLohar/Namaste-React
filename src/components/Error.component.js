import { useRouteError } from "react-router";


const Error=()=>{

    const err =useRouteError();

    console.log(err);
    return(
        <div>
            <h1>OOPS!!!!! 🙊</h1>
            <h1>Something went wrong</h1>
            <h2>{err.status}: {err.statusText}</h2>
            <img
        src="https://www.shutterstock.com/image-vector/404-error-web-page-template-260nw-1912538209.jpg"
        alt="Cute kitten"
        style={{ marginTop: "1rem", borderRadius: "10px" }}
      />
        </div>
    )
}

export default Error;
