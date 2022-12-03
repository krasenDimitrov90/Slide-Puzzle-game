import React from "react";

import './Home.css';
import Puzzle from "../../game-logic/puzzle";

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

function Home({ preparePuzzleHandler, setDifficultyHandler }) {

    const onClickHandler = (e) => {
        const difficulty = e.target.textContent.toLowerCase();

        const puzzle = new Puzzle(tiles[difficulty]);

        preparePuzzleHandler(puzzle);
        setDifficultyHandler(difficulty);
    };

    return (
        <div className="difficulty-btns">
            <button className="difficulty-btn" onClick={onClickHandler} >EASY</button>
            <button className="difficulty-btn" onClick={onClickHandler} >MEDIUM</button>
            <button className="difficulty-btn" onClick={onClickHandler} >HARD</button>
        </div>
    );
}

export default Home;