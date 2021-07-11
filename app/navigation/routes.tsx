import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { colors, fonts } from '../constants/theme';

//import screens
import LoginPage from '../screens/login/index';
import AppHeader from '../components/app-header/app-header';
import DrinksList from '../screens/drinks-list';
import DrinkPreferences from '../screens/preferences';


const Stack = createStackNavigator();


function StackScreens(props) {
  return (
    <Stack.Navigator screenOptions={{
      ...screenOptions,
      header: () => <AppHeader
        backIcon={true}
        {...props} />
    }}>
      <Stack.Screen
        name="LoginPage"
        component={LoginPage} />

      <Stack.Screen
        name="DrinksList"
        component={DrinksList} />

      <Stack.Screen
        name="DrinkPreferences"
        component={DrinkPreferences} />

    </Stack.Navigator>
  );
}


export function AppRoutes({ navigation, route }, props) {
  return (
    <Stack.Navigator
      detachInactiveScreens
      screenOptions={{
        ...screenOptions,
        gestureEnabled: false,
        header: () => <AppHeader
          backIcon={true}
          {...props} />
      }}
      headerMode="screen">

      <Stack.Screen
        options={{ headerShown: false }}
        name="StackScreens"
        component={StackScreens} />

    </Stack.Navigator>
  );
}


const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerStyle: {
    backgroundColor: colors.secondaryColor,
    elevation: 0,
    shadowOpacity: 0,
    shadowColor: colors.secondaryColor
  },
  headerTitleStyle: {
    color: colors.primaryColor,
    fontSize: 20,
    fontFamily: fonts.interRegular
  },
  headerTintColor: colors.primaryColor
}