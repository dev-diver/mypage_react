import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';

import ArticleListItem from './ArticleListItem.js';
import PageButtons from '../PageButtons';

import api from '../api.js';

export default function Board(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data on component mount
    api.get('/article?page=0&size=5')
      .then((response) => {
        console.log(response);
        console.log(response.data)
        setItems(response.data);  // Update state with the data
        setLoading(false); // Update loading state
      })
      .catch((error) => {
        console.debug(error);
        setError(error.message); // Update error state
        setLoading(false);
      });
    
  }, []);

  const handleListItemClick = (event, index) =>{
    //글 불러오기
    const title = items[index].title;
    const text = items[index].text;
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