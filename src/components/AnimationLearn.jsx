import React from "react";

import { StyleSheet, css } from "aphrodite";

export default function AnimationLearn() {
  return <div className={css(style.element, style.hover)}></div>;
}

const colorAnimation = {
  from: {
    backgroundColor: "cyan"
  },
  to: {
    backgroundColor: "red"
  }
};
const style = StyleSheet.create({
  element: {
    border: "1px solid black",
    width: "20px",
    height: "20px",
    margin: "auto",
    animationName: colorAnimation,
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationDirection: "alternate"
  },
  hover: {
    ":hover": {
      border: "2px solid yellow",
      cursor: "pointer"
    }
  }
});
