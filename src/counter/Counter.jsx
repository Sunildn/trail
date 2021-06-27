import React, { Component } from 'react'

export default class Counter extends Component{
    render(){

        const {count,inc,dec,del} =this.props;
        
        return(
         <div>{
       
        <div className="container"> 
            <span>{count}</span>
            <button className="button" onClick= {inc}>INCREMENT</button>
            <button className="button"  onClick= {dec}>DECREMENT</button>
            <button  className="button"  onClick= {del}>DELETE</button>
        </div>
    }
        </div>
        )
    }
}