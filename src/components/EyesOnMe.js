// Code EyesOnMe Component Here
import React, {useState} from "react";

function EyesOnMe(){
const[focus, setFocus]= useState(true);
function Focus(){
    console.log("Good!")
    setFocus(true);
}

function Blur(){
    console.log("Hey! Eyes on me!")
    setFocus(false)
}

    return(
        <div>
            <button onFocus={Focus} onBlur= {Blur}>
            {focus ? console.log("Good!") : console.log("Hey! Eyes on me!")}
            <p> Eyes on me</p>
            </button>
        </div>
    )
}

export default EyesOnMe;