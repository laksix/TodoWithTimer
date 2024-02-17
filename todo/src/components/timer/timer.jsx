import React, {useState,useEffect} from "react";


const Timer = () => {
    const [timeLeft,setTimeLeft] = useState(2*60);
    const minutes = getTime(Math.floor(timeLeft/60));
    const seconds = getTime(timeLeft - minutes *60);
    const [isCounting,setIsCouning] = useState(false);
    useEffect(() => {
      const interval = setInterval(() => {
        isCounting &&
        setTimeLeft((timeLeft) => {
         timeLeft >- 1 ? timeLeft - 1: 0
        })
      },1000);
      return () => {
        clearInterval(interval)
      }
    },[isCounting])
    const handleStart = () => {
      setIsCouning(true)
    };
    const handleStop = () => {
      return null
    };
    const getTime = (time) => time.toString().padStart(2,'0')

    return (
        <div>
             <button className="icon icon-play" onClick={handleStart}></button>
              <button className="icon icon-pause" onClick={handleStop}></button>
               <span className='time-left'>{`${minutes}:${seconds}`}</span>
        </div>
    )
}
export default Timer