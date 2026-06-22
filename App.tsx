import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { ShoppingListItem } from "./components/shoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tee" isCompleted />
      <ShoppingListItem name="Sugar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
