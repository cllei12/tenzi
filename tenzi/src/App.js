// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Die from './Die';


function App(){
  // Create an array of 10 random numbers between 1-6 inclusive
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice
  }

  // Re-roll all 10 dice
  function rollDice(event) {
    setDice(() => allNewDice())
  }

  // Map arry to 10 Die components with state
  const [dice, setDice] = React.useState(allNewDice())
  const diceElements = dice.map(die => <Die value={die} />)


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