import React from "react";
import { Link } from 'react-router-dom';

import './Difficlulty.css';
import Puzzle from "../../game-logic/puzzle";
import Button from "../Button/Button";

const tiles = {
    easy: [
        1, 2, 3,
        4, 5, 6,
        7, 8, 0,
    ],

    medium: [
        1, 2, 3, 4,
        5, 6, 7, 8,
        9, 10, 11, 12,
        13, 14, 15, 0
    ],

    hard: [
        1, 2, 3, 4, 5,
        6, 7, 8, 9, 10,
        11, 12, 13, 14, 15,
        16, 17, 18, 19, 20,
        21, 22, 23, 24, 0,
    ],
}

function Difficlulty({ preparePuzzleHandler, setDifficultyHandler }) {

    const onClickHandler = (e) => {
        const difficulty = e.target.textContent.toLowerCase();

        const puzzle = new Puzzle(tiles[difficulty]);

        preparePuzzleHandler(puzzle);
        setDifficultyHandler(difficulty);
    };

    return (
        <div className="difficulty-btns">
            <Link to='/board' className="difficulty-btn" onClick={onClickHandler} >EASY</Link>
            <Link to='/board' className="difficulty-btn" onClick={onClickHandler} >MEDIUM</Link>
            <Link to='/board' className="difficulty-btn" onClick={onClickHandler} >HARD</Link>
        </div>
    );
}

export default Difficlulty;