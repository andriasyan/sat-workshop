import React, {Component} from 'react';
import {render} from 'react-dom';

const HelloWorld = () => {
    return (
        <div> What a cool thing </div>
    );
};

render(<HelloWorld/>, document.getElementById('container'));