import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import Constants from "../utils/constants";
import foodData from "../api/foodData";
import ListItem from "./ListItem";
import CartButton from "./common/CartButton";

export default class Dishes extends React.Component {
  constructor(props) {
    super(props);
    const quantities = {};
    foodData.forEach(item => {
      quantities[item.id] = 0;
    });
    this.state = {
      quantities
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Menu",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
      headerRight: (
        <CartButton
          onPress={() => {
            navigation.navigate("Cart");
          }}
        />
      )
    };
  };

  handleNaviagation = id => {
    //this.props.navigation.navigate("Dishes");
    const quantities = this.state.quantities;
    quantities[id]++;
    this.setState({
      quantities
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={foodData}
          keyExtractor={item => item.id}
          extraData={this.state}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              image={item.image}
              cuisine={item.cuisine}
              price={item.price}
              label={item.label}
              isVegetarian={item.isVegetarian}
              handleNaviagation={() => this.handleNaviagation(item.id)}
              quantity={this.state.quantities[item.id]}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 8,
    marginBottom: 8
  }
});
