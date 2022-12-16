import React from "react";

// import { usePuzzleContext } from "../../contexts/PuzzleContext";

import './Tile.css';
import { animation } from "../../game-logic/helpers";

const styles = {
    easy: {
        width: '120px',
        height: '120px',
        "font-size": "100px",
    },
    medium: {
        width: '90px',
        height: '90px',
        "font-size": "65px",
    },
    hard: {
        width: '72px',
        height: '72px',
        "font-size": "45px",
    },
}

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmpty: this.props.value === 0,
            classes: this.props.value === 0 ? 'tile empty' : 'tile block',
            moveDirection: null,
        }
    }

    shouldComponentUpdate(prevProps, prevState) {
        if (prevProps.index !== this.props.index) {
            return true;
        }

        return false;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.index !== this.props.index) {
            animation(this.state.moveDirection, this.props.id, this.props.difficulty);
        }
    }

    setDirectionHandler = (moveDirection) => {
        this.setState({ moveDirection: moveDirection });
    }

    onClickHandler = (event) => {
        if (!this.props.isRunnig) {
            this.props.startTimer();
        }
        this.props.moveTileHandler(event, this.props.id, this.setDirectionHandler)
    }

    render() {
        console.log(this.props.value, this.state);
        return (
            <div
                style={{ ...styles[this.props.difficulty] }}
                id={this.props.id}
                onClick={this.onClickHandler}
                className={this.state.classes + " prevent-select"}
            >
                {this.state.isEmpty ? '' : this.props.value}
            </div>
        );
    }
}

export default Tile;

// const Tile = (props) => {

//     const { difficulty } = usePuzzleContext();

//     const isEmpty = React.useRef(props.value === 0);
//     const classes = React.useRef(props.value === 0 ? 'tile empty' : 'tile block');
//     const [moveDirection, setMoveDirection] = React.useState(null);

//     React.useEffect(() => {
//         animation(moveDirection, props.id, difficulty);

//         return () => {
//             setMoveDirection(null);
//         }
//     }, [moveDirection]);

//     const setDirectionHandler = (moveDirection) => {
//         setMoveDirection(moveDirection);
//     }

//     console.log(`Tile - ${props.value}`);

//     return (
//         <div
//             style={{ ...styles[difficulty] }}
//             id={props.id}
//             onClick={(event) => {
//                 props.moveTileHandler(event, props.id, setDirectionHandler);
//             }}
//             className={classes.current}
//         >
//             {isEmpty.current ? '' : props.value}
//         </div>
//     );
// }

// function areEqual(prevProps, nextProps) {
//     if (prevProps.index === nextProps.index) {
//         return true;
//     }

//     return false;
// }


// export default React.memo(Tile, areEqual);