import React from 'react';

const Button = (props) => {
    return (
        <button className="btn btn-primary" onClick={props?.onClick ?? null}>{props?.text ?? 'Button'}</button>
    );

};

export default Button;