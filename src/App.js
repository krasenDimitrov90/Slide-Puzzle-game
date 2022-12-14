import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PuzzleProvider from './contexts/PuzzleContext';

import Home from './components/Home/Home';
import Difficlulty from './components/Difficlulty/Difficlulty';
import Game from './components/Game/Game';
import WinGame from './components/WinGame/WinGame';

const App = () => {
    
    return (
        <PuzzleProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={< Home />} />
                    <Route path='/difficulty' element={< Difficlulty />} />
                    <Route path='/board' element={< Game />} />
                    <Route path='/win-game' element={< WinGame />} />
                </Routes>
            </BrowserRouter>
        </PuzzleProvider>
    );
}

export default App;
