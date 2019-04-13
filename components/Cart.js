import React from "react";
import { Text, View, Image } from "react-native";
import {
  Container,
  Card,
  Button,
  Content,
  Item,
  Icon,
  Input,
  CardItem,
  Right
} from "native-base";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Your Cart - KFC Kennedy Town"
    };
  };

  handleNaviagation = () => {
    this.props.navigation.navigate("Restaurants");
  };

  render() {
    return (
      <Container
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
        <Content>
          <Card>
            <CardItem
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text>Chicken Burger</Text>
              <Right>
                <Text>1</Text>
              </Right>
            </CardItem>
            <CardItem />
            <CardItem
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#ef6136" }}>
                Total
              </Text>
              <Right>
                <Text style={{ fontWeight: "bold", color: "#ef6136" }}>
                  HK$75
                </Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text>Contact info</Text>
              <Right>
                <Text>waqas.abbasi@outlook.com</Text>
              </Right>
            </CardItem>
            <CardItem />
            <CardItem
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text>Payment</Text>
              <Right>
                <Image
                  style={{
                    width: 70,
                    height: 70
                  }}
                  source={{
                    uri:
                      "https://www.apple.com/v/apple-pay/i/images/overview/og_image.png?201810271035"
                  }}
                />
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Text style={{ margin: 5 }}>
          By completing this order, I agree to all terms & conditions.
        </Text>
        <Button
          full
          warning
          onPress={() => this.props.navigation.navigate("Confirmation")}
        >
          <Text style={{ color: "white" }}>Place Your Order</Text>
        </Button>
      </Container>
    );
  }
}
