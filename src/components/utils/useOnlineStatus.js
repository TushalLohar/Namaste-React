/*
 * FILE: useOnlineStatus.js
 * ROLE: Custom hook that returns true when the browser is online, false when offline.
 *       Used by Body (to show offline message) and Header (to show status dot). Solves: reusable
 *       network status logic; components stay in sync with window "online" / "offline" events.
 *       Runs once on mount ([]); listeners stay until unmount. Best practice: return a cleanup
 *       function that removes both listeners to avoid leaks if the component unmounts.
 */

import { useEffect, useState } from "react"


const useOnlineStatus = () => {
    // Initialize with the actual current status instead of hardcoded 'true'
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

    useEffect(() => {
        // Define named handlers so they can be referenced in cleanup
        const handleOffline = () => {
            setOnlineStatus(false);
        };

        const handleOnline = () => {
            setOnlineStatus(true); 
        };

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        /**
         * --- CLEANUP FUNCTION ---
         * When the component using this hook is destroyed (unmounted), 
         * we MUST remove the listeners. This is crucial for performance.
         * Why? To prevent 'Memory Leaks' where the browser keeps listening 
         * for events even after the user leaves the page.
         */

        return () => {
            // Now these references work!
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };
    }, []);

    return onlineStatus;
};

export default useOnlineStatus;
