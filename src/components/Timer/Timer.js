import React from "react";
import { usePuzzleContext } from "../../contexts/PuzzleContext";

import './Timer.styles.css';

const Timer = () => {
    const { isTimerRunnig, timer, setTimer } = usePuzzleContext();

    let minutes, seconds = '';

    React.useEffect(() => {
        let time;
        if (isTimerRunnig) {
            time = setTimeout(() => {
                setTimer((oldTime) => oldTime + 1);
            }, 1000);
        }

        return () => {
            clearTimeout(time);
        }
    }, [timer, isTimerRunnig]);

    minutes = Math.floor(timer / 60);

    if (minutes === 0) {
        seconds = timer;
    } else {
        seconds = timer - (minutes * 60);
    }

    minutes = minutes.toString().length === 1 ? '0' + minutes.toString() : minutes ;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds ;

    return (
        <div className="timer">{`${minutes} : ${seconds}`}</div>
    );
};

export default Timer;