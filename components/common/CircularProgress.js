import React from "react";
import { View, StyleSheet, Text } from "react-native";
/**
 * Override styles that get passed from props
 **/
propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }]
  };
};

renderThirdLayer = percent => {
  if (percent > 50) {
    /**
     * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
     * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
     * before passing to the propStyle function
     **/
    return (
      <View style={[styles.secondProgressLayer, propStyle(percent - 50, 45)]} />
    );
  } else {
    return <View style={styles.offsetLayer} />;
  }
};

const CircularProgress = ({ percent }) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]} />
      {renderThirdLayer(percent)}
      <Text style={styles.display}>{percent}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderRadius: 100,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center"
  },
  firstProgressLayer: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderRadius: 100,
    position: "absolute",
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "green",
    borderTopColor: "green",
    transform: [{ rotateZ: "-135deg" }]
  },
  secondProgressLayer: {
    width: 100,
    height: 100,
    position: "absolute",
    borderWidth: 10,
    borderRadius: 100,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "green",
    borderTopColor: "green",
    transform: [{ rotateZ: "45deg" }]
  },
  offsetLayer: {
    width: 100,
    height: 100,
    position: "absolute",
    borderWidth: 10,
    borderRadius: 100,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "grey",
    borderTopColor: "grey",
    transform: [{ rotateZ: "-135deg" }]
  },
  display: {
    position: "absolute",
    fontSize: 15,
    fontWeight: "bold"
  }
});

export default CircularProgress;
