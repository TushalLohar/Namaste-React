import { useEffect, useState } from "react";
import { MENU_URL } from "./constants.utils.js";

const useRestaurantMenu=()=>{

  const [restInfo, setrestInfo] = useState(null);
    

    useEffect(()=>{
        fetchData();

    },[])
    const fetchData =async()=>{
        const data =await fetch(MENU_URL)

        const json = await data.json();
        setrestInfo(json.data);
    };


    return restInfo;

};
export default useRestaurantMenu;