import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import React from "react";

export default function Item({ item, toggleComplete, removeItem }) {
  function handleCheckboxClick() {
    toggleComplete(item.id);
  }
  function handleRemoveClick() {
    removeItem(item.id);
  }
  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox
        variant="body1"
        onClick={handleCheckboxClick}
        defaultChecked={item.completed}
      ></Checkbox>
      <Typography
        style={{
          textDecoration: item.completed ? "line-through" : null,
          color: item.completed ? "red" : null,
        }}
      >
        {item.name}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <DeleteForeverIcon color="secondary" />
      </IconButton>
    </ListItem>
  );
}
