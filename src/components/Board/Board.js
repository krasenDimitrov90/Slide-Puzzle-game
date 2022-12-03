import React from 'react';

import './Board.css';
import Tile from './Tile';
import Puzzle from '../../game-logic/puzzle';

// const rightOrder = '123456780';

const tiles = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 0,
];

const shuffled = new Puzzle(tiles)
console.log(shuffled.checkIsSolveble());


function rearrangedThePuzzle(oldPuzzleForm, id) {
    let newPuzzle = [...oldPuzzleForm];
    let blockIndex = newPuzzle.findIndex(x => x === id);
    let emptyIndex = newPuzzle.findIndex(x => x === 0);
    [newPuzzle[blockIndex], newPuzzle[emptyIndex]] = [newPuzzle[emptyIndex], newPuzzle[blockIndex]];

    return newPuzzle;
}

const moveCoordinates = {};

function canMakeAMove(moveCoordinates, currentCoordinates, x, y) {
    moveCoordinates.moveLeftCoordinates = `${x}-${y - 1}`;
    moveCoordinates.moveRightCoordinates = `${x}-${y + 1}`;
    moveCoordinates.moveUpCoordinates = `${x - 1}-${y}`;
    moveCoordinates.moveDownCoordinates = `${x + 1}-${y}`;

    return Object.values(moveCoordinates).some(c => c === currentCoordinates[0]);
}

function checkIsPuzzleSolved(puzzle, rightOrder = '123456780') {
    return puzzle.join('') === rightOrder;
}

function Board(props) {

    const [puzzle, setPuzzle] = React.useState(shuffled.puzzleForm);
    const [coordinates, setCoordinates] = React.useState(shuffled.coordinates);

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

            let newPuzzleForm = rearrangedThePuzzle(puzzle, id);

            if (checkIsPuzzleSolved(newPuzzleForm)) {
                props.setWinHandler();
            } else {
                setPuzzle((oldPuzzle) => {
                    return newPuzzleForm;
                });
            }
        }
    }

    return (
        <div className='board'>
            <div className='row'>
                {puzzle.map((tile, idx) =>
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