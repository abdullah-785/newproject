import React, { useState } from 'react';
import './App.css';
import Message from './message.js';
<<<<<<< HEAD
//import Sweet from './sweet.js';
=======
import Sweet from './sweet.js';
>>>>>>> cbf96e698c1aa07d2d9977dfcdd7677ca98c71f8
import { render } from '@testing-library/react';

function App() {
  var a=1;
  let [count, setCount] = useState(a);
  let [isMorning, setMorning] = useState(true);
  return(
          <div className={`box ${isMorning ? 'dayLight' : ''}`}>
            <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
            <button onClick={()=> setMorning(!isMorning)}>
              Update Day
            </button>

            <Message counter={count}/>
            <button onClick={()=> setCount(++count)}>
              Update count
            </button>
            <br></br>
            <br></br>
            <button onClick={()=> setCount(--count) }>
              Decrease count
            </button>
            <br></br>
            <br></br>
            <button onClick={()=> setCount(a)}>
              Reset count
            </button>
          </div>

  );
}


<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> cbf96e698c1aa07d2d9977dfcdd7677ca98c71f8
