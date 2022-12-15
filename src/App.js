import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PuzzleProvider from './contexts/PuzzleContext';

import Home from './components/Home/Home';
import Difficlulty from './components/Difficlulty/Difficlulty';
import GamePlay from './components/GamePlay/GamePlay';
import WinGame from './components/WinGame/WinGame';

const App = () => {

    return (
        <PuzzleProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={< Home />} />
                    <Route path='/difficulty' element={< Difficlulty />} />
                    <Route path='/game-play' element={< GamePlay />} />
                    <Route path='/win-game' element={< WinGame />} />
                </Routes>
            </BrowserRouter>
        </PuzzleProvider>
    );
}

export default App;
