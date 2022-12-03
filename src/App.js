import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Difficlulty from './components/Difficlulty/Difficlulty';
import Board from './components/Board/Board';
import WinGame from './components/WinGame/WinGame';

const App = () => {

    const [puzzle, setPuzzle] = React.useState({});
    const [difficulty, setDifficulty] = React.useState('');
    const [win, setWin] = React.useState(false);

    const setWinHandler = (condition) => {
        setWin(condition);
    }

    const preparePuzzleHandler = (puzzle) => {
        setPuzzle(puzzle);
    }

    const setDifficultyHandler = (difficulty) => {
        setDifficulty(difficulty)
    }

    const isPuzzleSet = Object.keys(puzzle).length > 0;

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'
                    element={< Difficlulty
                        setDifficultyHandler={setDifficultyHandler}
                         preparePuzzleHandler={preparePuzzleHandler}
                    />}
                >

                </Route>
                <Route path='/board'
                    element={< Board
                        puzzle={puzzle}
                        difficulty={difficulty}
                        setWinHandler={setWinHandler}
                        setDifficultyHandler={setDifficultyHandler}
                        preparePuzzleHandler={preparePuzzleHandler}
                    />}
                >

                </Route>
                <Route path='/win-game'
                    element={< WinGame
                        setWinHandler={setWinHandler}
                        setDifficultyHandler={setDifficultyHandler}
                    />}
                >

                </Route>
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
    );
}

export default App;
