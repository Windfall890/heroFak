import Creator from "./Creator";
import React from "react";
import Simulation from "./Simulation";

export default function Game(props) {
    return (
        <div className="Game">
            <Creator/>
            <Simulation character= { {name: "Eric"} }/>
        </div>
    );
}