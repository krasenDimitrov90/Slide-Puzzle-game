import React from "react";

export const PuzzleContext = React.createContext();
export const usePuzzleContext = () => React.useContext(PuzzleContext);


export default function PuzzleProvider({ children }) {

    const [puzzle, setPuzzle] = React.useState(null);
    const [coordinates, setCoordinates] = React.useState(null);

    const [initPuzzleData, setInitPuzzleData] = React.useState(null);

    const [difficulty, setDifficulty] = React.useState('');
    const [pixels, setPixels] = React.useState(120);

    const [timer, setTimer] = React.useState(0);
    const [isTimerRunnig, setIsTimerRunnig] = React.useState(false);

    const [bestTime, setBestTime] = React.useState('');

    const bestTimeSeter = (time) => {
        let minutes, seconds = '';
        minutes = Math.floor(time / 60);

        if (minutes === 0) {
            seconds = time;
        } else {
            seconds = time - (minutes * 60);
        }

        minutes = minutes.toString().length === 1 ? '0' + minutes.toString() : minutes;
        seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;

        setBestTime(`${minutes} : ${seconds}`)
    };

    const resetGameHandler = () => {
        setTimer(0);
        setIsTimerRunnig(false);
        setPuzzle(initPuzzleData.puzzleForm);
        setCoordinates(initPuzzleData.coordinates);
    }

    return (
        <PuzzleContext.Provider
            value={{
                pixels,
                setPixels,
                difficulty,
                setDifficulty,
                puzzle,
                setPuzzle,
                coordinates,
                setCoordinates,
                initPuzzleData,
                timer,
                setTimer,
                bestTime,
                bestTimeSeter,
                isTimerRunnig,
                setIsTimerRunnig,
                setInitPuzzleData,
                resetGameHandler,
            }}
        >
            {children}
        </PuzzleContext.Provider>
    );
}