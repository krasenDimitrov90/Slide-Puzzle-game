export function rearrangedThePuzzle(oldPuzzleForm, id) {
    let newPuzzle = [...oldPuzzleForm];
    let blockIndex = newPuzzle.findIndex(x => x === id);
    let emptyIndex = newPuzzle.findIndex(x => x === 0);
    [newPuzzle[blockIndex], newPuzzle[emptyIndex]] = [newPuzzle[emptyIndex], newPuzzle[blockIndex]];

    return newPuzzle;
}


export function canMakeAMove(moveCoordinates, currentCoordinates, x, y) {
    moveCoordinates.moveLeftCoordinates = `${x}-${y - 1}`;
    moveCoordinates.moveRightCoordinates = `${x}-${y + 1}`;
    moveCoordinates.moveUpCoordinates = `${x - 1}-${y}`;
    moveCoordinates.moveDownCoordinates = `${x + 1}-${y}`;

    return Object.values(moveCoordinates).some(c => c === currentCoordinates[0]);
}

export function checkIsPuzzlsSolved(puzzle, rightOrder = '123456780') {
    return puzzle.join('') === rightOrder;
}