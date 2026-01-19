import Restaurantcard from "./Restaurantcard.component.js";
import dataObj_list from "./utils/data.utils.js";
import {useState } from "react";

const Body = () => {
  //local state varibale 
  const [ListofRestaurents , setListofRestaurents] = useState(dataObj_list);
 

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            
            const filterlist= ListofRestaurents.filter(
              res=>res.sla.deliveryTime<30
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
          <Restaurantcard key={restaurant.id} resData={restaurant} />
        ))}
        {/* {dataObj_list.map((x,index)=>(
          <Restaurantcard key={index} resData={x}/> //but never use index as key..react itself has recommmed this
          ))}; */}
      </div>
    </div>
  );
};

export default Body;
