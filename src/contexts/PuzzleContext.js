import React from "react";

export const PuzzleContext = React.createContext();

export default function PuzzleProvider({ children }) {
    const [puzzle, setPuzzle] = React.useState({});
    const [difficulty, setDifficulty] = React.useState('');

    const preparePuzzleHandler = (puzzle) => {
        setPuzzle(puzzle);
    }

    const setDifficultyHandler = (difficulty) => {
        setDifficulty(difficulty)
    }

    return (
        <PuzzleContext.Provider
            value={{
                puzzle,
                setPuzzle,
                difficulty,
                setDifficulty,
                preparePuzzleHandler,
                setDifficultyHandler,
            }}
        >
            {children}
        </PuzzleContext.Provider>
    );
}