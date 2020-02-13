import React, { Component } from "react";

import { StyleSheet, css } from "aphrodite";

export default class AnimationLearnParaneter extends Component {
  getAnimationEnabledStringFromProps() {
    console.log(this.props);
    return this.props.enabled ? "running" : "paused";
  }

  colorAnimation = {
    from: {
      backgroundColor: "cyan"
    },
    to: {
      backgroundColor: "red"
    }
  };

  style = StyleSheet.create({
    element: {
      border: "1px solid black",
      width: "20px",
      height: "20px",
      margin: "auto",
      animationName: this.colorAnimation,
      animationDuration: "1s",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
      animationDirection: "alternate"
    },
    animationOn: {
      animationPlayState: "running"
    },
    animationOff: {
      animationPlayState: "paused"
    },
    hover: {
      ":hover": {
        border: "2px solid yellow",
        cursor: "pointer"
      }
    }
  });

  render() {
    return (
      <div
        className={css(
          this.props.enabled ? this.style.animationOn : this.style.animationOff,
          this.style.element,
          this.style.hover
        )}
      ></div>
    );
  }
}
