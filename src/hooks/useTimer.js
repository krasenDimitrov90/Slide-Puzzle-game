import React from "react";

const useTimer = () => {
    const [timer, setTimer] = React.useState(0);
    const [isTimerRunnig, setIsTimerRunnig] = React.useState(false);

    const startTimer = () => setIsTimerRunnig(true);
    const stopTimer = () => setIsTimerRunnig(false);
    const resetTimer = () => setTimer(0);

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

    minutes = minutes.toString().length === 1 ? '0' + minutes.toString() : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;


    return {
        minutes,
        seconds,
        isTimerRunnig,
        startTimer,
        stopTimer,
        resetTimer,
    };
};

export default useTimer;