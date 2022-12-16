import React from "react";
import useTimer from "../hooks/useTimer";

export const PuzzleContext = React.createContext();
export const usePuzzleContext = () => React.useContext(PuzzleContext);


export default function PuzzleProvider({ children }) {

    const [puzzle, setPuzzle] = React.useState(null);
    const [coordinates, setCoordinates] = React.useState(null);

    const [initPuzzleData, setInitPuzzleData] = React.useState(null);

    const [difficulty, setDifficulty] = React.useState('');
    const [pixels, setPixels] = React.useState(120);

    const [bestTime, setBestTime] = React.useState('');

    const { minutes,
        seconds,
        isTimerRunnig,
        startTimer,
        stopTimer,
        resetTimer, } = useTimer();

    const bestTimeSeter = (time) => {
        setBestTime(`${minutes} : ${seconds}`);
        resetTimer();
    };
   

    const resetGameHandler = () => {
        resetTimer(0);
        stopTimer(false);
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
                bestTime,
                bestTimeSeter,
                setInitPuzzleData,
                resetGameHandler,

                minutes,
                seconds,
                isTimerRunnig,
                startTimer,
                stopTimer,
                resetTimer,
            }}
        >
            {children}
        </PuzzleContext.Provider>
    );
}