import React from "react";

export const PuzzleContext = React.createContext();

export const usePuzzleContext = () => React.useContext(PuzzleContext);

export default function PuzzleProvider({ children }) {
    const [puzzle, setPuzzle] = React.useState(null);
    const [coordinates, setCoordinates] = React.useState(null);

    const [initPuzzleData, setInitPuzzleData] = React.useState(null);

    const [difficulty, setDifficulty] = React.useState('');
    const [pixels, setPixels] = React.useState(120);

    const resetGameHandler = () => {
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
                setInitPuzzleData,
                resetGameHandler,
            }}
        >
            {children}
        </PuzzleContext.Provider>
    );
}