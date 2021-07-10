import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { colors } from '../../constants/theme';
import { HeaderBackIcon } from './components/header-left';
import { HeaderTextContainer } from './components/header-container';
import { commonStyles } from '../../styles';

const AppHeader = ({ goBack, navigation, headerText = "", backIcon = false }) => {

    const onPressBackIcon = () => {
        navigation.goBack();
    }

    return null;
    /*  (
         <View
             style={styles.container}>
             {backIcon && <HeaderBackIcon
                 style={commonStyles.leftIconContainer}
                 onPressBackIcon={onPressBackIcon}
             />}
             <HeaderTextContainer
                 headerText={headerText}
             />
         </View>
     ) */
}

export default AppHeader;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryColor,
        paddingVertical: 15,
        paddingTop: 20
    },
})