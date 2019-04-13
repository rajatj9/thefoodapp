import React from "react";
import { Image } from "react-native";
import {
  Card,
  CardItem,
  Body,
  Text,
  Thumbnail,
  Left,
  Right
} from "native-base";
import ProgressBarAnimated from "react-native-progress-bar-animated";

export default class Achievements extends React.Component {
  render() {
    const progressBarStyle = {
      backgroundColor: "#6CC644",
      value: 100,
      width: 26
    };
    return (
      <Card
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 20,
          marginRight: 20,
          marginTop: 15
        }}
      >
        <CardItem>
          <Image
            source={{
              uri:
                "http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/gift-icon.png"
            }}
            style={{
              flex: 1,
              width: 100,
              height: 100,
              resizeMode: "contain",
              margin: 5
            }}
          />
        </CardItem>
        <CardItem>
          <Text
            style={{
              fontSize: 17,
              textAlign: "center"
            }}
          >
            4 full meals away from a free meal!
          </Text>
        </CardItem>
        <CardItem>
          <ProgressBarAnimated {...progressBarStyle} />
          <ProgressBarAnimated {...progressBarStyle} />
          <ProgressBarAnimated {...progressBarStyle} />
          <ProgressBarAnimated {...progressBarStyle} />
          <ProgressBarAnimated {...progressBarStyle} />
          <ProgressBarAnimated {...progressBarStyle} />
          <ProgressBarAnimated {...progressBarStyle} value={0} />
          <ProgressBarAnimated {...progressBarStyle} value={0} />
          <ProgressBarAnimated {...progressBarStyle} value={0} />
          <ProgressBarAnimated {...progressBarStyle} value={0} />
        </CardItem>
      </Card>
    );
  }
}
