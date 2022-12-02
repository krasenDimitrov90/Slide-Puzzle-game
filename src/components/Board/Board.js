import React from 'react';

import './Board.css';
import Slide from './Slide';

const rightOrder = '12345678empty';

const initialSlides = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', 'empty',
];

const shuffled = initialSlides
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)


const initialCoordinates = {};

let blockIndex = 0;

for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
        initialCoordinates[shuffled[blockIndex++]] = `${row}-${col}`;
    }
}

const moveCoordinates = {};

function canMakeAMove(moveCoordinates, currentCoordinates, x, y) {
    moveCoordinates.moveLeftCoordinates = `${x}-${y - 1}`;
    moveCoordinates.moveRightCoordinates = `${x}-${y + 1}`;
    moveCoordinates.moveUpCoordinates = `${x - 1}-${y}`;
    moveCoordinates.moveDownCoordinates = `${x + 1}-${y}`;

    return Object.values(moveCoordinates).some(c => c === currentCoordinates['empty']);
}


function Board(props) {

    const [slides, setSlides] = React.useState(shuffled);
    const [coordinates, setCoordinates] = React.useState(initialCoordinates);

    let correctMove = null;

    console.log('in Board');

    function moveSlideHandler(id) {
        let blockToMoveCoordinates = coordinates[id];
        let x = Number(blockToMoveCoordinates[0]);
        let y = Number(blockToMoveCoordinates[2]);

        let canMove = canMakeAMove(moveCoordinates, coordinates, x, y);

        if (canMove) {
            let newBlockCoordinates = coordinates['empty'];
            let newEmptyBlockCoordinates = blockToMoveCoordinates;

            setCoordinates((oldCoordinates) => {
                let newCoordinates = {
                    ...oldCoordinates,
                    [id]: newBlockCoordinates,
                    'empty': newEmptyBlockCoordinates,
                }
                return newCoordinates;
            });

            setSlides((oldSlides) => {
                let newSlides = [...oldSlides];
                let blockIndex = newSlides.findIndex(x => x === id);
                let emptyIndex = newSlides.findIndex(x => x === 'empty');
                [newSlides[blockIndex], newSlides[emptyIndex]] = [newSlides[emptyIndex], newSlides[blockIndex]];

                if (newSlides.join('') === rightOrder) {
                    props.setWinHandler();
                }

                return newSlides;
            });
        }
    }

    return (
        <div className='board'>
            <div className='row'>
                {slides.map((slide, idx) =>
                    <Slide
                        key={slide}
                        id={slide}
                        value={slide}
                        index={idx}
                        correctMove={correctMove}
                        moveSlideHandler={moveSlideHandler}
                    />)
                }
            </div>
        </div>
    );
}

export default Board;