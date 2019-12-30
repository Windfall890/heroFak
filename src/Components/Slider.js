import React from "react";

export default function Slider(props) {
    return (
        <div className="Slider">
            <label>{props.attribute.toUpperCase()}</label>
            <input type="range" min="1" max="18" step="1"
                   value={props.value}
                   onChange={(e) => props.onChange(props.attribute, e)}
            />
            <div>{props.value}</div>

        </div>
    );
}