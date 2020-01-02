import Creator from "./Creator";
import React, {Component} from "react";
import Simulation from "./Simulation";

export default class Game extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {character: {}}
    }
    
    handleStart = (character) =>  {
        console.log(character);
        this.setState({character: character})
    };

    render() {

    return (
        <div className="Game">
            <Creator handleStart={this.handleStart}/>
            <Simulation character={this.state.character}/>
        </div>
    );
    }
}