import React from "react";
import {Link} from 'react-router-dom';
import { PuzzleContext } from "../../contexts/PuzzleContext";

import './WinGame.css';

function WinGame() {

    const {setDifficulty} = React.useContext(PuzzleContext);

    const clickHandler = () => {
        // props.setWinHandler(false);
        setDifficulty('');
    }

    return (
        <div className="win-game">
            <h2 style={{ 'fontSize': '50px' }} >Congrats!</h2>
            <Link to="/" onClick={clickHandler} className="play-again-btn" >Play again</Link>
        </div>
    );
}

export default WinGame;