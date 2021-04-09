import { List } from "@material-ui/core";
import React from "react";
import Item from "./Item";

export default function ItemList({ items, toggleComplete, removeItem }) {
  return (
    <List>
      {items
        .filter((item) => item.completed === false)
        .map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleComplete={toggleComplete}
            removeItem={removeItem}
          />
        ))}
      {items
        .filter((item) => item.completed === true)
        .map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleComplete={toggleComplete}
            removeItem={removeItem}
          />
        ))}
    </List>
  );
}
