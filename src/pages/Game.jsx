import React from 'react'
import Confetti from 'react-confetti'
import { nanoid } from 'nanoid'
import { Die, Tracker, User } from '../components'
import { useLocation } from 'react-router-dom';

function Game() {
    const [dice, setDice] = React.useState(allNewDice())
    // Game end state
    const [tenzies, setTenzies] = React.useState(false)
    // Tracker
    const [rolls, setRolls] = React.useState(0);
    const [time, setTime] = React.useState(0);
    const [bestTime, setBestTime] = React.useState(localStorage.getItem('bestTime') || 0);
    const [data, setData] = React.useState({
        "name": null,
        "recordTime": null,
        "time": null,
        "rolls": null
    })

    // const URL = "http://ec2-18-212-191-193.compute-1.amazonaws.com:8080/"
    const URL = "http://localhost:8080/"

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    function formatDate(date) {
        return (
            [
                date.getFullYear(),
                padTo2Digits(date.getMonth() + 1),
                padTo2Digits(date.getDate()),
            ].join('-') +
            'T' +
            [
                padTo2Digits(date.getHours()),
                padTo2Digits(date.getMinutes()),
                padTo2Digits(date.getSeconds()),
            ].join(':')
        );
    }

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
            // Send a record to database
            const endpoint = URL + "api/record/add"
            // send record to databse
            fetch(endpoint, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                // .then((response) => response.json())
                .then((response) => {
                    console.log(response)
                    // response.json()
                })
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
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
        console.log(data, formatDate(new Date()), time, rolls);
    }, [tenzies, time])

    const location = useLocation();
    React.useEffect(() => {
        setData((prevData) => (
            { name: location.state.username, recordTime: formatDate(new Date()), time: time, rolls: rolls }
        ))
        // console.log(data);
    }, [time, rolls])

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