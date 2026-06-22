import { View, TouchableOpacity, StyleSheet, Alert, Text } from "react-native";
import { theme } from "../theme";

type Props = {
  name: string;
  isCompleted?: boolean;
};

export function ShoppingListItem({ name, isCompleted }: Props) {
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
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedItemText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        onPress={() => handleDelete()}
        activeOpacity={0.8}
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
        disabled={isCompleted}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGray,
    borderBottomColor: theme.colorLightGray,
  },
  itemText: { fontSize: 18, fontWeight: 200 },
  completedItemText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGray,
    color: theme.colorGray,
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  completedButton: {
    backgroundColor: theme.colorGray,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
