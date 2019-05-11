import React, { Component } from "react";
import { View, Text } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk';
import { images } from './reducers';
import { 
  Home,
  Images
} from './routes';

const imagesPersistConfig = {
  key: 'images',
  storage: AsyncStorage,
}

const reducer = combineReducers({
  images: persistReducer(imagesPersistConfig, images),
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const persistor = persistStore(store);

let AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Images: {
    screen: Images
  }
});

AppNavigator = createAppContainer(AppNavigator);

export default class App extends Component {  
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}