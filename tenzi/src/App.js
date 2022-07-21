// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Die from './Die';
import { nanoid } from 'nanoid'


function App(){
  // Create an array of 10 objects
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        id: nanoid(),  // generate random id as unique key
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      });
    }
    return newDice
  }

  // Re-roll all 10 dice
  function rollDice(event) {
    setDice(() => allNewDice())
  }

  // Map arry to 10 Die components with state
  const [dice, setDice] = React.useState(allNewDice())
  const diceElements = dice.map(die => (
    <Die key={die.id} value={die.value} />
  ))

  console.log(dice)


  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-button' onClick={rollDice}>Roll</button>
    </main>  
  )
}

export default App;

// ---- initial App() ----
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }