// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Die from './Die';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App(){
  const [dice, setDice] = React.useState(allNewDice())
  // Game end state
  const [tenzies, setTenzies] = React.useState(false)

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

  // Flip dice when button is triggered
  function rollDice(id) {
    console.log(id)
    if (tenzies) {  // Game ends, restart
      setDice(allNewDice())
      setTenzies(false)
    } else {  // Re-roll all unheld dice
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? 
          die : 
          {...die, value: Math.ceil(Math.random() * 6)}
      }))
    }
  }

  // Function holdDice(id) -> set isHeld prop to flip dice
  function holdDice(id) {
    console.log(id)
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  // Map arry to 10 Die components with state
  const diceElements = dice.map(die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>
  ))

  // Check the dice array for these winning conditions:
  // All dice are held, and all dice have the same value
  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(() => true)
      console.log("Won!")
    } 
  }, [dice])

  return (
    <main>
      {tenzies && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each number to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-button' onClick={rollDice}>
          {tenzies? "New Game" : "Roll"}
      </button>
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