import React from 'react'

const Tracker = (props) => {
  return (
    <div className='tracker' class='grid grid-cols-3 gap-10 justify-center items-center'>
      <div className='timer' class='flex flex-col items-center'>
        <h1>Time</h1>
        <p>{props.time} s</p>
      </div>
      <div className='rolls' class='flex flex-col items-center'>
        Rolls
        <p>{props.rolls}</p>
      </div>
      <div className='best-time' class='flex flex-col items-center'>
        Best Time
        <p>{props.bestTime} s</p>
      </div>
    </div>
  )
}

export default Tracker