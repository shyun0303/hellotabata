import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity onPressOut={onPress} style={styles.container}>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  );
}

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    margin:50,

  }
});

export default Button;
