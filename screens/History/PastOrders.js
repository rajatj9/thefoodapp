import React from "react";
import { FlatList } from "react-native";

import ListItem from "../../components/ListItem";
import history from "../../api/activity/history";

export default class PastOrders extends React.Component {
  render() {
    return (
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
    );
  }
}
