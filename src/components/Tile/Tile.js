import React from "react";

import './Tile.css';
import './TileAnimations.css';

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
            classes: this.props.value === 0 ? 'tile empty' : 'tile block',
            animationWillRun: false,
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.index !== nextProps.index) {
    //         return true;
    //     }

    //     if (this.state.classes !== nextState.classes) {
    //         return true;
    //     }

    //     // if (this.state.styles !== nextState.styles) {
    //     //     return true;
    //     // }

    //     return false;
    // }

   

    changeState = (newClass) => {
        this.setState({
            ...this.state,
            classes: this.state.classes += ` animation-${newClass}`,
        });
        console.log(this.state.classes);
        setTimeout(() => {
            this.setState({
                ...this.state,
                classes: this.state.classes.replace(` animation-${newClass}`, ''),
            });
        }, 1000);
    }


    render() {
        console.log('Changed -> ', this.props.value);
        return (
            <div
                style={{...styles[this.props.difficulty], ...this.props.styles}}
                onClick={(event) => {
                    this.props.moveTileHandler(event, this.props.id,);
                }}
                className={this.state.classes}
            >
                {this.state.isEmpty ? '' : this.props.value}
            </div>
        );
    }
}

export default Tile;