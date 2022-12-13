import React from "react";

export const PuzzleContext = React.createContext();

export const usePuzzleContext = () => React.useContext(PuzzleContext);

export default function PuzzleProvider({ children }) {
    const [puzzle, setPuzzle] = React.useState({});
    const [difficulty, setDifficulty] = React.useState('');
    const [pixels, setPixels] = React.useState(120);

    const preparePuzzleHandler = (puzzle) => {
        setPuzzle(puzzle);
    }

    const setDifficultyHandler = (difficulty) => {
        setDifficulty(difficulty)
    }

    const setPixelsHandler = (pixels) => {
        setPixels(pixels);
    }

    return (
        <PuzzleContext.Provider
            value={{
                pixels,
                puzzle,
                setPuzzle,
                difficulty,
                setDifficulty,
                preparePuzzleHandler,
                setDifficultyHandler,
                setPixelsHandler,
            }}
        >
            {children}
        </PuzzleContext.Provider>
    );
}