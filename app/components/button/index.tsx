import React, { FC, ReactElement, useLayoutEffect } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { commonStyles } from '../../styles';
import i18n from '../../i18n/i18n';
import { colors } from '../../constants/theme';

type ChildProps = {
    text?: string;
    onPress?(params): Function
}
const Button: FC<ChildProps> = ({
    text,
    onPress
}): ReactElement => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <Text style={[commonStyles.text, { color: colors.primaryColor }]}>{i18n.t('login_screen.header')}</Text>
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
