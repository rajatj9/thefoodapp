import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../components/Restaurants";
import LinksScreen from "../screens/LinksScreen";
import HistoryScreen from "../screens/HistoryScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const HistoryStack = createStackNavigator({
  History: HistoryScreen
});

HistoryStack.navigationOptions = {
  tabBarLabel: "History",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-calendar" : "md-calendar"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  HistoryStack
});
