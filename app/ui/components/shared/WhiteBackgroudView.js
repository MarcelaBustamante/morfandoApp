import * as React from "react";
import { StyleSheet, View } from "react-native";
;

export default function WhiteBackgroundView() {
  return (
    <View style={[styles.container, props.viewStyles]}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fb",
    shadowColor: "#000000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 4,
  },
});
