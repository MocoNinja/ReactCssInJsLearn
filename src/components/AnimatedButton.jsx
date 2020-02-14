import React from 'react';
import {StyleSheet, css} from "aphrodite";

function AnimatedButton(props) {
    return (
        <button className={css(styles.btn, styles.btnHover)} onClick={props.callback}>{props.txt}</button>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "red",
        fontWeight: "bold",
        fontFamily: "Ubuntu",
        padding: "0.45em",
        border: "2px solid black",
        borderRadius: "10%",
        margin: "1em"
    },
    btnHover: {
       ":hover": {
           backgroundColor: "purple",
           cursor: "pointer"
       }
    }
});

export default AnimatedButton;