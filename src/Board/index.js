import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import WriteButton from '../WriteButton.js';
import Article from '../Article.js';
import PageButtons from '../PageButtons';

export default function Board() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [items, setItems] = useState(
    [
      {
        id:1,
        title:"제목1",
      },
      {
        id:2,
        title:"제목2",
      },
      {
        id:3,
        title:"제목3",
      }
    ]
  )

  const handleListItemClick = (event, index) =>{
    setSelectedIndex(index);
  };

  const select = {
    selectedIndex : selectedIndex,
    clickHandler : handleListItemClick
  }

  let articles =
    items.length > 0 && items.map((item,idx) => 
      <Article 
        item={item} 
        select={select}
        key={idx}
      />
    );

  return (
    <Box sx={{ mx: 'auto',width: '100%', maxWidth: 500, bgcolor: 'background.paper', textAlign: 'center'}}>
      <Box sx={{ textAlign : 'right'}}>
        <WriteButton/>
      </Box>
      <List component="nav">
        {articles}
      </List>
      <PageButtons offset={0} pages={5}/>
    </Box>
  );
}