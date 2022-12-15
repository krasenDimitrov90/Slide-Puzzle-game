import React from "react";
import { useNavigate } from 'react-router-dom';

import './Difficlulty.css';
import Button from "../Button/Button";
import { usePuzzleContext } from "../../contexts/PuzzleContext";
import Puzzle from "../../game-logic/puzzle";

const pixels = {
    easy: 120,
    medium: 90,
    hard: 72,
};


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
        13, 14, 15, 0,
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

    const {setPuzzle, setInitPuzzleData, setCoordinates, setDifficulty, setPixels} = usePuzzleContext();
    const navigate = useNavigate();

    const onClickHandler = (e) => {
        const difficulty = e.target.textContent.toLowerCase();

        const puzzle = new Puzzle(tiles[difficulty]);

        setInitPuzzleData(puzzle);

        setPuzzle(puzzle.puzzleForm);
        setCoordinates(puzzle.coordinates); 
        
        setDifficulty(difficulty);
        setPixels(pixels[difficulty]);
        navigate('/game-play');

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