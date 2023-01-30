import React from "react";
import Tile from "./Tile";
import { useNavigate } from "react-router-dom";
import { usePuzzleContext } from "../../contexts/PuzzleContext";
import { findMoveDirection, rearrangedThePuzzle, checkIsPuzzlsSolved } from '../../game-logic/helpers';



function PuzzleGrid(props) {

    const navigate = useNavigate();

    const { puzzle,
        coordinates,
        setPuzzle,
        setCoordinates,
        difficulty,
        pixels,
        bestTimeSeter,

        isTimerRunnig,
        startTimer,
        stopTimer, } = usePuzzleContext();

    const time = pixels / 0.3; // the time needed for a tile to be moved

    const moveTileHandler = (event, id, setDirectionHandler) => {
        let tileToMoveCoordinates = coordinates[id];
        let x = Number(tileToMoveCoordinates[0]);
        let y = Number(tileToMoveCoordinates[2]);

        let moveDirection = findMoveDirection(coordinates, x, y);

        if (moveDirection) {

            let newTileCoordinates = coordinates[0]; // this is the coordinates of the empty block ( 0 )
            let newEmptyTileCoordinates = tileToMoveCoordinates;

            setCoordinates((oldCoordinates) => {
                let newCoordinates = {
                    ...oldCoordinates,
                    [id]: newTileCoordinates,
                    0: newEmptyTileCoordinates,
                }
                return newCoordinates;
            });

            let newPuzzleForm = rearrangedThePuzzle(puzzle, id);
            setDirectionHandler(moveDirection);

            if (checkIsPuzzlsSolved(newPuzzleForm, difficulty)) {
                stopTimer();
                setPuzzle(newPuzzleForm);

                setTimeout(() => {
                    bestTimeSeter();
                    navigate('/win-game');
                }, time);

            } else {
                setPuzzle(newPuzzleForm);
            }
        }
    }

    return (
        puzzle.map((tile, idx) =>
            <Tile
                key={tile}
                id={tile}
                value={tile}
                index={idx}
                difficulty={difficulty}
                startTimer={startTimer}
                isTimerRunnig={isTimerRunnig}
                moveTileHandler={moveTileHandler}
            />)
    );
}

export default PuzzleGrid;