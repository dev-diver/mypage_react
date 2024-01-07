import React, { useState } from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Article = (props) => {

    const [item, setItem] = useState(props.item);

    return (
        <ListItemButton
          selected={props.select.selectedIndex === 0}
          onClick={(event) => props.select.clickHandler(event, 0)}
        >
          <ListItemText primary={item.title} />
        </ListItemButton>
    );
};

export default Article;