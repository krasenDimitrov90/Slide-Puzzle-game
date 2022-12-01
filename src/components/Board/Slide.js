function Slide(props) {

    const isEmpty = props.value === 'empty';

    return (
        <div
            onClick={() => props.moveSlideHandler(props.id)}
            className={isEmpty ? 'empty' : 'block'}
        >
            {props.value}
        </div>
    );
}

export default Slide;