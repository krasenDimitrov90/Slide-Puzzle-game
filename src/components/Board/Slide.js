import React from "react";

const initialStyles = {
  from: {},
  to: {},
};

class Slide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      styles: initialStyles,
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
    // console.log('in Class', this.state.isEmpty);
    let styleSheet = document.styleSheets[0];
    // console.log(styleSheet);
    return (
      <div
        onClick={() => this.props.moveSlideHandler(this.props.id)}
        className={this.state.isEmpty ? 'empty' : 'block'}
      >
        {this.state.isEmpty ? '' : this.props.value}
      </div>
    );
  }
}

export default Slide;

// function Slide(props) {

//   const [styles, setStyles] = React.useState(initialStyles);

//   const isEmpty = props.value === 'empty';

//   console.log('in Slide');

//   return (
//     <div
//       onClick={() => props.moveSlideHandler(props.id)}
//       className={isEmpty ? 'empty' : 'block'}
//     >
//       { isEmpty ? '' : props.value}
//     </div>
//   );
// }