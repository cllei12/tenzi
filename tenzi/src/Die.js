import React from 'react';

export default function Die(props) {
    //  Add conditional styling to the Die component so that if it's held (isHeld === true)
    // its background color changes to light green (#59E391)
    const styles = {
        // backgroundColor: dom prop
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className='die-face' 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className='die-num'>{props.value}</h2>
        </div>
    )
}