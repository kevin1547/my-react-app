import './Counter.css';
import { useState } from 'react'
function Counter() {
  const [number, setNumber] = useState(0)
  return (
    <div className='container'>
      <h1>Counter</h1>
      <span
        className={`value ${number > 0 ? 'text-green' : 'text-red'} ${number === 0 && 'text-black'
          }`}
      >
        <div>{number}</div>
      </span>
      <header className='button-container'>
        {number > -5 &&
          <button onClick={() => setNumber(number - 1)}>decrease</button>
        }
        <button onClick={() => setNumber(0)}>return</button>

        {number < 5 &&
          <button onClick={() => setNumber(number + 1)}>increase</button>
        }
      </header>
    </div>
  )
}
export default Counter;