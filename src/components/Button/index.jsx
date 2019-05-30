import React from 'react';
import s from './Button.module.scss';

const Button = ({ children, className, ...props }) => (
    <button className={`${s.button} ${className ? className : ''}`} {...props} >{children}</button>
);

export default Button;