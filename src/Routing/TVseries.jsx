import React, { useState } from "react";


 function TVseries (){
       const [state,setState]=useState({sunil:"a"});
    
        console.log(state)
    return (
        
        <div>
            im in TV-SERIES
            <input type="text" name="email" />
            <button onClick={()=>{setState({...state,shasank:"b"})}}>x</button>
        </div>
    )
}
 
export default TVseries;