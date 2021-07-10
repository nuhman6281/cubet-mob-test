
import React, { Component } from 'react';
import {
    StyleProp,
    Text,
    TextStyle,
} from 'react-native';
import { fonts } from '../../constants/theme';

export interface IProps {
    children: any;
    style?: StyleProp<TextStyle>;
}

const DisplayText: React.FunctionComponent<IProps> = (props: IProps) => (
    <Text {...props} style={[{ fontFamily: fonts.interRegular, textAlign: 'left' }, props.style]}>
        {props.children}
    </Text>
)

export default DisplayText;
