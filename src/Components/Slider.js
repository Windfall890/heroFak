import React from "react";


export default function Slider(props) {
    return (
        <div className="Slider">
            <label>{props.attribute.toUpperCase()}</label>
            <input type="range" min={props.statMin} max={props.statMax} step="1"
                   value={props.value}
                   onChange={(e) => {
                       e.target.value = parseInt(e.target.value);
                       props.onChange(props.attribute, e)
                   }}
            />

            <button style={{
                color: "green",
                transform: "rotate(-90deg)"
            }}
                    onClick={(e) => {
                        increment(e, 1, props.statMin, props.statMax)
                    }}
                    value={props.value}>
                ❯
            </button>
            <button style={{
                color: "red",
                transform: "rotate(-90deg)"
            }}
                    onClick={(e) => increment(e, -1, props.statMin, props.statMax)}
                    value={props.value}>
                ❮
            </button>
            <div>{props.value}</div>

        </div>
    );

    function increment(e, amount, min, max) {
        e.preventDefault();

        const newValue = parseInt(e.target.value) + amount;

        if (newValue < min || newValue > max) return;

        e.target.value = newValue;
        props.onChange(props.attribute, e)
    }
};