import React from "react";
import { Gravatar } from "nachos-ui";
import { Text, StyleSheet } from "react-native";
import { Tabs, Tab, Container, Badge, View, Card } from "native-base";
import PastOrders from "./History/PastOrders";
import history from "../api/activity/history";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import Achievements from "./History/Achievements";

const gravatarStyle = {
  margin: 15
};

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "History",
    headerLeft: () => (
      <Gravatar
        md5="313cbdb52db5b6bb6b3f14bc4ddae461"
        size={35}
        circle
        style={gravatarStyle}
      />
    )
  };

  render() {
    return (
      <View>
        <Achievements />

        <Card style={{ marginLeft: 20, marginRight: 20 }}>
          <View style={styles.container}>
            <View style={styles.buttonContainer}>
              <Text> Visits </Text>
              <Text style={{ fontWeight: "bold" }}> 36 </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Text> Full Meals </Text>
              <Text style={{ fontWeight: "bold" }}> 16 </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Text> Waste Meals </Text>
              <Text style={{ fontWeight: "bold" }}> 20 </Text>
            </View>
          </View>
        </Card>
        <Text
          style={{
            textAlign: "center",
            color: "grey",
            marginTop: 13,
            fontSize: 20
          }}
        >
          Past Orders
        </Text>
        <PastOrders />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});
