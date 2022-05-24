import React from 'react';
import {StyleSheet, View} from 'react-native';

import { IProps } from './types';

const Box = ({children, style}: IProps) => {
    return (
        <View style={[styles.box, style]}>
            {children}
        </View>
    );
};

export default Box;

const styles = StyleSheet.create({
    box: {
        padding: 16,
        margin: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        boxSizing: 'border-box',
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 2,
        elevation: 10
    },
});

