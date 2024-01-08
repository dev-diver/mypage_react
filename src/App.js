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
  const [contents, setContents] =  useState({
    title: "오리지널 제목",
    text: "내용"
  })

  const displayArticle = (title, text) => {
    setMode(false);
    setShowArticle(true)
    setContents({
      title: title,
      text: text
    })
  }

  return (
    <div className="App">
      <Header login={true}/>
      <Box sx={{ mx: 'auto',width: '100%', maxWidth: 500, bgcolor: 'background.paper', textAlign: 'center'}}>
        <Title/>
        {showArticle && <ArticleViewer contents={contents}/>}
        <Editor 
          mode={mode}
          setMode={setMode}
          setShowArticle={setShowArticle}
        />
        <Board displayArticle={displayArticle}/>
      </Box>
    </div>
  );
}

export default App;
