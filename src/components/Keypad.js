// Code Keypad Component Here
import React, {useState} from 'react'

function Keypad (){
    const [display, setDisplay] = useState('')

    function setDisplayPassword(event){
        console.log("Entering password...")
        setDisplay(event.target.value)
    }
    
    return (
        <div>
            <input type= "password" value={display} onChange={setDisplayPassword} />
        </div>
    )
}

export default Keypad;