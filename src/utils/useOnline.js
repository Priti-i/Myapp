import { useEffect, useState } from "react";

const useOnline=()=>{

    const[isOnlne,setIsOnline]=useState(true);
    
    useEffect(()=>{
            
        const Onlinehandler =()=>{
            setIsOnline(true);
         };
         const offlinehandler =()=>{
             setIsOnline(false);
          };

            window.addEventListener("online",Onlinehandler);
            window.addEventListener("offline",offlinehandler);
        
            return ()=>{
                window.removeEventListener("offline",Onlinehandler);
                window.removeEventListener("offline",offlinehandler);
            }
    },[]);
 return isOnlne;
}
export default useOnline;