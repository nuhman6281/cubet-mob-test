import React, { Component } from 'react';
import AppNavigator from './navigation/app-navigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './store/configure-store';
import SplashScreen from 'react-native-splash-screen'

const { store, persistor } = configureStore();

export class App extends Component {

    componentDidMount = () => {
        SplashScreen.hide();
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppNavigator />
                </PersistGate>
            </Provider>
        );
    };
}


export default App;