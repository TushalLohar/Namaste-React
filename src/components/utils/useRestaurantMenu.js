/*
 * FILE: useRestaurantMenu.js
 * ROLE: Custom hook that fetches restaurant menu data and returns it (or null while loading).
 *       Called from Menu.component.js with resID (e.g. useRestaurantMenu(resID)). Currently
 *       fetches from a fixed MENU_URL; resID could be used later to build a dynamic URL.
 *       Solves: menu data logic lives in one place; Menu component stays presentational.
 *       Runs fetch once on mount (useEffect with []); no cleanup (fetch is fire-and-forget).
 */

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
