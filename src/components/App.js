import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer, getStoredState } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import reducer from '../reducers';
import Counter from './Counter';
import Loading from './Loading';
const persistConfig = {
  key: 'root',
  storage,
  // whitelist: 'user',
  migrate: state =>
    state.user && state.user.isSaveState
      ? Promise.resolve(state)
      : Promise.resolve({})
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Counter />
        </PersistGate>
      </Provider>
    );
  }
}
