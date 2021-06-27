import React, { Component } from 'react';
import Counter from "./Counter.jsx";
import Screen from "./Screen"
import "./common.css"

export default class CounterApp extends Component{

    state ={
      
        counter:[{count:0,id:0},{count:0,id:1}]

    }

    handleIncrement=(id)=>{console.log(id)
        // var index;
        // for(var i=0;i<this.state.counter.length;i++){
        //     if(id===this.state.counter[i].id){
        //     index=id;
        //     break;
        //     }
        // }
        // let data1=this.state.counter;
        // data1[index].count++;
        // var x=this.state.sum;
        // console.log(data1)
         
        let counters=[...this.state.counter];
        let itemWithID=counters.find((item)=>{return item.id===id});
        //this find method returns the element which has id equal to give id

        itemWithID.count++;
        console.log(itemWithID)
        this.setState({counter:counters})

    }
    handleDecrement=(id)=>{
       
       
        let counters=[...this.state.counter];
        let itemWithID=counters.find((item)=>{return item.id===id})

        // for(var i=0;i<this.state.counter.length;i++){
        //     if(id===this.state.counter[i].id){
        //     index=id;
        //     break;
        //     }
        // }
        // let data1=this.state.counter;
        // data1[index].count--;
        // var x=this.state.sum;
        itemWithID.count--;
        console.log(itemWithID)
        this.setState({counter:counters})
    }
    handledel=(id)=>{
        const filteredCounters=this.state.counter.filter((item)=>{return item.id!==id});
        console.log(id)
        // let {counter}=this.state;
        // counter=counter.slice(id,1);
        
        this.setState({counter:filteredCounters})
    }
    handleAdd=()=>{
        let counters=[...this.state.counter];
       
        // let {counters}=this.state;
         let x={id:this.state.counter.length,count:0}
        // console.log(index)
        counters.push(x);
        this.setState({counter:counters})
    }
    render(){
        console.log(this.state)
        return (
            <div style={{padding:"30px",margin:"30px",width:"100%"}}>
                <Screen  data={this.state.counter}/>

                <button className="button"  onClick={this.handleAdd}>add</button>
                {
                this.state.counter.map((counter)=>{return(
                    <Counter count={counter.count} key={counter.id}  inc={()=>{this.handleIncrement(counter.id)}} dec={()=>this.handleDecrement(counter.id)} del={()=>this.handledel(counter.id)}/>
                )
                })
            }

            </div>
        )

    }
}