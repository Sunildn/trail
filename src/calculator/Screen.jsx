import React, { Component } from 'react';

export default function Screen(props) {
    const {expression}=props;
    return (
            <div className='screen'>{expression}</div>
        )
    
}