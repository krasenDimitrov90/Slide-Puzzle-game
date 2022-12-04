import React from "react";
import { useNavigate } from 'react-router-dom';

import './Difficlulty.css';
import Button from "../Button/Button";
import { PuzzleContext } from "../../contexts/PuzzleContext";
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

function Difficlulty() {

    const {setPuzzle, setDifficulty} = React.useContext(PuzzleContext);
    const navigate = useNavigate();

    const onClickHandler = (e) => {
        const difficulty = e.target.textContent.toLowerCase();

        const puzzle = new Puzzle(tiles[difficulty]);

        setPuzzle(puzzle);
        setDifficulty(difficulty);
        navigate('/board')
    };

    return (
        <div className="difficulty-btns">
            <Button className="difficulty-btn" onClick={onClickHandler} >EASY</Button>
            <Button className="difficulty-btn" onClick={onClickHandler} >MEDIUM</Button>
            <Button className="difficulty-btn" onClick={onClickHandler} >HARD</Button>
        </div>
    );
}

export default Difficlulty;