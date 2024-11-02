import { useEffect, useState } from "react";

const useOnline=()=>{

    const[isOnlne,setIsOnline]=useState(true);
    useEffect(()=>{
            window.addEventListener("online",()=>{
                setIsOnline(true);
            });

            window.addEventListener("offline",()=>{
                setIsOnline(false);
            })
    },[]);
 return isOnlne;
}
export default useOnline;