import React from "react";
import Header from "./header/Header.jsx";



class AddSubscriber extends React.Component{

    state={
        id:"",
        name:"",
        phone:""
    }

    handleChange=(e)=>{
        console.log(e.target.name);
        this.setState({ 
            [e.target.name]:e.target.value})
    }
    
    render(){

        const {handleAdd}=this.props;
        return(
            <div>
                <Header/>
                <label htmlFor="name">Name</label><br/>
                <input type="text" id="name" name="name" onChange={this.handleChange}/><br/><br/>
                <label htmlFor="phone">Password</label><br/>
                <input type="Number" id="phone" name="phone"  onChange={this.handleChange}/><br/>
                
                <span>Name</span><span>{this.state.name}</span><br/>
                <span>Phone</span><span>{this.state.phone}</span><br/>
                <button onClick={(event)=>{event.preventDefault();this.props.history.push("/"); handleAdd(this.state)}}>Add</button>
            </div>
        )
    }
}
export default AddSubscriber;