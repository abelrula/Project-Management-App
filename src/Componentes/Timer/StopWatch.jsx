import React from 'react'
import { useStopwatch } from 'react-timer-hook';
import "./timer.css"
import { MdOutlinePauseCircleFilled, MdOutlinePlayCircleFilled } from 'react-icons/md';
import { BiReset } from 'react-icons/bi';

const StopWatch = () => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
    <div className='timer'>
      <div className='timer__time'>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
            {  isRunning && <MdOutlinePlayCircleFilled  color="green" onClick={ start }  />}
              <MdOutlinePauseCircleFilled  color="red" onClick={pause} />
              <BiReset onClick={reset} />
        </div>
  )
}

export default StopWatch