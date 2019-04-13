import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { Button } from "native-base";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }
  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
    this.props.handleNaviagation();
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handleClick}>
        <View
          //elevation={2}
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#ffffff",
            marginHorizontal: 24,
            marginVertical: 8,
            borderRadius: 4,
            shadowOpacity: 0.1,
            shadowRadius: 2,
            shadowOffset: {
              height: 1,
              width: 1
            }
          }}
        >
          <Image
            style={{
              width: 108,
              height: 108,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 4
            }}
            source={{ uri: this.props.image }}
          />
          <View
            style={{
              padding: 5
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#333"
              }}
            >
              {this.props.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#666"
              }}
            >
              {this.props.cuisine}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#999"
              }}
            >
              {this.props.label}
            </Text>

            <Text
              style={{
                fontSize: 21,
                fontWeight: "bold",
                color: "#ef6136"
              }}
            >
              {this.props.price}
            </Text>
            <View
              style={{
                marginLeft: 120
              }}
            >
              <Button small primary>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    marginLeft: 4,
                    marginRight: 4
                  }}
                >
                  Ordered: {this.props.quantity}
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

/*
style={{
                  backgroundColor: "4099ff",
                  color: "#fff",
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8
                }}
*/
