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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loginUser } from '../../actions/user-actions';
import { ToastAndroid } from 'react-native';

const LoginPage = ({ navigation, route }) => {
    const dispatch = useDispatch();

    const [loginDetail, setLoginDetail] = useState({
        email: "admin",
        password: "admin"
    });

    const [loading, setLoading] = useState(false);

    const loginResponse = useSelector((state: any) => state?.user?.loginResponse);

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

    useEffect(() => {
        if (loading) {
            if (loginResponse?.success) {
                setLoading(false);
                navigation.navigate("DrinksList");
            }
            else {
                ToastAndroid.show("Incorrect username and password", ToastAndroid.SHORT);
                setLoading(false);
            }
        }
    }, [loginResponse])

    const onPressLogin = () => {
        //user admin as username and password
        setLoading(true);
        dispatch(loginUser({
            userName: loginDetail.email,
            password: loginDetail.password
        }))
    }

    return (
        <View style={[commonStyles.container, { justifyContent: 'center' }]}>
            <ScrollView>
                <View style={{ marginHorizontal: 30 }}>

                    <View style={{ marginTop: 20 }} >
                        <Text style={{
                            fontSize: 32,
                            color: colors.brownColor
                        }} >{i18n.t('login_screen.welcome_back')}</Text>
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
                            secureTextEntry={true}
                            placeholder={'Password'}
                            onChangeText={(value): any => onChangeText(value, "password")}
                            containerStyle={{ marginTop: 10 }}
                        />
                    </View>

                    <View style={styles.forgotPasswordContainer} >
                        <TouchableOpacity>
                            <Text style={styles.text} >{i18n.t('login_screen.forgotPassword')}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Button
                            onPress={(): any => onPressLogin()}
                            text={i18n.t('login_screen.header')}
                        />
                    </View>

                    <View style={styles.registerTextContainer} >
                        <TouchableOpacity>
                            <Text style={[styles.text, { color: colors.placeholder }]} >
                                {`${i18n.t('login_screen.no_account_text')} `}
                                <Text style={styles.text}>{i18n.t('login_screen.register')}</Text>
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