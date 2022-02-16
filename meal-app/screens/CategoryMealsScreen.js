import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import {
  NavigationContainer,
  CommonActions,
  useNavigation,
} from "@react-navigation/native";

const CategoryMealsScreen = (props) => {
  // const catId = props.navigation.getParam("categoryId");
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <Button
        title='Go to detail screen'
        onPress={() => props.navigation.navigate("MealsDetailScreen")}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
