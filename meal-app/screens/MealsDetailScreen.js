import { StyleSheet, Button, Text, View } from "react-native";
import React from "react";

const MealsDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>MealsDetailScreen</Text>
      <Button
        title='Go To Categories'
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

export default MealsDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
