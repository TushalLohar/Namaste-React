import Restaurantcard from "./Restaurantcard.component.js";
import Shimmer from "./shimmer_component.js";
import { API_URL } from "./utils/constants.utils.js";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  //local state varibale
  const [ListofRestaurents, setListofRestaurents] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);

  //whwenwver state varibales changes react starts the reconcilation process and renrenders teh whole component
  const [Searchtext, setSearchtext] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);

    const json = await data.json();

    const restaurants =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    console.log("restaurants array:", restaurants);
    setListofRestaurents(restaurants);
    setFilteredRestaurant(restaurants);
  };
  //conditional rendering
  // if (ListofRestaurents.length === 0) {
  //   return <Shimmer />;
  // }
  return ListofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurants..."
            value={Searchtext}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            onClick={() => {
              const filter = ListofRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(Searchtext.toLowerCase()),
              );

              setFilteredRestaurant(filter);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filter = ListofRestaurents.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurant(filter);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {/* <Restaurantcard resData={dataObj_list[0]}/>
            <Restaurantcard resData={dataObj_list[1]}/>
         */}
        {FilteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/menu/" + restaurant.info.id}>
            <Restaurantcard resData={restaurant.info} />
          </Link>
        ))}
        {/* {dataObj_list.map((x,index)=>(
          <Restaurantcard key={index} resData={x}/> //but never use index as key..react itself has recommmed this
          ))}; */}
      </div>
    </div>
  );
};

export default Body;
