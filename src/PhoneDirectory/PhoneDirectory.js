import React from "react";
import "./common.css";
import AddSubscriber from "./AddSubscriber";
import { BrowserRouter as Router,Route } from "react-router-dom";
import ShowSubscriber from "./ShowSubscriber.jsx";

class PhoneDirectory extends React.Component{

    state={subscribers : [
        {
        id:  1,
        name: "Shilpa Bhat",
        phone: "8888888888"
        },
        {
        id: 2,
        name: "Srishti Gupta",
        phone: "9999999999"
        }
       ]}
       handleAdd=(data )=>{
            let arr=this.state.subscribers;
             data.id=this.state.subscribers.length+1;
            arr.push(data)
           
            this.setState({subscribers:arr})
            console.log(this.state)
       }
       handleDelete=(id)=>{
            
           let subscriber =this.state.subscribers;
           let subscribers=subscriber.splice(id,1);
           this.setState({subscribers: subscribers});
           
       }

    render(){
      return(
        <div>
         
          <Router>
            <Route path="/add" render={(props)=> <AddSubscriber {...props}  handleAdd={this.handleAdd}  />}/>
            <Route exact path="/" render={(props)=> <ShowSubscriber subscriber={this.state.subscribers} handleDelete={this.handleDelete} />}/>
         
          </Router>
        </div>
      )
        
        
    }
}
export default PhoneDirectory;