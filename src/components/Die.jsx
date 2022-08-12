import React from 'react';

export default function Die(props) {
    //  Add conditional styling to the Die component so that if it's held (isHeld === true)
    // its background color changes to light green (#59E391)
    const styles = {
        // backgroundColor: dom prop
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    const die = (dieNum) => {
        const dot = (<div className='dot' class='rounded-full bg-black h-2 w-2'></div>)
        switch (dieNum) {
            case 1:
                return (
                    <div className='die-num'>
                        {dot}
                    </div>
                )
            case 2:
                return (
                    <div className='die-num' class='flex justify-between p-2 rotate-45'>
                        {dot}
                        {dot}
                    </div>
                )
                
            case 3:
                return (
                    <div className='die-num'>
                        {dot}
                        {dot}
                        {dot}
                    </div>
                )
            case 4:
                return (
                    <div className='die-num'>
                        {dot}{dot}
                        {dot}{dot}
                    </div>
                )
            case 5:
                return(
                    <div className='die-num'>
                        {dot}{dot}
                        {dot}
                        {dot}{dot}
                    </div>
                )
            case 6:
                return (
                    <div className='die-num'>
                    {dot}{dot}{dot}
                    {dot}{dot}{dot}
                </div>  
                )
            default:
                break;
        }
    }

    return (
        <div
            className='die-face'
            style={styles}
            onClick={props.holdDice}
        >
            <h1 className='die-num' class='text-2xl font-bold'>
                {props.value}
            </h1>
        </div>
    )
}