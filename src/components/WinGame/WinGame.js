import React from "react";
import { useNavigate } from "react-router-dom";

import './WinGame.css';
import Button from "../Button/Button";
import { usePuzzleContext } from "../../contexts/PuzzleContext";

function WinGame() {
    const { bestTime } = usePuzzleContext();
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate("/difficulty");
    }

    return (
        <div className="win-game">
            <h2  className="win-animate" style={{ 'fontSize': '50px' }} >Congrats!</h2>
            <p className="best-time">Your time is <span>{bestTime}</span></p>
            <Button className='play-again-btn' onClick={clickHandler} >Play again</Button>
        </div>
    );
}

export default WinGame;