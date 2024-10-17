import { useState} from "react";
const FunctionalBased=(props)=>{
    const [count,setcount]=useState(0);
    return(
        <>
        <div>
               <p>My profile </p>
               <p>{props.name}</p>
               <h1>Heading new update here</h1>
               <button onClick={()=>{setcount(count+1)}}>Count increment</button>
               <p>Count={count}</p>
               <h2>hello world</h2>
               </div>
        </>
    );

}
export default FunctionalBased;