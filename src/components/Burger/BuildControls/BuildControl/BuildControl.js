import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div className='BuildControl'>
        <div className='Label'>{props.label}</div>
        <button className='BuildControl-btn Less' onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className='BuildControl-btn More' onClick={props.added}>More</button>
    </div>
);

export default buildControl;