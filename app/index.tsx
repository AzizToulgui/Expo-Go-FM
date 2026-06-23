import { StyleSheet, TextInput, ScrollView } from "react-native";
import { ShoppingListItem } from "../components/shoppingListItem";
import { theme } from "../theme";
import { useState } from "react";

type ShoppingListItemType = {
  id: string;
  name: string;
  isCompleted: boolean;
};

const initialShoppingList: ShoppingListItemType[] = [
  { id: "1", name: "Coffee", isCompleted: false },
  { id: "2", name: "Tee", isCompleted: true },
  { id: "3", name: "Sugar", isCompleted: false },
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [shoppingList, setShoppingList] =
    useState<ShoppingListItemType[]>(initialShoppingList);

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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
    >
      <TextInput
        style={styles.textInput}
        placeholder="Add a new item..."
        value={inputValue}
        onChangeText={setInputValue}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingList.map((item) => (
        <ShoppingListItem
          key={item.id}
          name={item.id}
          isCompleted={item.isCompleted}
        />
      ))}
    </ScrollView>
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
});
