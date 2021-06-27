import React from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router";


function Movie (props) {

    //Without passing the props the propes will be available
    // props will be history,location and match
    
  let history =useHistory();
   
    console.log(useRouteMatch());
  
    return <div>im in movies tab
        <button onClick={()=>{history.push("/")}}> move to not found</button>
    </div>;
  }


export default Movie;