import React, { useContext } from "react";
import Ticker from "./Ticker";
import { GameContext } from "../context/GameContext"

function Simulation() {
    const { character } = useContext(GameContext)
    let content = character.name.isEmpty ?
        "" : <div>{character.name} has started a quest.</div>

    return (
        <div className="simulation">
            {content}
            <Ticker adventurer={character}
                    intervalMs='10000'/>
        </div>
    )
}

export default Simulation
