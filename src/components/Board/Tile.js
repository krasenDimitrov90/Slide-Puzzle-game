import React from "react";


class Tile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEmpty: this.props.value === 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.index !== nextProps.index) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <div
                onClick={() => this.props.moveTileHandler(this.props.id)}
                className={this.state.isEmpty ? 'empty' : 'block'}
            >
                {this.state.isEmpty ? '' : this.props.value}
            </div>
        );
    }
}

export default Tile;