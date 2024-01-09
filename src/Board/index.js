import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';

import ArticleListItem from './ArticleListItem.js';
import PageButtons from './PageButtons/index.js';

import api from '../api.js';
import { Box } from '@mui/material';

export default function Board(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [items, setItems] = useState([{
    title:'로딩 중...'
}]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const pagesPerButtons = 5;

  const { articlePerPage, pageNumber, setPageNumber, articleUpdated } = props;

  useEffect(() => {
    // Fetch data on component mount
    api.get(`/api/article?page=${pageNumber}&size=${articlePerPage}`)
      .then((response) => {
        setItems(response.data);  // Update state with the data
        setLoading(false); // Update loading state
      })
      .catch((error) => {
        console.debug(error);
        setError(error.message); // Update error state
        setLoading(false);
      });
  }, [pageNumber,articleUpdated]);

  const handleListItemClick = (event, index) =>{
    //글 불러오기
    const id = items[index].id;
    const title = items[index].title;
    const text = items[index].text;
    props.displayArticle(id, title, text);
    setSelectedIndex(index);
  };

  const select = {
    selectedIndex : selectedIndex,
    clickHandler : handleListItemClick
  }

  let articles =
    items.length > 0 ?
    items.map((item,idx) => 
      <ArticleListItem 
        key={idx}
        idx={idx}
        item={item}
        select={select}
      />
    ) :
    [<ArticleListItem
      key={0}
      idx={0}
      item={{
        title : '글 좀 써주세요 ㅠ',
        text:''
      }}
      select = {{selectedIndex : selectedIndex}}
    />]

  return (
    <Box>
      <List component="nav">
        {articles}
      </List>
      <PageButtons 
        offset={offset} pages={pagesPerButtons}
        pageNumber = {pageNumber}
        setPageNumber = {setPageNumber}
        setOffset = {setOffset}
      />
    </Box>
  );
}