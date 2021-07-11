import React, { FC, ReactElement, useLayoutEffect } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    ViewStyle
} from 'react-native';
import { commonStyles } from '../../styles';
import i18n from '../../i18n/i18n';
import { colors } from '../../constants/theme';

type ChildProps = {
    text?: string;
    onPress?(params): Function
    style?: ViewStyle;
}
const Button: FC<ChildProps> = ({
    text,
    onPress,
    style
}): ReactElement => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]} >
            <Text style={[commonStyles.text, { color: colors.primaryColor }]}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brownColor,
        alignItems: 'center',
        padding: 15,
        borderRadius: 50
    }
})
