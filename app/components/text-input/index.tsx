import React from 'react';
import { StyleSheet, TextInput, View, Keyboard } from "react-native"
import { colors, fonts } from "../../constants/theme";
import I18n from '../../i18n/i18n';

const DEFAULT_PLACE_HOLDER = I18n.t('day_edit_screen.enter_thoughts_text');

const onSubmitEditing = (onSubmit) => {
    Keyboard.dismiss();
    onSubmit();
}

const CustomTextInput = ({
    placeholder = DEFAULT_PLACE_HOLDER,
    onChangeText,
    style,
    value,
    multiline,
    blurOnSubmit,
    containerStyle,
    returnKeyType,
    isEditable,
    autoFocus,
    onSubmit
}) => {
    return (
        <View style={[styles.textInputContainer, { ...containerStyle }]} >
            <TextInput
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
                style={[styles.textInput, { ...style }]}
            />
        </View>
    )
}

export default CustomTextInput;


const styles = StyleSheet.create({
    textInputContainer: {
        marginHorizontal: 20,
        marginTop: 18
    },
    textInput: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.secondaryColor,
        fontFamily: fonts.interRegular
    }
})