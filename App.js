import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import CoinDetailsScreen from "./src/screens/CoinDetailsScreen";


export default function App() {
  return (
    <View style={styles.container}>
      <CoinDetailsScreen/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
