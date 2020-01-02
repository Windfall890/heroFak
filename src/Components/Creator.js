import React, {Component} from "react";
import StatSlider from "./Slider";
import {merge} from "lodash"


class Creator extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => (
        {
            character: {},
            original: {},
            freePoints: 0
        });

    resetState = () => {
        this.setState(this.getInitialState());
    };

    componentDidMount() {
        this.roll();
    }

    coreStats = ["str", "dex", "con", "int", "wis", "cha",];
    statMax = 18;
    statMin = 1;

    onStatChange = (key, e) => {
        e.preventDefault();

        const value = parseInt(e.target.value);
        
        this.setState((state) => {
            if (state.character[key] > value) {
                return (merge(state, {
                    character: {[key]: value},
                    freePoints: state.freePoints+1
                }));
            } else if (state.freePoints <= value && state.freePoints > 0) {
                return (merge(state, {
                    character: {[key]: value},
                    freePoints: state.freePoints-1
                }));
            }
        });


    };
    
    onChange = (key, e) => {
        e.preventDefault();
        const value = e.target.value;
        this.setState((state) => (merge(state, {character: {[key]: value}})));
    };

    render() {
        return (
            <div className="Creator">
                <h3>Hero Faktory</h3>
                <form>
                    <label>Name:</label>
                    <input type="text"
                           value={this.state.character.name}
                           onChange={(e) => this.onChange("name", e)}/>
                    <label>Points: </label>
                    <input style={{width: "auto"}}
                           type="text"
                           readOnly="true"
                           value={this.state.freePoints}/>
                    {this.renderSliders()}
                    <label>Total: </label>
                    <input style={{width: "auto"}}
                           type="text"
                           readOnly="true"
                           value={this.statTotal(this.state.character)}/>
                </form>
                <button onClick={this.roll}>Roll!</button>
                <button onClick={() => this.props.handleStart(this.state.character)}>Start!</button>
            </div>
        );
    }

    renderSliders = () => {
        return this.coreStats.map(stat =>
            <StatSlider
                attribute={stat}
                value={this.state.character[stat]}
                original={this.state.original[stat]}
                statMin={this.statMin}
                statMax={this.statMax}
                onChange={(key, e) => this.onStatChange(key, e)}/>
        );
    };

    statTotal = (character) => {
        return this.coreStats.reduce((prev, value) => prev + parseInt(character[value], 10), 0);
    };

    roll = () => {
        const rollMin = 7;
        const rollMax = this.statMax;

        const character = {
            name: getRandomName(),
        };
        this.coreStats.map(value => {
            character[value] = getRandomInt(rollMin, rollMax)
        });

        this.resetState();
        this.setState(() => ({
                character: character,
                original: {...character},
                freePoints: 0
            })
        )

    }
}

export default Creator;

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