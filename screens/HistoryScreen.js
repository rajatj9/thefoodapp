import React from "react";
import { View, Text, FlatList } from "react-native";
import { Gravatar, Card } from "nachos-ui";
import ListItem from "../components/ListItem";
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
    const cardStyle = { margin: 15, width: 280 };

    return (
      <View>
        <FlatList
          data={history}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem
              key={item.id}
              name={item.name}
              image={`https://picsum.photos/280/280/?image=${9 + item.id}`}
              cuisine={item.cuisine}
              price={item.price}
              label={item.restaurant}
              handleNaviagation={() => {}}
            />
          )}
        />
      </View>
    );
  }
}
