import './App.css';
import React, { useState } from "react";

import Title from './Title.js';
import Header from './Header';
import Board from './Board';
import Editor from './Editor';
import ArticleViewer from './ArticleViewer'
import { Box } from '@mui/material';

function App() {

  const [mode, setMode] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [contents, setContents] =  useState(null);
  
  const articlePerPage = 5;
  const [pageNumber, setPageNumber] = useState(0);
  const [articleUpdated, setArticleUpdated] = useState(false);

  const setWriteMode = (isWriteMode) => {
    setMode(isWriteMode);
    setShowArticle(!isWriteMode);
  }

  const displayArticle = (title, text) => {
    setWriteMode(false);
    setContents({
      title: title,
      text: text
    })
  }

  const afterWrite = () => {
    setPageNumber(0);
    setArticleUpdated(prev=>!prev);
  }

  return (
    <div className="App">
      <Header login={true}/>
      <Box sx={{ mx: 'auto',width: '100%', maxWidth: 500, bgcolor: 'background.paper', textAlign: 'center'}}>
        <Title/>
        {showArticle && <ArticleViewer contents={contents}/>}
        <Editor 
          mode={mode}
          setWriteMode={setWriteMode}
          afterWrite={afterWrite}
        />
        <Board 
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
