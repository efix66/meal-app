import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FavoriteScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>FavoriteScreen</Text>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
