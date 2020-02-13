import React from "react";
import logo from "../resources/logo.svg";

import { StyleSheet, css } from "aphrodite";

export default function ReactLogoSpin() {
  return <img src={logo} className={css(styles.appLogo)} alt="logo" />;
}

const spinAnimation = {
  from: {
    transform: "rotate(0deg)"
  },
  to: {
    transform: "rotate(360deg)"
  }
};

const styles = StyleSheet.create({
  appLogo: {
    pointerEvents: "none",
    height: "5vmin",
    animationName: [spinAnimation],
    animationDuration: "20s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear"
  }
});
