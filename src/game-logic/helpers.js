export function rearrangedThePuzzle(oldPuzzleForm, id) {
    let newPuzzle = [...oldPuzzleForm];
    let blockIndex = newPuzzle.findIndex(x => x === id);
    let emptyIndex = newPuzzle.findIndex(x => x === 0);
    [newPuzzle[blockIndex], newPuzzle[emptyIndex]] = [newPuzzle[emptyIndex], newPuzzle[blockIndex]];

    return newPuzzle;
}

const moves = {
    moveLeftCoordinates: 'left',
    moveRightCoordinates: 'right',
    moveUpCoordinates: 'up',
    moveDownCoordinates: 'down',
}

const moveCoordinates = {};

export function findMoveDirection(currentCoordinates, x, y) {
    moveCoordinates.moveLeftCoordinates = `${x}-${y - 1}`;
    moveCoordinates.moveRightCoordinates = `${x}-${y + 1}`;
    moveCoordinates.moveUpCoordinates = `${x - 1}-${y}`;
    moveCoordinates.moveDownCoordinates = `${x + 1}-${y}`;

    if (Object.values(moveCoordinates).some(c => c === currentCoordinates[0])) {
        let rightMoveCoordinates = (
            Object.keys(moveCoordinates)
                .find(c => moveCoordinates[c] === currentCoordinates[0])
        );

        return moves[rightMoveCoordinates];
    }

    return false;
}

export function checkIsPuzzlsSolved(puzzle, rightOrder) {
    return puzzle.join('') === rightOrder;
}


export function animation(moveDirection, id, difficulty) {
    const element = document.getElementById(id);
    let start, previousTimeStamp;
    let ID;
    let axis = '';
    let pixels;

    switch (difficulty) {
        case 'easy':
            pixels = 120;
            break;
        case 'medium':
            pixels = 90;
            break;
        case 'hard':
            pixels = 72;
            break;
    }

    const duration = pixels / 0.3

    switch (moveDirection) {
        case 'left':
        case 'right':
            axis = 'left';
            break;
        case 'up':
        case 'down':
            axis = 'top';
            break;
    }

    function step(timestamp) {
        if (start === undefined) {
            start = timestamp;
        }
        const elapsed = timestamp - start;

        if (previousTimeStamp !== timestamp) {
            let count;
            if (moveDirection === 'left' || moveDirection === 'up') {
                count = pixels - (0.3 * elapsed);
            } else if (moveDirection === 'right' || moveDirection === 'down') {
                count = (0.3 * elapsed) - pixels;
            }
            element.style[axis] = `${count}px`;
        }

        if (elapsed <= duration) {
            previousTimeStamp = timestamp;
            ID = window.requestAnimationFrame(step);
        }

        if (elapsed > duration) {
            element.style[axis] = `0px`;
            cancelAnimationFrame(ID);
        }
    }

    ID = window.requestAnimationFrame(step);
}