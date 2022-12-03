import React from "react";

import './Tile.css';

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

class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEmpty: this.props.value === 0,
            classes: '',
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.index !== nextProps.index) {
            return true;
        }

        return false;
    }

    prepareClasses() {

    }

    render() {
        return (
            <div
                style={styles[this.props.difficulty]}
                onClick={() => this.props.moveTileHandler(this.props.id)}
                className={this.state.isEmpty ? 'tile empty' : 'tile block'}
            >
                {this.state.isEmpty ? '' : this.props.value}
            </div>
        );
    }
}

export default Tile;