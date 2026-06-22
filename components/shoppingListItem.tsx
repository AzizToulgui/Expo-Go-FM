import { View, TouchableOpacity, StyleSheet, Alert, Text } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
};

export function ShoppingListItem({ name }: Props) {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "it will be deleted permanently",
      [
        {
          text: "Yes",
          onPress: () => console.log("Item deleted"),
          style: "destructive",
        },
        {
          text: "Cancle",
          style: "cancel",
        },
      ],
    );
  };
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity
        onPress={() => handleDelete()}
        activeOpacity={0.8}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a759f",
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: { fontSize: 18, fontWeight: 200 },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
