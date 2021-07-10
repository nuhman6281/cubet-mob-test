
import React from 'react';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity, } from 'react-native';
import { colors } from '../../constants/theme';


export const Loader = ({ loading }) => {
    return (
        loading ?
            <TouchableOpacity disabled={true} style={styles.container}>
                <View style={styles.indicatorContainer}>
                    <ActivityIndicator size={"large"} color={colors.primaryColor} />
                </View>
            </TouchableOpacity>
            : null
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.loaderContainer
    },
    indicatorContainer: {
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: 'white',
        width: 10,
        height: 10
    }
})