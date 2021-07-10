import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import createSagaMiddleware from 'redux-saga';
import { CLEAR_GLOBAL_STORE } from '../actions/action-types';
import rootSaga from '../sagas';
import appReducer from "../reducers";
import AsyncStorage from '@react-native-async-storage/async-storage';
/* Here, configuring the redux with saga */


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: 0,
    stateReconciler: hardSet,
    blacklist: ['nonPersistingStates'] // nonPersistingStates will not be persisted
};

const rootReducer = (state, action) => {
    if (action.type === CLEAR_GLOBAL_STORE) {
        state = undefined
    }
    return appReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {

    const sagaMiddleware = createSagaMiddleware({
        onError(err) {
            /*  treat the errors of the sagas here */
            console.warn(err)
        },
    });

    const middleWares = [sagaMiddleware];


    if (process.env.NODE_ENV == 'development') {
        // @ts-ignore
        middleWares.push(createLogger());
    }

    const store = createStore(
        persistedReducer,
        applyMiddleware(
            ...middleWares
        )
    );

    sagaMiddleware.run(rootSaga);

    const persistor = persistStore(store);
    return { store, persistor };
}