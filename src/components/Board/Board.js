import React from 'react';

import './Board.css';
import Tile from './Tile';
import WinGame from './WinGame';

import { canMakeAMove, rearrangedThePuzzle, checkIsPuzzlsSolved } from '../../game-logic/helpers';

// const rightOrder = '123456780';

const rightOrder = {
    easy: '123456780',
    medium: '1234567891011121314150',
    hard: '1234567891011121314151617181920212223240',
}


const moveCoordinates = {};

function Board(props) {

    const [puzzleBoard, setPuzzleBoard] = React.useState(props.puzzle.puzzleForm);
    const [coordinates, setCoordinates] = React.useState(props.puzzle.coordinates);
    const [win, setWin] = React.useState(false);


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

            if (checkIsPuzzlsSolved(newPuzzleForm, rightOrder[props.difficulty])) {
                // props.setWinHandler();
                setWin(true);
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
                {win
                    ? <WinGame />
                    : puzzleBoard.map((tile, idx) =>
                        <Tile
                            key={tile}
                            id={tile}
                            value={tile}
                            index={idx}
                            difficulty={props.difficulty}
                            moveTileHandler={moveTileHandler}
                        />)
                }

            </div>
        </div>
    );
}

export default Board;