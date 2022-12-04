import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Difficlulty from './components/Difficlulty/Difficlulty';
import Board from './components/Board/Board';
import WinGame from './components/WinGame/WinGame';
import PuzzleProvider from './contexts/PuzzleContext';

const App = () => {

    const [puzzle, setPuzzle] = React.useState({});
    const [difficulty, setDifficulty] = React.useState('');

    const preparePuzzleHandler = (puzzle) => {
        setPuzzle(puzzle);
    }

    const setDifficultyHandler = (difficulty) => {
        setDifficulty(difficulty)
    }


    return (
        <PuzzleProvider>
            <BrowserRouter>
                <Routes>

                    <Route path='/' element={< Difficlulty />}> </Route>
                    <Route path='/board' element={< Board />} ></Route>
                    <Route path='/win-game' element={< WinGame />} ></Route>

                    {/* {difficulty === '' &&
                <Difficlulty
                    preparePuzzleHandler={preparePuzzleHandler}
                    setDifficultyHandler={setDifficultyHandler}
                />
            }
            {isPuzzleSet &&
                <Board
                    puzzle={puzzle}
                    difficulty={difficulty}
                    setWinHandler={setWinHandler}
                    setDifficultyHandler={setDifficultyHandler}
                    preparePuzzleHandler={preparePuzzleHandler}
                />
            }
            {win &&
                <WinGame
                    setWinHandler={setWinHandler}
                    setDifficultyHandler={setDifficultyHandler}
                />} */}
                </Routes>
            </BrowserRouter>
        </PuzzleProvider >
    );
}

export default App;
