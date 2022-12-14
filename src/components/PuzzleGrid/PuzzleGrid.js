import React from "react";
import { useNavigate } from "react-router-dom";
import { usePuzzleContext } from "../../contexts/PuzzleContext";
import Tile from "./Tile";
import { findMoveDirection, rearrangedThePuzzle, checkIsPuzzlsSolved } from '../../game-logic/helpers';



function PuzzleGrid(props) {

    const navigate = useNavigate();

    const { puzzle, coordinates, setPuzzle, setCoordinates, difficulty, pixels } = usePuzzleContext();

    const time = pixels / 0.3;

    const moveTileHandler = (event, id, setDirectionHandler) => {
        let blockToMoveCoordinates = coordinates[id];
        let x = Number(blockToMoveCoordinates[0]);
        let y = Number(blockToMoveCoordinates[2]);

        let moveDirection = findMoveDirection(coordinates, x, y);

        if (moveDirection) {

            let newBlockCoordinates = coordinates[0]; // this is the coordinates of the empty block ( 0 )
            let newEmptyBlockCoordinates = blockToMoveCoordinates;

            setCoordinates((oldCoordinates) => {
                let newCoordinates = {
                    ...oldCoordinates,
                    [id]: newBlockCoordinates,
                    0: newEmptyBlockCoordinates,
                }
                return newCoordinates;
            });

            let newPuzzleForm = rearrangedThePuzzle(puzzle, id);

            if (checkIsPuzzlsSolved(newPuzzleForm, difficulty)) {
                setPuzzle((oldPuzzle) => {
                    return newPuzzleForm;
                });
                setDirectionHandler(moveDirection);
                setTimeout(() => {
                    navigate('/win-game');
                }, time);
            } else {
                setPuzzle((oldPuzzle) => {
                    return newPuzzleForm;
                });
                setDirectionHandler(moveDirection);
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
                moveTileHandler={moveTileHandler}
            />)
    );
}

export default PuzzleGrid;