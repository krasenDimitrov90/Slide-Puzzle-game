import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { usePuzzleContext } from '../../contexts/PuzzleContext';

import './GamePlay.css';
import Button from '../Button/Button';

import PuzzleGrid from '../PuzzleGrid/PuzzleGrid';

function GamePlay() {

    const navigate = useNavigate();

    const { puzzle, resetGameHandler, isLoading, setIsloading } = usePuzzleContext();

    const resetHandler = React.useCallback(() => {
        resetGameHandler();
    }, []);

    const navigateHandler = React.useCallback(() => {
        navigate('/difficulty');
    }, []);

    return (
        <>
            <div className='grid'>
                <div className='row'>
                    {puzzle && <PuzzleGrid />}
                    {!puzzle &&  <Navigate to="/difficulty" />}

                </div>
            </div>
            <div className='buttons' >
                <Button className="reset-btn" onClick={resetHandler} >Reset</Button>
                <Button className="change-level-btn" onClick={navigateHandler}>Change level</Button>
            </div>
        </>
    );
}

export default GamePlay;