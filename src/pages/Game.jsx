import React from 'react'
import Confetti from 'react-confetti'
import { nanoid } from 'nanoid'
import { Die, Tracker, User } from '../components'

function Game() {
    const [dice, setDice] = React.useState(allNewDice())
    // Game end state
    const [tenzies, setTenzies] = React.useState(false)
    // Tracker
    const [rolls, setRolls] = React.useState(0);
    const [time, setTime] = React.useState(0);
    const [bestTime, setBestTime] = React.useState(localStorage.getItem('bestTime') || 0);


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
        // console.log(id)
        if (tenzies) {  // Game ends, restart
            setDice(allNewDice())
            setTenzies(false)
            setRolls(0)
            setTime(0)
            setBestTime(localStorage.getItem("bestTime"));
        } else {  // Re-roll all unheld dice
            setDice(prevDice => prevDice.map(die => {
                return die.isHeld ?
                    die :
                    { ...die, value: Math.ceil(Math.random() * 6) }
            }))
            setRolls(prevRolls => prevRolls + 1)
        }
    }

    // Function holdDice(id) -> set isHeld prop to flip dice
    function holdDice(id) {
        // console.log(id)
        setDice(prevDice => prevDice.map(die => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die
        }))
    }

    // Map arry to 10 Die components with state
    const diceElements = dice.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
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

    React.useEffect(() => {
        // Display the time once every second. Use clearInterval() to stop the time
        if (!tenzies) {
            let tick = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1000)
            // Clean up the tick
            return () => {
                clearInterval(tick)
            }
        } else {
            setTime(prevTime => prevTime)
            const currentBestTime = localStorage.getItem("bestTime");
            if (!currentBestTime) {
                localStorage.setItem("bestTime", JSON.stringify(time));
            } else if (time < currentBestTime) {
                setBestTime(() => time)
            }
        }
    }, [tenzies, time])

    return (
        <div class='flex justify-center items-center'>
            <main class='flex justify-around bg-slate-50'>
                {tenzies && <Confetti />}
                <h1 className="title" class=' text-3xl font-bold'>Tenzies</h1>
                <p className="instructions" class='font-normal mx-6 mt-0 text-center'>
                    Roll until all dice are the same. <br />
                    Click each number to freeze it at its current value between rolls.
                </p>

                <Tracker time={time} rolls={rolls} bestTime={bestTime} />

                <div className='dice-container'>
                    {diceElements}
                </div>
                <button className='roll-button' onClick={rollDice}>
                    {tenzies ? "New Game" : "Roll"}
                </button>
            </main>
        </div>
    )
}

export default Game