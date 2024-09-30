import React from 'react'
import Countdown from 'react-countdown';

const CountDownTimer = () => {
 
 const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <span>completed</span>;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
    };
     return (
   <Countdown
    date={1724239079967 + 
       1724239226822}
    renderer={renderer}
  />
  )
}

export default CountDownTimer
 

