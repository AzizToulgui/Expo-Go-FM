import { StyleSheet, TextInput, FlatList, View, Text } from "react-native";
import { ShoppingListItem } from "../components/shoppingListItem";
import { theme } from "../theme";
import { useState } from "react";

type ShoppingListItemType = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);

  const handleSubmit = () => {
    if (inputValue) {
      const newShoppingList = [
        { id: new Date().toTimeString(), name: inputValue, isCompleted: false },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setInputValue("");
    }
  };

  return (
    <FlatList
      data={shoppingList}
      stickyHeaderIndices={[0]}
      style={styles.container}
      ListHeaderComponent={
        <TextInput
          style={styles.textInput}
          placeholder="Add a new item..."
          value={inputValue}
          onChangeText={setInputValue}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your Shopping List is Empty</Text>
        </View>
      }
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => {
        return <ShoppingListItem name={item.name} />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    borderColor: theme.colorLightGray,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
  listEmptyContainer: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 18,
  },
});
