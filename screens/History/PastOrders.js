import React from "react";
import { FlatList } from "react-native";

import history from "../../api/activity/history";
import ListItemHistory from "../../components/ListItemHistory";

export default class PastOrders extends React.Component {
  render() {
    return (
      <FlatList
        data={history}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItemHistory
            key={item.id}
            name={item.name}
            image={item.image}
            cuisine={item.cuisine}
            price={item.price}
            label={item.restaurant}
            eaten={item.eaten}
            handleNaviagation={() => {}}
          />
        )}
      />
    );
  }
}
