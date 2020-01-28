import React, { Component } from "react";
import { GameContext } from "../context/GameContext"
import Engine from "./Engine"

class Simulation extends Component {
    static contextType = GameContext

    state = {
        ticks: 0
    }

    tick() {
        this.setState(prev => ({
            ticks: prev.ticks + 1
        }));
    }

    intervalHandler = () => this.tick()

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isSimulationRunning !== this.props.isSimulationRunning) {
            this.props.isSimulationRunning ? this.startSimulation() : this.endSimulation()
        }
    }

    startSimulation = () => {
        this.interval = setInterval(this.intervalHandler, this.props.intervalMs)
    }

    endSimulation = () => {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="simulation">
                {this.state.ticks}
            </div>
        )
    }
}

export default Simulation
