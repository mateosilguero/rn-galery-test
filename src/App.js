import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { images } from './reducers';
import { 
  Home
} from './routes';

const reducer = combineReducers({images});
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

let AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
});

AppNavigator = createAppContainer(AppNavigator);

export default class App extends Component {  
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}