import './App.css';
import React, { useState } from "react";

import Article from './Article.js';
import Title from './Title.js';
import PageButtons from './PageButtons';
import WriteButton from './WriteButton.js';
import Header from './Header';

function App() {

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

  let articles =
    items.length > 0 && items.map((item) => <Article item={item} />);

  return (
    <div className="App">
      <Header/>
      <Title/>
      <WriteButton/>
      {articles}
      <PageButtons offset={0} pages={5}/>
    </div>
  );
}

export default App;
