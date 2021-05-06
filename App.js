import React from 'react';
import BottomTabMenu from "./src/Navigation/Bottom_tab";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer>
          <BottomTabMenu/>
      </NavigationContainer>
  );
}

