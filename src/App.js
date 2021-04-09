import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import ItemList from "./Components/ItemList";
import ItemForm from "./Components/ItemForm";
import "./App.css";

const LOCAL_STORAGE_KEY = "react-shopping-list-items";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageItems) {
      setItems(storageItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(item) {
    setItems([item, ...items]);
  }

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function toggleComplete(id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  return (
    <div className="App">
      <Nav />
      <ItemForm addItem={addItem} />
      <ItemList
        items={items}
        toggleComplete={toggleComplete}
        removeItem={removeItem}
      />
    </div>
  );
}

export default App;
