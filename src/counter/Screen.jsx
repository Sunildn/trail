import React, { Component } from 'react'

export default class Screen extends Component{
    render(){
        let sum=0;
        for(var i=0;i<this.props.data.length;i++){
            sum=this.props.data[i].count+sum;
        }

        return (
            <div style={{padding:"30px",margin:"30px",backgroundColor:"lightcoral",width:"100%",height:70}}>
                <h3>{sum}</h3>
            </div>
        )

    }
}