import React, { Component } from "react";
import StatSlider from "./Slider";
import { names, getRandomFirstName, getRandomSurname } from "../names"
import { GameContext } from "../context/GameContext"
import characterState from "../context/character"

class Creator extends Component {
    static contextType = GameContext

    resetCharacter = () => {
        this.context.updateValue(characterState)
    };

    componentDidMount() {
        this.roll();
    }

    coreStats = Object.keys(this.context.character.coreStats).map(key => key)
    statMax = 18
    statMin = 1

    onStatChange = (key, e) => {
        e.preventDefault()

        const value = parseInt(e.target.value)
        let { character } = this.context

        if (character.coreStats[ key ] > value) {
            character.freePoints++
            character.coreStats[ key ] = value
        } else if (character.freePoints <= value && character.freePoints > 0) {
            character.freePoints--
            character.coreStats[ key ] = value
        }

        this.context.updateValue(character)
    }

    onChange = (key, e) => {
        e.preventDefault()

        const value = parseInt(e.target.value)
        let { character } = this.context
        character.coreStats[ key ] = value

        this.context.updateValue(character)
    }

    render() {
        return (
            <div className="creator">
                <h3>Hero Faktory</h3>
                <form className="creator__character-sheet">
                    <div className="creator__text-fields">
                        <label>Name:</label>
                        <input type="text"
                               value={this.context.character.name}
                               onChange={(e) => this.onChange("name", e)}/>
                        <div>Points: {this.context.character.freePoints}</div>
                    </div>
                    {this.renderSliders()}
                    <div>Total: {this.statTotal()} </div>
                </form>
                <button onClick={this.roll}>Roll!</button>
                <button onClick={this.startSimulation}>Start!</button>
            </div>
        )
    }

    getRandomInt = (min, max) => {
        return min + Math.floor(Math.random() * Math.floor(max - min))
    }

    getRandomName = () => {
        const index = this.getRandomInt(0, names.length)
        return names[ index ]
    }

    renderSliders = () => {
        return this.coreStats.map((stat, index) =>
            <StatSlider
                attribute={stat}
                value={this.context.character.coreStats[ stat ]}
                statMin={this.statMin}
                statMax={this.statMax}
                key={index}
                onChange={(key, e) => this.onStatChange(key, e)}/>
        )
    }

    statTotal = () =>
        this.coreStats.map(key => this.context.character.coreStats[ key ]).reduce((acc, value) => {
            return acc + value
        }, 0)

    startSimulation = () => {
        this.context.updateValue({ isSimulationRunning: true })
    }

    roll = () => {
        const rollMin = 7
        const rollMax = this.statMax

        const character = {
            coreStats: {}
        }

        this.coreStats.map(value => {
            character.coreStats[ value ] = this.getRandomInt(rollMin, rollMax)
        })
        character.freePoints = 0
        character.name = `${getRandomFirstName()} the ${getRandomSurname(character.coreStats)}`

        this.resetCharacter()
        this.context.updateValue({ character })
    }
}

export default Creator

