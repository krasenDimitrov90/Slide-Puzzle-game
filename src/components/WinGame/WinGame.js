import React from "react";
import { useNavigate } from "react-router-dom";

import './WinGame.css';
import Button from "../Button/Button";

function WinGame() {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate("/difficulty");
    }

    return (
        <div className="win-game">
            <h2 style={{ 'fontSize': '50px' }} >Congrats!</h2>
            <Button className='play-again-btn' onClick={clickHandler} >Play again</Button>
        </div>
    );
}

export default WinGame;