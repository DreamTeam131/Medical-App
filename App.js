import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreenStack } from "./screens/homeStack";

export default function App() {

  return (
    <NavigationContainer>
      <HomeScreenStack />
    </NavigationContainer>
  );
}
