import React, { FC, ReactElement } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { colors } from '../../constants/theme';
import { HeaderBackIcon } from './components/header-left';
import { HeaderTextContainer } from './components/header-container';
import { commonStyles } from '../../styles';
import Text from '../display-text/display-text';
import I18n from 'i18n-js';
import { Icon } from 'react-native-elements';

const BACK_ICON = 'chevron-left';
const BACK_ICON_TYPE = 'entypo';

type ChildProps = {
    goBack?: Function,
    navigation?: any,
    headerText?: string,
    backIcon?: boolean,
}
const AppHeader: FC<ChildProps> = ({
    goBack,
    navigation,
    headerText = "",
    backIcon = false
}): ReactElement => {


    const backButton = () => {
        return (
            <View style={styles.backArrowContainer} >
                <TouchableOpacity  >
                    <Icon
                        name={BACK_ICON}
                        type={BACK_ICON_TYPE}
                        color={colors.brownColor}
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={[styles.container, { flexDirection: 'row' }]}>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={{
                    fontSize: 22,
                    color: colors.brownColor
                }} >{headerText}</Text>
                {backIcon && backButton()}
            </View>
        </View>
    )

}

export default AppHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.appBackground,
        paddingVertical: 15
    },
    backArrowContainer: {
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        justifyContent: 'center',
        left: 0,
        width: '20%',
        zIndex: 100
    },
    icon: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.brownColor
    }
})

