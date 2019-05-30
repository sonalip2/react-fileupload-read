import React from 'react';
import s from './BasicInput.module.scss'

const BasicInput = ({
    label,
    className,
    ...props,
}) => (
    <div className={`${s.basicInput}`} >
        <label>{label}</label>
        <input {...props} />
    </div>
);

export default BasicInput;
