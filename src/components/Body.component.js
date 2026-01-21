import { useFormState } from "react-dom";
import Restaurantcard from "./Restaurantcard.component.js";

import {useEffect, useState } from "react";

const Body = () => {
  //local state varibale 
  const [ListofRestaurents , setListofRestaurents] = useState([]);

useEffect(()=>{
  fechData();
}, []);    

const fechData = async ()=>{
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4221308&lng=72.82496069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

    const json = await data.json();
    
  const restaurants =json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []

console.log("restaurants array:", restaurants);
setListofRestaurents(restaurants);
};

if(ListofRestaurents.length===0){
  return <h1>Loading......</h1>
}
 return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            
            const filterlist= ListofRestaurents.filter(
              res=>res.info.avgRating>4
            );
            setListofRestaurents(filterlist);
           
          
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {/* <Restaurantcard resData={dataObj_list[0]}/>
            <Restaurantcard resData={dataObj_list[1]}/>
         */}
        {ListofRestaurents.map((restaurant) => (
          <Restaurantcard key={restaurant.info.id} resData={restaurant.info} />
        ))}
        {/* {dataObj_list.map((x,index)=>(
          <Restaurantcard key={index} resData={x}/> //but never use index as key..react itself has recommmed this
          ))}; */}
      </div>
    </div>
  );
};

export default Body;
