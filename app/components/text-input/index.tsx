import React, { FC, ReactElement } from 'react';
import { StyleSheet, TextInput, View, Keyboard, ViewStyle } from "react-native"
import { colors, fonts } from "../../constants/theme";
import I18n from '../../i18n/i18n';

const onSubmitEditing = (onSubmit) => {
    Keyboard.dismiss();
    onSubmit();
}

type ChildProps = {
    placeholder?: string;
    onChangeText?(text): Function
    style?: ViewStyle;
    value?: string;
    multiline?: boolean;
    blurOnSubmit?: boolean;
    containerStyle?: ViewStyle;
    returnKeyType?: any;
    isEditable?: boolean;
    autoFocus?: boolean;
    onSubmit?(): Function
    secureTextEntry?: boolean;
}

const CustomTextInput: FC<ChildProps> = ({
    placeholder,
    onChangeText,
    style,
    value,
    multiline,
    blurOnSubmit,
    containerStyle,
    returnKeyType,
    isEditable,
    autoFocus,
    onSubmit,
    secureTextEntry
}): ReactElement => {

    return (
        <View style={[styles.textInputContainer, { ...containerStyle }]} >
            <TextInput
                secureTextEntry={secureTextEntry}
                onSubmitEditing={() => { onSubmitEditing(onSubmit) }}
                onEndEditing={() => { Keyboard.dismiss() }}
                editable={isEditable}
                returnKeyType={returnKeyType}
                autoFocus={autoFocus}
                multiline={multiline}
                blurOnSubmit={blurOnSubmit}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.placeholder}
                style={[styles.textInput, { ...style }]}
            />

        </View>
    )
}

export default CustomTextInput;


const styles = StyleSheet.create({
    textInputContainer: {

    },
    textInput: {
        fontSize: 17,
        fontWeight: '400',
        color: colors.secondaryColor,
        fontFamily: fonts.interRegular,
        borderBottomColor: colors.brownColor,
        borderBottomWidth: 1.6

    }
})