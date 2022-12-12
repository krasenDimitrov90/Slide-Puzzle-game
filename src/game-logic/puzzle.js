


export default class Puzzle {
    constructor(puzzleForm) {
        this.puzzleForm = puzzleForm;
        this.coordinates = {};
        this.init();
    }

    init() {
        this.shuffleThePuzzle();

        if (!this.checkIsSolveble(this.puzzleForm)) {
            console.log(this.checkIsSolveble(this.puzzleForm));
            this.init();
        } else {
            console.log(this.checkIsSolveble(this.puzzleForm));
            this.setCoordinates();
        }
    }

    shuffleThePuzzle() {
        this.puzzleForm = this.puzzleForm
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }

    checkIsSolveble(puzzle) {

        // this algorithm is from - https://stackoverflow.com/questions/34570344/check-if-15-puzzle-is-solvable
        let count = 0;

        let tilesCount = this.puzzleForm.length;
        let gridWidth = Math.sqrt(tilesCount);
        let row = 0;
        let blankRow = 0; // the row with the blank tile

        for (let i = 0; i <= tilesCount - 1; i++) {
            if (i % gridWidth === 0) {
                row++;
            }
            if (puzzle[i] === 0) { // the blank tile
                blankRow = row; // save the row on which encountered
                continue;
            }
            for (let j = i + 1; j <= tilesCount - 1; j++) {
                if (this.puzzleForm[j] !== 0 && this.puzzleForm[i] !== 0 && this.puzzleForm[i] > this.puzzleForm[j]) {
                    count += 1;
                }
            }
        }

        if (gridWidth % 2 === 0) { // even grid
            if (blankRow % 2 === 0) { // blank on odd row; counting from bottom
                return count % 2 === 0;
            } else { // blank on even row; counting from bottom
                return count % 2 !== 0;
            }
        } else { // odd grid
            return count % 2 === 0;
        }
    }

    setCoordinates() {
        let blockIndex = 0;

        let rowsCount = Math.floor(Math.sqrt(this.puzzleForm.length));

        for (let row = 0; row < rowsCount; row++) {
            for (let col = 0; col < rowsCount; col++) {
                this.coordinates[this.puzzleForm[blockIndex++]] = `${row}-${col}`;
            }
        }
    }
}