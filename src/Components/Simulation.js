import React from "react";

export default function Simulation(props) {

    console.log(props.character);

    let content;
    if (props.character.name != null) {
        content = <p>{props.character.name} enters the Lair. <br/>
            {props.character.name} walks up to a Gru. <br/>
            {props.character.name} was eaten by a Gru. </p>;
    }
    else
        content = <p>Press Start!</p>
    return (
        <div className="Simulation">
            {content}
        </div>);
}