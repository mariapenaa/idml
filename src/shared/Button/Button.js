
import React from 'react';
import './Button.scss';

const Button = (props) => {
    const {text, color} = props
    return (
        <button className={color === 'white' ? 'buttonWhite' : 'buttonBlue'}>
            {text}
        </button>
    );
}

export default Button;
