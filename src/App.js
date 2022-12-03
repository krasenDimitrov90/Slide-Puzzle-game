import React from 'react';

import Home from './components/Home/Home';
import Board from './components/Board/Board';
import WinGame from './components/Board/WinGame';

const App = () => {

    const [puzzle, setPuzzle] = React.useState({});
    const [difficulty, setDifficulty] = React.useState('');


    // const setWinHandler = () => {
    //     setWin(true);
    // }

    const preparePuzzleHandler = (puzzle) => {
        setPuzzle(puzzle);
    }

    const setDifficultyHandler = (difficulty) => {
        setDifficulty(difficulty)
    }

    const isPuzzleSet = Object.keys(puzzle).length > 0;

    return (
        <>
            {!isPuzzleSet &&
                <Home
                    preparePuzzleHandler={preparePuzzleHandler}
                    setDifficultyHandler={setDifficultyHandler}
                />
            }
            {isPuzzleSet &&
                <Board puzzle={puzzle}
                    difficulty={difficulty}
                />
            }
        </>
    );
}

export default App;
