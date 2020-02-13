import React, { Component } from "react";
import AnimationLearnParaneter from "./AnimationLearnParaneter";

export default class ToggleableAnimationExample extends Component {
  state = {
    toggledIn: false
  };

  getAnimationEnabledDisplayText = () => {
    return this.state.toggledIn ? "activada" : "desactivada";
  };

  toggleState = () => {
    this.setState(oldState => {
      return {
        toggledIn: !oldState.toggledIn
      };
    });
  };

  render() {
    return (
      <div>
        <header>
          <h2>La animación está: {this.getAnimationEnabledDisplayText()}!</h2>
        </header>
        <button onClick={this.toggleState}>Modificar</button>
        <AnimationLearnParaneter enabled={this.state.toggledIn} />
      </div>
    );
  }
}
