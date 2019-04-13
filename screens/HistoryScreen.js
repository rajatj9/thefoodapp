import React from "react";
import { Gravatar } from "nachos-ui";
import { Text } from "react-native";
import { Tabs, Tab, Container, Badge, View } from "native-base";
import PastOrders from "./History/PastOrders";
import history from "../api/activity/history";
import ProgressBarAnimated from 'react-native-progress-bar-animated';
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
        <Text> Past Orders</Text>
        <PastOrders />
      </View>

    );
  }
}
