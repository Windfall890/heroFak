import React, { useContext } from "react";
import Ticker from "./Ticker";
import { GameContext } from "../context/GameContext"

function Simulation() {
    const character = useContext(GameContext)
    const content = ""

    return (
        <div className="simulation">
            {content}
            <Ticker adventurer={character}
                    intervalMs='10000'/>
        </div>
    )
}

export default Simulation
