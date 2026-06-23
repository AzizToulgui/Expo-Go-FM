import { View, TouchableOpacity, StyleSheet, Alert, Text } from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

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
      <View style={styles.row}>
        <Entypo
          name={isCompleted ? "check" : "circle"}
          size={24}
          color={isCompleted ? theme.colorGray : theme.colorCerulean}
        />
        <Text
          style={[
            styles.itemText,
            isCompleted ? styles.completedItemText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => handleDelete()}
        activeOpacity={0.8}
        disabled={isCompleted}
      >
        <AntDesign
          name="delete"
          size={24}
          color={isCompleted ? theme.colorGray : theme.colorRed}
        />
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
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
});
