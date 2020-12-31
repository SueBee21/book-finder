import React from "react";
function Jumbotron (props){
    return (
        <div className="bg-light">
            {props.children}
        </div>
    )
};
export default Jumbotron;