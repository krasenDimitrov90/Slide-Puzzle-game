import React from 'react';

import './Board.css';
import Tile from './Tile';
import Puzzle from '../../game-logic/puzzle';

import { canMakeAMove, rearrangedThePuzzle, checkIsPuzzlsSolved } from '../../game-logic/helpers';

// const rightOrder = '123456780';

const tiles = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 0,
];

const puzzle = new Puzzle(tiles)
console.log(puzzle.checkIsSolveble());


const moveCoordinates = {};

function Board(props) {

    const [puzzleBoard, setPuzzleBoard] = React.useState(puzzle.puzzleForm);
    const [coordinates, setCoordinates] = React.useState(puzzle.coordinates);

    function moveTileHandler(id) {
        let blockToMoveCoordinates = coordinates[id];
        let x = Number(blockToMoveCoordinates[0]);
        let y = Number(blockToMoveCoordinates[2]);

        let canMove = canMakeAMove(moveCoordinates, coordinates, x, y);

        if (canMove) {
            let newBlockCoordinates = coordinates[0];
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

            if (checkIsPuzzlsSolved(newPuzzleForm)) {
                props.setWinHandler();
            } else {
                setPuzzleBoard((oldPuzzle) => {
                    return newPuzzleForm;
                });
            }
        }
    }

    return (
        <div className='board'>
            <div className='row'>
                {puzzleBoard.map((tile, idx) =>
                    <Tile
                        key={tile}
                        id={tile}
                        value={tile}
                        index={idx}
                        moveTileHandler={moveTileHandler}
                    />)
                }
            </div>
        </div>
    );
}

export default Board;