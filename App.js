import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationController from "./components/Navigation/NavigationController";


export default class App extends React.Component {
  render() {
    return (
        <NavigationController />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
