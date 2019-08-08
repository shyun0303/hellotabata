import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationController from "./components/Navigation/NavigationController";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

export default class App extends React.Component {

  render() {
    let store = createStore(reducer);
    return (
      <Provider store={store}>
        <NavigationController />
        </Provider>
      );
  }
}

