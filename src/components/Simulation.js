import React from "react";
import Ticker from "./Ticker";

function Simulation(props) {
    let content;
    if (props.character.name != null) {
        content = <p>{props.character.name} enters the Lair. <br/>
            {props.character.name} walks up to a Gru. <br/>
            {props.character.name} was eaten by a Gru. </p>;
    } else {
        content = <p>Press Start!</p>
    }

    const adventurer = createAdventurer(props.character);
    return (
        <div className="simulation">
            {content}
            <Ticker adventurer={adventurer}
                    intervalMs='10000'/>
        </div>);
}

function createAdventurer(character) {
    console.log("CREATING");
    console.log(character);
    let adventurer = {...character};
    return (adventurer);
}

export default Simulation
