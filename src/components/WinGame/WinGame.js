import React from "react";
import {Link} from 'react-router-dom';

import './WinGame.css';

function WinGame(props) {

    const clickHandler = () => {
        // props.setWinHandler(false);
        props.setDifficultyHandler('');
    }

    return (
        <div className="win-game">
            <h2 style={{ 'fontSize': '50px' }} >Congrats!</h2>
            <Link to="/" onClick={clickHandler} className="play-again-btn" >Play again</Link>
        </div>
    );
}

export default WinGame;