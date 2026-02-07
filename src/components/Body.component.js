import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Restaurantcard, { isOpen } from "./Restaurantcard.component";
import Shimmer from "./Shimmer.component";
import UserContext from "./utils/UserContext";
import useOnlineStatus from "./utils/useOnlineStatus";
import { API_URL } from "./utils/constants.utils";

const Body = () => {
  const [ListofRestaurents, setListofRestaurents] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  const [Searchtext, setSearchtext] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Context Hook
  const { loggedInUser, setuserName } = useContext(UserContext);
  
  const RestaurantCardOpen = isOpen(Restaurantcard);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      const mainCard = json?.data?.cards?.find(
        (x) => x?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      const restaurants = mainCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListofRestaurents(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  if (onlineStatus === false) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-black text-rose-500 bg-rose-50 px-8 py-4 rounded-3xl shadow-sm">
          🔴 Offline Connection Detected
        </h1>
      </div>
    );
  }

  return ListofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-6 sm:px-12">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10">
          
          {/* Hero Section & Context Editor */}
          <div className="space-y-6">
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[1.1]">
              Fresh Flavors <br /> 
              <span className="text-emerald-600 italic">Just for {loggedInUser.split(" ")[0]}</span>
            </h2>
            
            {/* Context Input Badge */}
            <div className="flex items-center gap-3 bg-white w-fit px-5 py-3 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 group transition-all focus-within:ring-4 focus-within:ring-emerald-500/10">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Profile</span>
              <input 
                className="outline-none font-bold text-slate-800 bg-transparent w-40"
                value={loggedInUser}
                placeholder="Change name..."
                onChange={(e) => setuserName(e.target.value)}
              />
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative group">
              <input
                type="text"
                className="w-full sm:w-72 pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl shadow-lg shadow-slate-200/40 outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="Search food..."
                value={Searchtext}
                onChange={(e) => setSearchtext(e.target.value)}
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:opacity-100 transition-opacity">🔍</span>
            </div>

            <button
              onClick={() => {
                const filtered = ListofRestaurents.filter((res) =>
                  res.info.name.toLowerCase().includes(Searchtext.toLowerCase())
                );
                setFilteredRestaurant(filtered);
                setActiveFilter("search");
              }}
              className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all active:scale-95 shadow-lg"
            >
              Search
            </button>

            <button
              onClick={() => {
                if (activeFilter === "top") {
                  setFilteredRestaurant(ListofRestaurents);
                  setActiveFilter("all");
                } else {
                  const filtered = ListofRestaurents.filter((res) => res.info.avgRating > 4.2);
                  setFilteredRestaurant(filtered);
                  setActiveFilter("top");
                }
              }}
              className={`px-6 py-4 rounded-2xl font-bold text-sm transition-all border-2 ${
                activeFilter === "top"
                  ? "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-inner shadow-emerald-100"
                  : "bg-white border-slate-100 text-slate-600 hover:bg-slate-50"
              }`}
            >
              Top Rated ⭐️
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-14">
          {FilteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/menu/" + restaurant.info.id}
              className="group transition-all duration-500 hover:-translate-y-3"
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardOpen resData={restaurant.info} />
              ) : (
                <Restaurantcard resData={restaurant.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Body;