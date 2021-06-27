

import React, { Component } from 'react';
import { BrowserRouter as  Router, Redirect, Route, Switch  } from 'react-router-dom';
import Home from "./Home.jsx";
import Movie from "./Movie.jsx";
import Mylist from "./MyList.jsx";
import TopRated from "./TopRated.jsx";
import TVseries from "./TVseries";
import NotFound from "./NotFound";
import Header from "./Header"


class App extends Component{

   state={
       a:"sunil"
   }
    

    render(){
        
        return (
        <div>
         <Router>
             <Header/>
          <Switch>
            <Route path="/movie/:id" render={(props)=><Movie {...props} props1={this.props1}  props2={this.props2} props3={this.props3}/>}/>
            <Route path="/my-list" component={Mylist}/>
            <Route path="/top-Rated" component={TopRated}/>
            <Route path="/tv-series" component={TVseries}/>
            <Route path="/not-found" component={NotFound}/>
            <Route path="/" component={Home}/>
            <Redirect to="/not-found"/>
            </Switch>
            </Router>
        </div>
        )
    }

}

export default App;