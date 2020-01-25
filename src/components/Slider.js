import React, { Component } from "react";

class StatSlider extends Component {
    render() {
        return <div className="slider">
            <label className="slider__label">{this.props.attribute.toUpperCase()}</label>
            <input type="range" min={this.props.statMin} max={this.props.statMax} step="1"
                   value={this.props.value}
                   onChange={(e) => {
                       this.props.onChange(this.props.attribute, e)
                   }}
            />

            <div className="slider__buttons">
                <button className="slider__increment-stat-button"
                        onClick={(e) => {
                            this.increment(e, 1, this.props.statMin, this.props.statMax)
                        }}
                        value={this.props.value}>
                    ❯
                </button>
                <button className="slider__decrement-stat-button"
                        onClick={(e) => this.increment(e, -1, this.props.statMin, this.props.statMax)}
                        value={this.props.value}>
                    ❮
                </button>
            </div>
            <div>{this.props.value}</div>

        </div>
    }

    increment = (e, amount, min, max) => {
        e.preventDefault();

        const newValue = parseInt(e.target.value) + amount
        if (newValue < min || newValue > max) return;

        e.target.value = newValue;
        this.props.onChange(this.props.attribute, e)
    }
};

export default StatSlider
