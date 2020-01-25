import React, { Component } from "react";
import StatSlider from "./Slider";
import names from "../names"

class Creator extends Component {
    getInitialState = () => ({
        character: {
            name: "",
            coreStats: {
                str: 0,
                dex: 0,
                con: 0,
                int: 0,
                wis: 0,
                cha: 0
            }
        },
        freePoints: 0
    })

    state = {
        ...this.getInitialState()
    }

    resetState = () => {
        this.setState(this.getInitialState());
    };

    componentDidMount() {
        this.roll();
    }

    coreStats = Object.keys(this.state.character.coreStats).map(key => key)
    statMax = 18
    statMin = 1

    onStatChange = (key, e) => {
        e.preventDefault()

        const value = parseInt(e.target.value)
        let { character, freePoints } = this.state
        character.coreStats[ key ] = value

        if (character.coreStats[ key ] > value) {
            freePoints++
        } else if (this.state.freePoints <= value && this.state.freePoints > 0) {
            freePoints--
        }

        this.setState({
            ...this.state,
            ...character,
            ...freePoints
        })
    }

    onChange = (key, e) => {
        e.preventDefault()

        const value = parseInt(e.target.value)
        let { character } = this.state
        character.coreStats[ key ] = value

        this.setState({ ...this.state, ...character })
    }

    render() {
        return (
            <div className="creator">
                <h3>Hero Faktory</h3>
                <form className="creator__character-sheet">
                    <div className="creator__text-fields">
                        <label>Name:</label>
                        <input type="text"
                               value={this.state.character.name}
                               onChange={(e) => this.onChange("name", e)}/>
                        <div>Points: {this.state.freePoints}</div>
                    </div>
                    {this.renderSliders()}
                    <div>Total: {this.statTotal()} </div>
                </form>
                <button onClick={this.roll}>Roll!</button>
                <button onClick={() => this.props.handleStart(this.state.character)}>Start!</button>
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
                value={this.state.character.coreStats[ stat ]}
                statMin={this.statMin}
                statMax={this.statMax}
                key={index}
                onChange={(key, e) => this.onStatChange(key, e)}/>
        )
    }

    statTotal = () =>
        this.coreStats.map(key => this.state.character.coreStats[key]).reduce((acc, value) => {
            return acc + value
        }, 0)

    roll = () => {
        const rollMin = 7
        const rollMax = this.statMax

        const character = {
            name: this.getRandomName(),
            coreStats: {}
        }

        this.coreStats.map(value => {
            character.coreStats[ value ] = this.getRandomInt(rollMin, rollMax)
        })

        this.resetState()
        this.setState(() => ({
                character: character,
                freePoints: 0
            })
        )
    }
}

export default Creator

