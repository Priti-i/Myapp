import {useRouteError} from "react-router-dom";


const Error=()=>{
    const err=useRouteError();
    console.log(err);
    // const {status,statusText}=err;   we can use also use in destructre form
return(
<>

<div>
<h1>Opps!</h1>
<h1>Somethings went wrong</h1>
<h2>{err.status+" "+err.statusText}</h2>
</div>
</>
);
}
export default Error;