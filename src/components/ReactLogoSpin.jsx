import React from 'react'
import logo from '../resources/logo.svg'

import { StyleSheet, css } from 'aphrodite';

export default function ReactLogoSpin() {
    return (
        <div className={css(styles.hover, styles.appLogoContainer)}>
            <img src={logo} className={css(styles.appLogo)} alt="logo" />
        </div>
    );
}

const spinAnimation = {
    'from': {
        transform: 'rotate(0deg)'
    },
    'to': {
        transform: 'rotate(360deg)'
    }
};

const styles = StyleSheet.create({
    appLogoContainer: {
        height: "10vmin",
        width: "20%"
    },

    appLogo: {
        pointerEvents: "none",
        height: "10vmin",
        animationName: [spinAnimation],
        animationDuration: '20s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
    },
    hover: {
        ':hover': {
            backgroundColor: "gray",
        }
    }
});