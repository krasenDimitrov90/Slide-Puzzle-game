import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { PuzzleContext } from '../../contexts/PuzzleContext';

import './Board.css';
import Tile from '../Tile/Tile';
import Button from '../Button/Button';

import { findMoveDirection, rearrangedThePuzzle, checkIsPuzzlsSolved } from '../../game-logic/helpers';

function Board() {

    const navigate = useNavigate();

    const { puzzle, difficulty, pixels } = React.useContext(PuzzleContext);

    const [puzzleBoard, setPuzzleBoard] = React.useState(puzzle.puzzleForm);
    const [coordinates, setCoordinates] = React.useState(puzzle.coordinates);

    const resetBtnHandler = () => {
        setPuzzleBoard(puzzle.puzzleForm);
        setCoordinates(puzzle.coordinates);
    }

    const time = pixels / 0.3;

    function moveTileHandler(event, id, setDirectionHandler) {
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

            let newPuzzleForm = rearrangedThePuzzle(puzzleBoard, id);

            if (checkIsPuzzlsSolved(newPuzzleForm, difficulty)) {
                setPuzzleBoard((oldPuzzle) => {
                    return newPuzzleForm;
                });
                setDirectionHandler(moveDirection);
                setTimeout(() => {
                    navigate('/win-game');
                }, time);
            } else {
                setPuzzleBoard((oldPuzzle) => {
                    return newPuzzleForm;
                });
                setDirectionHandler(moveDirection);
            }

        }
    }

    return (
        <>
            <div className='board'>
                <div className='row'>
                    {
                        puzzleBoard === undefined
                            ? <Navigate to="/difficulty" />
                            : puzzleBoard.map((tile, idx) =>
                                <Tile
                                    key={tile}
                                    id={tile}
                                    value={tile}
                                    index={idx}
                                    difficulty={difficulty}
                                    moveTileHandler={moveTileHandler}
                                />)
                    }
                </div>
            </div>
            <div className='buttons' >
                <Button className="reset-btn" onClick={resetBtnHandler} >Reset</Button>
                <Button className="change-level-btn" onClick={() => navigate('/difficulty')}>Change level</Button>
            </div>
        </>
    );
}

export default Board;