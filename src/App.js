import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Difficlulty from './components/Difficlulty/Difficlulty';
import Board from './components/Board/Board';
import WinGame from './components/WinGame/WinGame';
import PuzzleProvider from './contexts/PuzzleContext';

const App = () => {

    return (
        <PuzzleProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={< Home />}> </Route>
                    <Route path='/difficulty' element={< Difficlulty />}> </Route>
                    <Route path='/board' element={< Board />} ></Route>
                    <Route path='/win-game' element={< WinGame />} ></Route>
                </Routes>
            </BrowserRouter>
        </PuzzleProvider >
    );
}

export default App;
