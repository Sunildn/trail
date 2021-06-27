import React from "react";
import Keypad from "./Keypad";
import Screen from "./Screen";
import Button from "./Button";
import "./css/calculator.css";


import { useState } from 'react';

function App() {

  const [expression, setExpression] = useState('');

  
  return (
    <div className='calculator'>
        <Screen expression={expression}/>
        <Keypad expression={expression} setExpression={setExpression}/>
    </div>
  );
}

export default App;