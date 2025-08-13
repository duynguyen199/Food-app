import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./assets/screen/IntroScreen";
import ContactUsScreen from "./assets/screen/ContactUsScreen";
import SendButton from "./src/component/SendButton";
import HomeScreen from "./assets/screen/HomeScreen";

export default function App() {
  return (
    //  <IntroScreen/>
    // <ContactUsScreen />
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
