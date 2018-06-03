import React from 'react';
import PropType from 'prop-types';
import './Navbar.css'

const Navbar = ({onNewGame}) => (
    <header>
        <h2><span>Memory Game</span></h2>
        <nav>
            <li><span onClick= {onNewGame}>New Game</span></li>
        </nav>
    </header>
);

Navbar.protoType ={   
    onNewGame: PropType.func.isRequired
};

export default Navbar;