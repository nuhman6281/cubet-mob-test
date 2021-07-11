import React, { useLayoutEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import AppHeader from '../../components/app-header/app-header';
import { commonStyles } from '../../styles';
import i18n from '../../i18n/i18n';
import { colors } from '../../constants/theme';
import CustomTextInput from '../../components/text-input';
import { StyleSheet } from 'react-native';
import Button from '../../components/button';
import { useState } from 'react';
import { useEffect } from 'react';

const LoginPage = ({ navigation, route }) => {

    const [loginDetail, setLoginDetail] = useState({
        email: "admin",
        password: "admin"
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => <AppHeader
                headerText={i18n.t('login_screen.header')}
                backIcon={true}
                navigation={navigation}
            />
        });
    }, [navigation]);

    const onChangeText = (text, accessor) => {
        setLoginDetail({
            ...loginDetail,
            [accessor]: text
        });
    }

    const onPressLogin = () => {
        navigation.navigate("DrinksList");
    }

    return (
        <View style={[commonStyles.container, { justifyContent: 'center' }]}>
            <ScrollView>
                <View style={{ marginHorizontal: 30 }}>

                    <View style={{ marginTop: 20 }} >
                        <Text style={{
                            fontSize: 32,
                            color: colors.brownColor
                        }} >{"Welcome back!"}</Text>
                    </View>

                    <View style={{ marginTop: 25 }} >
                        <CustomTextInput
                            value={loginDetail.email}
                            placeholder={'Email'}
                            onChangeText={(value): any => onChangeText(value, "email")}
                            containerStyle={{ marginBottom: 10 }}
                        />
                        <CustomTextInput
                            value={loginDetail.password}
                            placeholder={'Password'}
                            onChangeText={(value): any => onChangeText(value, "password")}
                            containerStyle={{ marginTop: 10 }}
                        />
                    </View>

                    <View style={styles.forgotPasswordContainer} >
                        <TouchableOpacity>
                            <Text style={styles.text} >{"Forgot password"}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Button
                            onPress={(): any => onPressLogin()}
                        />
                    </View>

                    <View style={styles.registerTextContainer} >
                        <TouchableOpacity>
                            <Text style={[styles.text, { color: colors.placeholder }]} >
                                {`${"Don’t have an account?"} `}
                                <Text style={styles.text}>{"Register"}</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}

export default LoginPage;


const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: colors.brownColor
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
        marginVertical: 5,
        marginTop: 15
    },
    registerTextContainer: {
        alignItems: 'center',
        marginVertical: 5,
        marginTop: 10
    }
})