import React from "react";

import './WinGame.css';
import Button from "../Button/Button";

function WinGame(props) {

    const clickHandler = () => {
        props.setWinHandler(false);
        props.setDifficultyHandler('');
    }

    return (
        <div className="win-game">
            <h2 style={{ 'fontSize': '50px' }} >Congrats!</h2>
            <Button onClick={clickHandler} className="play-again-btn" >Play again</Button>
        </div>
    );
}

export default WinGame;