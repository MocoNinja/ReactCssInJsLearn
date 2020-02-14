import React, { Component } from "react";
import AnimationLearnParaneter from "./AnimationLearnParaneter";
import AnimatedButton from "./AnimatedButton";

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
        <AnimatedButton callback={this.toggleState} txt={"CLICK"}/>
        <AnimationLearnParaneter enabled={this.state.toggledIn} />
      </div>
    );
  }
}
