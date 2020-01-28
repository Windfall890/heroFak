import React from 'react'
import characterState from './character'

const initialState = {
    character: characterState,
    isSimulationRunning: false,
    updateValue: obj => {}
}

let GameContext = React.createContext(initialState)

export {
    initialState,
    GameContext
}
