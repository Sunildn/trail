import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
//import PhoneDirectory from "./PhoneDirectory/PhoneDirectory.js"



//1. phonedirectory
//import PhoneDirectory from "./PhoneDirectory/PhoneDirectory.js"

//2. Counter
//import CounterApp from "./counter/CounterApp"
//import App from "./calculator/App"

// 5. router
import App from "./user details/App.js";
//<App/> use inside render



ReactDOM.render( <Router>
     <App/></Router>, document.getElementById('root'));
