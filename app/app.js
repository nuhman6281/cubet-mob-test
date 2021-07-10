import React, { Component } from 'react';
import AppNavigator from './navigation/app-navigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './store/configure-store';
import SplashScreen from 'react-native-splash-screen'
import { commonStyles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { colors } from './constants/theme';

const { store, persistor } = configureStore();

export class App extends Component {

    componentDidMount = () => {
        SplashScreen.hide();
    }

    render() {
        return (
            <SafeAreaView style={commonStyles.droidSafeArea}>
                <StatusBar
                    animated={true}
                    backgroundColor={colors.appBackground} />
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AppNavigator />
                    </PersistGate>
                </Provider>
            </SafeAreaView>

        );
    };
}


export default App;