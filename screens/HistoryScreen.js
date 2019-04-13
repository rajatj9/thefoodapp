import React from "react";
import { Gravatar } from "nachos-ui";
import { Tabs, Tab, Container } from 'native-base';
import Achievements from './History/Achievements';
import PastOrders from './History/PastOrders';

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
        <Tabs>
          <Tab heading={`Order History`}>
            <PastOrders />
          </Tab>
          <Tab heading={`Achievements`}>
            <Achievements />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
