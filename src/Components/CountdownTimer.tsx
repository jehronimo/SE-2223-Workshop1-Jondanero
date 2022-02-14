import React, {useEffect, useState }from "react";
import './CountdownTimer.css'

interface CountdownTimerProps {
    endDate : Date
}

export default function CountdownTimer({ endDate }: CountdownTimerProps) {
    const [time, setTime] = useState("")
    useEffect(() => {
        const countdown = setInterval( () => {
            const now = new Date().getTime();
            const difference = endDate.getTime() - now;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(difference % (1000 * 60) / 1000);
            setTime(days + ":" + hours + ":" + minutes + ":" + seconds );

            if (difference === 0) {
                return function cleanup() {
                    clearInterval(countdown);
                }
            }
        }, 1000)
    },[])
    return (
        <div className="countdown-timer">
            <div >{time}</div>
        </div>
        
    )
}