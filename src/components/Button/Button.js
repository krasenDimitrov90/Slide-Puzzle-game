import { Link } from 'react-router-dom';

function Button(props) {

    return (
        <Link 
            to={props.path}
            className={props.className || ''}
            onClick={props.onClick} >{props.children}
        </Link>
    );
}

export default Button;