import React, { Component } from 'react';
import s from './Header.module.scss';

export default class Header extends Component {
    render(){
        const { index } = this.props;
        return(
            <div className={`${s.header}`}>
                <div className={`${s.title}`}>{index ? `Document ${index}` : 'Please select any document.'}</div>
            </div>
        )
    }
}