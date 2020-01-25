import Creator from "./Creator";
import React, { Component } from "react";
import Simulation from "./Simulation";
import { initialState, GameContext } from "../context/GameContext"

class Game extends Component {
    state = {
        ...initialState,
        updateValue: obj => this.setState({...this.state, ...obj})
    }

    render() {
        return (
            <GameContext.Provider value={this.state}>
                <div className="game">
                    <Creator/>
                    <Simulation/>
                </div>
            </GameContext.Provider>
        );
    }
}

export default Game
