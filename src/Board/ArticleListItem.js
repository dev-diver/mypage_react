import React, { useState } from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const ArticleListItem = (props) => {

    const item = props.item;

    return (
        <ListItemButton
          selected={props.select.selectedIndex === props.idx}
          onClick={(event) => props.select.clickHandler(event, props.idx)}
        >
          <ListItemText primary={item.title} />
        </ListItemButton>
    );
};

export default ArticleListItem;