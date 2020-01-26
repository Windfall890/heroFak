import React, { useContext } from "react";
import Ticker from "./Ticker";
import { GameContext } from "../context/GameContext"

function Simulation() {
    const context = useContext(GameContext)
    let content = context.character.name.isEmpty ?
        "" : <div>{context.character.name} has started a quest.</div>

    return (
        <div className="simulation">
            {content}
            <Ticker adventurer={context.character}
                    intervalMs='10000'/>
        </div>
    )
}

export default Simulation
