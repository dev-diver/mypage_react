import './App.css';
import React, { useState } from "react";

import Title from './Title.js';
import Header from './Header';
import Board from './Board';
import Editor from './Editor';
import ArticleViewer from './ArticleViewer'
import { Box } from '@mui/material';

function App() {

  //showArticle
  const [showArticle, setShowArticle] = useState(false);

  //board
  const [contents, setContents] =  useState(null);
  
  //pageButtons
  const articlePerPage = 5;
  const [pageNumber, setPageNumber] = useState(0);
  const [articleUpdated, setArticleUpdated] = useState(false);

  //for Editor
  const [mode, setMode] = useState('none');
  const [title, setTitle] = useState('');
  const [text, setText] = useState(''); 

  const setWriteMode = (isWriteMode) => {
    setMode(isWriteMode ? 'write': 'none');
    setShowArticle(!isWriteMode);
  }

  const displayArticle = (id, title, text) => {
    setWriteMode(false);
    setContents({
      id: id,
      title: title,
      text: text
    })
  }

  const afterAction = (action) => {
    setTitle('');
    setText('');
    setPageNumber(0);
    setArticleUpdated(prev=>!prev);
    if(action === 'delete'){
      console.log('delete');
      setContents(null);
    }
  }

  const editMode = (title, text) => {
    setTitle(title);
    setText(text);
    setMode('edit');
  }

  return (
    <div className="App">
      <Header login={true}/>
      <Box sx={{ mx: 'auto',width: '100%', maxWidth: 500, bgcolor: 'background.paper', textAlign: 'center'}}>
        <Title/>
        <Editor
          editor={{
            contents:contents,
            title:title,
            setTitle:setTitle,
            text:text,
            setText:setText,
            mode:mode
          }}
          displayArticle = {displayArticle}
          setWriteMode = {setWriteMode}
          afterAction = {afterAction}
        />
        {showArticle && 
        <ArticleViewer
          editMode = {editMode}
          contents = {contents}
          setWriteMode = {setWriteMode}
          afterAction = {afterAction}
        />}
        <Board
          mode = {mode}
          articlePerPage = {articlePerPage}
          pageNumber =  {pageNumber}
          setPageNumber =  {setPageNumber}
          displayArticle = {displayArticle}
          articleUpdated = {articleUpdated}
        />
      </Box>
    </div>
  );
}

export default App;
