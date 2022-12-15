import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { usePuzzleContext } from '../../contexts/PuzzleContext';

import './GamePlay.css';
import Button from '../Button/Button';

import PuzzleGrid from '../PuzzleGrid/PuzzleGrid';
import Timer from '../Timer/Timer';

function GamePlay() {

    const navigate = useNavigate();

    const { puzzle, resetGameHandler, setTimer, setIsTimerRunnig} = usePuzzleContext();

    const resetHandler = React.useCallback(() => {
        setIsTimerRunnig(false);
        setTimer(0);
        resetGameHandler();
    }, []);

    const navigateHandler = React.useCallback(() => {
        navigate('/difficulty');
    }, []);

    return (
        <>
            <Timer />
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