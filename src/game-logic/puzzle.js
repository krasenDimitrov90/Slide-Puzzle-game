


export default class Puzzle {
    constructor(puzzleForm) {
        this.puzzleForm = puzzleForm;
        this.coordinates = {};
        this.init();
    }

    init() {
        this.shuffleThePuzzle();

        if (!this.checkIsSolveble()) {
            console.log(this.checkIsSolveble());
            this.init();
        } else {
            console.log(this.checkIsSolveble());
            this.setCoordinates();
        }
    }

    shuffleThePuzzle() {
        this.puzzleForm = this.puzzleForm
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }

    checkIsSolveble() {
        let count = 0;

        let tilesCount = this.puzzleForm.length;

        for (let i = 0; i <= tilesCount - 1; i++) {
            for (let j = i + 1; j <= tilesCount; j++) {
                if (this.puzzleForm[j] && this.puzzleForm[i] && this.puzzleForm[i] > this.puzzleForm[j]) {
                    count += 1;
                }
            }
        }

        if (tilesCount % 2 === 0) {
            return count % 2 !== 0;
        }

        return count % 2 === 0;
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