import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ItemForm({ addItem }) {
  const [item, setItem] = useState({
    id: "",
    name: "",
    completed: false,
  });

  function handleNameInputChange(e) {
    setItem({ ...item, name: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (item.name.trim()) {
      addItem({ ...item, id: uuidv4() });
      setItem({ ...item, name: "" });
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        label="Produkt..."
        type="text"
        name="name"
        onChange={handleNameInputChange}
        value={item.name}
      />
      <Button type="submit">Zatwierdź</Button>
    </form>
  );
}
