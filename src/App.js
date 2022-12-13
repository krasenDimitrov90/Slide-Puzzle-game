import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PuzzleProvider from './contexts/PuzzleContext';

import Home from './components/Home/Home';
import Difficlulty from './components/Difficlulty/Difficlulty';
import Board from './components/Board/Board';
import WinGame from './components/WinGame/WinGame';

const App = () => {

    return (
        <PuzzleProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={< Home />} />
                    <Route path='/difficulty' element={< Difficlulty />} />
                    <Route path='/board' element={< Board />} />
                    <Route path='/win-game' element={< WinGame />} />
                </Routes>
            </BrowserRouter>
        </PuzzleProvider>
    );
}

export default App;
