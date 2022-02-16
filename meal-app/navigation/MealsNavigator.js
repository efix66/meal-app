import React from "react";
// import { createStackNavigator } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealsDetailScreen from "../screens/MealsDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const Stack = createStackNavigator();

function MealsNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CategoriesScreen' component={CategoriesScreen} />
        <Stack.Screen
          name='CategoryMealsScreen'
          component={CategoryMealsScreen}
          options={{
            title: "Meals ",
            headerStyle: {
              backgroundColor: Platform.OS === "android" ? Colors.primary : "",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : Colors.primary,
          }}
        />
        <Stack.Screen name='MealsDetailScreen' component={MealsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigator;
