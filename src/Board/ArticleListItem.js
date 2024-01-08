import React, { useState } from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const ArticleListItem = (props) => {

  const item = props.item;
  const { clickHandler } = props.select;

    return (
        <ListItemButton
          selected={props.select.selectedIndex === props.idx}
          onClick={clickHandler && ((event) => clickHandler(event, props.idx))}
        >
          <ListItemText primary={item.title} />
        </ListItemButton>
    );
};

export default ArticleListItem;