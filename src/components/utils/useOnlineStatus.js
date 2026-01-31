/*
 * FILE: useOnlineStatus.js
 * ROLE: Custom hook that returns true when the browser is online, false when offline.
 *       Used by Body (to show offline message) and Header (to show status dot). Solves: reusable
 *       network status logic; components stay in sync with window "online" / "offline" events.
 *       Runs once on mount ([]); listeners stay until unmount. Best practice: return a cleanup
 *       function that removes both listeners to avoid leaks if the component unmounts.
 */

import { useEffect, useState } from "react"



const useOnlineStatus=()=>{

    const [onlineStatus , setonlineStatus] = useState(true);

    //check if online
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setonlineStatus(false)

        })
        window.addEventListener("online", ()=>{
            setonlineStatus(ture)

        })


    }, [])


    return onlineStatus

}

export default useOnlineStatus
