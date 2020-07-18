import React from 'react';

import './form-input.styles.scss';
const FormInput = ({ changeHandler, label, ...other }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={changeHandler} {...other} />
            {label ? (
                <label className={`${other.value.length ? 'shrink' : ''} form-input__label`}>{label}</label>
            ) : null}
        </div>
    );
};

export default FormInput;
