import React, {Component} from "react";
import Slider from "./Slider";

class Creator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Eric",
            str: 15,
            dex: 17,
            con: 12,
            int: 10,
            wis: 9,
            cha: 18
        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    statMin = 7;
    statMax = 18;

    onChange = (key, e) => {
        this.setState({[key]: e.target.value});

        console.log(this.state)
    };

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="Creator">
                <h3>Creator</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value={this.state.name}
                           onChange={(e) => this.onChange("name", e)}/>
                    <Slider
                        attribute="str"
                        value={this.state.str}
                        onChange={(key, e) => this.onChange(key, e)}/>
                    <Slider
                        attribute="dex"
                        value={this.state.dex}
                        onChange={(key, e) => this.onChange(key, e)}/>
                    <Slider
                        attribute="con"
                        value={this.state.con}
                        onChange={(key, e) => this.onChange(key, e)}/>
                    <Slider
                        attribute="int"
                        value={this.state.int}
                        onChange={(key, e) => this.onChange(key, e)}/>
                    <Slider
                        attribute="wis"
                        value={this.state.wis}
                        onChange={(key, e) => this.onChange(key, e)}/>
                    <Slider
                        attribute="cha"
                        value={this.state.cha}
                        onChange={(key, e) => this.onChange(key, e)}
                    />
                    <label>Total: </label> <input style={{width:"auto"}} type="text" value={this.statTotal()}/>
                    <input type="submit" value="Submit"/>
                </form>
                <button onClick={this.Roll}>Roll!</button>
            </div>
        );
    }

    statTotal = () => {
        const total = this.state.str +
            this.state.dex +
            this.state.con +
            this.state.int +
            this.state.wis +
            this.state.cha;
        console.log(total);
        return total; 
    };
    Roll = () => {
        this.setState(
            {
                name: getRandomName(),
                str: getRandomInt(this.statMin, this.statMax),
                dex: getRandomInt(this.statMin, this.statMax),
                con: getRandomInt(this.statMin, this.statMax),
                int: getRandomInt(this.statMin, this.statMax),
                wis: getRandomInt(this.statMin, this.statMax),
                cha: getRandomInt(this.statMin, this.statMax)
            })

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

const names = ["Hiroko",
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