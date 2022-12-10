import React from "react";

import './Tile.css';
import './TileAnimations.css';
import { animation } from "../../game-logic/helpers";

const styles = {
    easy: {
        width: '120px',
        height: '120px',
    },
    medium: {
        width: '90px',
        height: '90px',
    },
    hard: {
        width: '72px',
        height: '72px',
    },
}

function Tile(props) {

    const [isEmpty, setIsEmpty] = React.useState(props.value === 0);
    const [classes, setClasses] = React.useState(props.value === 0 ? 'tile empty' : 'tile block');
    const [moveDirection, setMoveDirection] = React.useState(null);

    React.useEffect(() => {
        animation(moveDirection, props.id, props.difficulty);

        return () => {
            setMoveDirection(null);
        }
    }, [moveDirection]);

    const setDirectionHandler = (moveDirection) => {
        setMoveDirection(moveDirection);
    }

    return (
        <div
            style={{ ...styles[props.difficulty] }}
            id={props.id}
            onClick={(event) => {
                props.moveTileHandler(event, props.id, setDirectionHandler);
            }}
            className={classes}
        >
            {isEmpty ? '' : props.value}
        </div>
    );
}

export default Tile;