import Creator from "./Creator";
import React, { Component } from "react";
import Simulation from "./Simulation";

class Game extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { character: {} }
    }

    handleStart = (character) => {
        this.setState({ character })
    };

    render() {
        return (
            <div className="game">
                <Creator handleStart={this.handleStart}/>
                <Simulation character={this.state.character}/>
            </div>
        );
    }
}

export default Game
