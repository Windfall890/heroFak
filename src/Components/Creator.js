import React, {Component} from "react";
import Slider from "./Slider";
import {merge} from "lodash"


class Creator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            character: {},
            original: {}
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.Roll();
    }

    coreStats = ["str", "dex", "con", "int", "wis", "cha"];
    statMax = 18;
    statMin = 1;
    statWindow = 3;

    onStatChange = (key, e) => {
        e.preventDefault();

        let value = parseInt(e.target.value);

        if (outOfStatRange(value, this.state.original[key], this.statWindow)) return;

        this.onChange(key, e);
        console.log(this.state);
    };
    onChange = (key, e) => {
        e.preventDefault();
        this.setState(merge(this.state, {character: {[key]: e.target.value}}));
    };
    
    render() {
        return (
            <div className="Creator">
                <h3>Creator</h3>
                <form>
                    <label>Name:</label>
                    <input type="text" 
                           value={this.state.character.name}
                           onChange={(e) => this.onChange("name", e)}/>
                    {this.renderSliders()}
                    <label>Total: </label>
                    <input style={{width: "auto"}} 
                           type="text" 
                           readOnly="true"
                           value={this.statTotal()}/>
                </form>
                <button onClick={this.Roll}>Roll!</button>
                <button onClick={() => this.props.handleStart(this.state.character)}>Start!</button>
            </div>
        );
    }

    renderSliders = () => {
        return this.coreStats.map(stat =>
            <Slider
                attribute={stat}
                value={this.state.character[stat]}
                original={this.state.original[stat]}
                statMin={this.statMin}
                statMax={this.statMax}
                statWindow={this.statWindow}
                onChange={(key, e) => this.onStatChange(key, e)}/>
        );
    };

    statTotal = () => {
        return parseInt(this.state.character.str, 10) +
            parseInt(this.state.character.dex, 10) +
            parseInt(this.state.character.con, 10) +
            parseInt(this.state.character.int, 10) +
            parseInt(this.state.character.wis, 10) +
            parseInt(this.state.character.cha, 10);
    };
    Roll = () => {
        const rollMin = 7;
        const rollMax = this.statMax;

        const character = {
            name: getRandomName(),
            str: getRandomInt(rollMin, rollMax),
            dex: getRandomInt(rollMin, rollMax),
            con: getRandomInt(rollMin, rollMax),
            int: getRandomInt(rollMin, rollMax),
            wis: getRandomInt(rollMin, rollMax),
            cha: getRandomInt(rollMin, rollMax)
        };
        this.setState({character: character, original: {...character}}
        )

    }
}

export default Creator;

function outOfStatRange(value, original, window) {
    return (value < original - window ||
        value > original + window);
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max - min));
}

function getRandomName() {
    const index = getRandomInt(0, names.length);
    return names[index];
}

const names = [
    "Hiroko",
    "Krishna",
    "Chung",
    "Kori",
    "Macy",
    "Corrine",
    "Parker",
    "Sherril",
    "Efren",
    "Caleb",
    "Sage",
    "Mireille",
    "Lashay",
    "Arron",
    "Colton",
    "Nenita",
    "Lorine",
    "Magdalena",
    "Vivan",
    "Caryn",
    "Cyndi",
    "Esmeralda",
    "Eleonor",
    "Roberto",
    "Curtis",
    "Adrian",
    "Dion",
    "Asa",
    "Euna",
    "Deann",
    "Annmarie",
    "Hedwig",
    "Mari",
    "Illa",
    "Emelda",
    "Conrad",
    "Otha",
    "Valorie",
    "Leanne",
    "Elinor",
    "Leilani",
    "Makeda",
    "Olin",
    "Madelyn",
    "Jerald",
    "Cristine",
    "Alycia",
    "Betsey",
    "Noma",
    "Dena"
];