import { useState } from 'react';

const colors = ['red', 'blue', 'yellow', 'green', 'salmon']

function Color() {

    const [currentColor, setCurrentColor] = useState(colors[0])


    return (
      <div className="Color">
        <h1>{currentColor}</h1>
        <ul>
          {colors.map((color, index) => 
            <li key={index}>
              <p>{color}</p>
              <button onClick={() => setCurrentColor(color)}>Pick color</button>
            </li>
          ) }
        </ul>
      </div>
    );
  }

  export default Color;

