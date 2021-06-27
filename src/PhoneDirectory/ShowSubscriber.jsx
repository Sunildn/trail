import React from "react";
import { Link } from "react-router-dom";
import Header from "./header/Header";


class ShowSubscriber extends React.Component{


    render(){
        const {subscriber,handleDelete}=this.props
        return(
            <div>
             
           
            <div className="component-body-container">
            <Header />
              <div className="grid-container heading-container">
              <button className="custom-btn add-btn"> <Link to="/add">  Add</Link></button>
                <span className="grid-item name-heading">Name</span>
                <span className="grid-item phone-heading">Phone</span>
              </div>
              {
            subscriber.map(sub => {
                  return <div key={sub.id} className="grid-container">
                    <span className="grid-item">{sub.name}</span>
                    <span className="grid-item">{sub.phone}</span>
                    <span className="grid-item action-btn-container">
                    <button key={sub.id} className="custom-btn delete-btn" value={sub.id} onClick={()=>handleDelete(sub.id)}>Delete</button>
                    </span>
                  </div>
                })
              }
    
            </div>
           
          </div>
        )
    }
}
export default ShowSubscriber;