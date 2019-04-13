import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class EmptyCart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{
                uri:
                  "https://www.diningbutler.com/web_db/sg/images/benefitproductips/products/fnb-modules01a.png"
              }}
              style={{
                width: 150,
                height: 150,
                marginBottom: 12
              }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              color: "#ef6136",
              fontSize: 18
            }}
          >
            Your order is confirmed! Come by in 10 minutes
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 24,
    color: "#4099ff",
    margin: 8
  }
});

export default EmptyCart;
