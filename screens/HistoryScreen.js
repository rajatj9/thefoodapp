import React from "react";
import { Gravatar } from "nachos-ui";
import { Text } from "react-native";
import { Tabs, Tab, Container, Badge } from "native-base";
import PastOrders from "./History/PastOrders";
import history from "../api/activity/history";

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
      <Container>
        <Container style={{ flex: 1, flexDirection: "row" }}>
          {history.map(order => (
            <Badge
              key={order.id}
              success={(order.eaten >= 90 && true) || false}
              style={{ margin: 5 }}
            >
              <Text style={{ color: "white" }}>{order.eaten}</Text>
            </Badge>
          ))}
        </Container>
        <PastOrders />
      </Container>
    );
  }
}
