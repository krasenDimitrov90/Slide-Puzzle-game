let hard = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20,
    21, 22, 23, 0, 24
];

const easy = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 0,
];

let demo = [
    6, 1, 13, 11,
    10, 7, 14, 5,
    2, 9, 15, 8,
    4, 12, 0, 3
]

let demo2 = [
    12, 6, 7, 8, 10, 9, 3, 2, 11, 15, 13, 1, 4, 5, 14, 0
]

const checkIsSolveble = (puzzle) => {
    let N = Math.sqrt(puzzle.length);

    const makePuzzleAsMatrix = (puzzle) => {

        let newPuzzle = [];
        let pos = 0;
        for (let i = 0; i < N; i++) {

            let row = [];
            for (let j = 0; j < N; j++) {
                row[j] = puzzle[pos++];
            }
            newPuzzle.push(row);
        }

        return newPuzzle;
    }

    const getInvCount = (arr) => {

        let invCount = 0;

        for (let i = 0; i < (N * N - 1); i++) {
            for (let j = i + 1; j < ((N * N) - 1); j++) {
                // if (arr[j] !== undefined && arr[i] !== undefined && (arr[i] > arr[j])) {
                //     invCount += 1;
                // }

                if (arr[j] !== 0 && (arr[i] > arr[j])) {
                    invCount += 1;
                }
            }
        }

        return invCount;
    }

    const findXPosition = (puzzle) => {
        for (let i = N - 1; i >= 0; i--) {
            // for (let j = N - 1; j >= 0; j--) {
            //     if (puzzle[i][j] === 0) {
            //         return i + 1;
            //     }
            // }

            if (puzzle[i].includes(0)) {
                return N - i;
            }
        }
    }

    const isSolvable = (puzzle) => {

        let invCount = getInvCount(puzzle);
        console.log(invCount);

        if (N % 2 === 1) {
            return invCount % 2 === 0;
        } else {

            let puzzleAsMatrix = makePuzzleAsMatrix(puzzle)
            let pos = findXPosition(puzzleAsMatrix);
            console.log(pos);

            if (pos % 2 === 1) {
                return invCount % 2 === 0;
            }
            else {
                return invCount % 2 === 1;
            }
        }

    }


    // let puzzleAsMatrix = makePuzzleAsMatrix(puzzle)
    return isSolvable(puzzle);
}

console.log(checkIsSolveble(demo2));