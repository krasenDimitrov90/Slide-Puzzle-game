import React from 'react';
import { Navigate, Link } from 'react-router-dom';

import './Board.css';
import Tile from '../Tile/Tile';
import WinGame from '../WinGame/WinGame';
import Button from '../Button/Button';

import { canMakeAMove, rearrangedThePuzzle, checkIsPuzzlsSolved } from '../../game-logic/helpers';


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

    const resetBtnHandler = () => {
        setPuzzleBoard(props.puzzle.puzzleForm);
        setCoordinates(props.puzzle.coordinates);
    }


    function moveTileHandler(id) {
        let blockToMoveCoordinates = coordinates[id];
        let x = Number(blockToMoveCoordinates[0]);
        let y = Number(blockToMoveCoordinates[2]);

        let canMove = canMakeAMove(moveCoordinates, coordinates, x, y);

        if (canMove) {
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

            if (checkIsPuzzlsSolved(newPuzzleForm, rightOrder[props.difficulty])) {
                setWin(true);
            } else {
                setPuzzleBoard((oldPuzzle) => {
                    return newPuzzleForm;
                });
            }
        }
    }

    return (
        <>
            <div className='board'>
                <div className='row'>
                    {win 
                        ? <Navigate to="/win-game" />
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
            <div className='buttons' >
                <Button className="reset-btn" onClick={resetBtnHandler} >Reset</Button>
                <Link to="/" className="change-level-btn" >Change level</Link>
            </div>
        </>
    );
}

export default Board;