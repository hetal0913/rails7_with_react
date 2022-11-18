import * as React from "react";
import * as ReactDOM from "react-dom";
const ServerSideError = (props) => {
    console.log(props);
    return ( 
        <>
            <p className="lead fw-bold">Please fix the below errors:</p>
            {props.errors.map((error, i) => (
                <p className="text-danger" key={i}>{error}</p>
            ))}
        </>
     );
}
 
export default ServerSideError;