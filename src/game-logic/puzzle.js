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

        for (let i = 0; i <= 8; i++) {
            for (let j = i + 1; j <= 9; j++) {
                if (this.puzzleForm[j] && this.puzzleForm[i] && this.puzzleForm[i] > this.puzzleForm[j]) {
                    count += 1;
                }
            }
        }
        return count % 2 === 0;
    }

    setCoordinates() {
        let blockIndex = 0;

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                this.coordinates[this.puzzleForm[blockIndex++]] = `${row}-${col}`;
            }
        }
    }
}