import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../pages/Home";
import ListBenefits from "../pages/list_benefits";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabMenu = () => {
    return(
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#67cabf',
            inactiveTintColor:'#fafafa',
            activeBackgroundColor:'#ffb2b2',
            inactiveBackgroundColor:'#ffb2b2',
        }}>
            <Tab.Screen name="Présentation"
                        component={Home}
                        options={{
                            tabBarLabel: 'Présentation',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="home" color={color} size={size} />
                            ),
                        }}/>
            <Tab.Screen name="Listes des prestations"
                        component={ListBenefits}
                        options={{
                            tabBarLabel: 'Liste des prestations',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
                            ),
                        }}/>
        </Tab.Navigator>
    )
}

export default BottomTabMenu
