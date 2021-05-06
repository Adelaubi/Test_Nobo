import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../pages/Home";
import ListBenefits from "../pages/list_benefits";

const Tab = createBottomTabNavigator();

const BottomTabMenu = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="listBenefits" component={ListBenefits}/>
        </Tab.Navigator>
    )
}

export default BottomTabMenu;
