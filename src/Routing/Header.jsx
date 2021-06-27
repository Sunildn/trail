import { Link } from "react-router-dom"



const Header =()=>{

    return(
      
             <div style={{width:"100%",height:"80px",textDecoration:"none",backgroundColor:"gray",color:"white"}}>
                
                <Link to={"/movie/:id"}>MOVIES</Link>
                <Link to="/my-list">MY-LIST</Link>
                <Link to="/top-Rated">TOP_RATED</Link>
                <Link to="/tv-series">TV_SERIES</Link>
          
        </div>
    )
}
export default Header;