import React, {Component} from "react";

class Ticker extends Component {

    intervalMs;
    
    constructor(props) {
        super(props);
        this.state = {
            ticks: 0,
            enemy: props.enemy,
            adventurer: props.adventurer
        };
        
        this.intervalMs = props.intervalMs;
    }

    tick() {
        console.log(this.state);
        this.setState(prev => ({
            ticks: prev.ticks + 1
        }));
    }

    componentWillMount() {
        setInterval(() => this.tick(), this.intervalMs)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>Ticks: {this.state.ticks}</div>
        )
    }
}

export default Ticker;