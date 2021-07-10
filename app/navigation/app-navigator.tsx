import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService, { navigationRef } from './navigation-service';
import { AppRoutes } from './routes';
const Stack = createStackNavigator();


class Navigator extends React.Component {

    render() {
        return (
            //@ts-ignore
            <NavigationContainer ref={navigationRef} >
                <Stack.Navigator
                    initialRouteName={"App"}
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="App" component={AppRoutes} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}


export default Navigator;