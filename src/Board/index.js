import React, { useState } from 'react';
import List from '@mui/material/List';

import ArticleListItem from './ArticleListItem.js';
import PageButtons from '../PageButtons';

export default function Board(props) {
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
    //글 불러오기
    const title="제목";
    const text ="이름"
    props.displayArticle(title, text);
    setSelectedIndex(index);
  };

  const select = {
    selectedIndex : selectedIndex,
    clickHandler : handleListItemClick
  }

  let articles =
    items.length > 0 && items.map((item,idx) => 
      <ArticleListItem 
        key={idx}
        idx={idx}
        item={item}
        select={select}
      />
    );

  return (
    <div>
      <List component="nav">
        {articles}
      </List>
      <PageButtons offset={0} pages={5}/>
    </div>
  );
}