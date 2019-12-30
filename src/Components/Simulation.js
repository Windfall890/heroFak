import React from "react";

export default function Simulation(props) {
    return (<div className="Simulation">
        <p>{props.character.name} enters the Lair. <br/>
        {props.character.name} walks up to a Gru. <br/>
        {props.character.name} was eaten by a Gru. </p>
    </div>);
}