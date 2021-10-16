import React from 'react';
// import './App.css';
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { Article } from "./components/Article"
import { AddArticle } from "./components/AddArticle"
import { addArticle, removeArticle } from "./store/actionCreators"
import { Dispatch } from "redux"

function App() {
  
  const articles : readonly IArticle[] = useSelector(
    (state: ApplicationState) => state.articles.articles,
    shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch()
  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )
  const artic  = useSelector(
    (state: ApplicationState) => state,
    shallowEqual
  )
   console.log(JSON.stringify(artic))
  return (
    <main>Article
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
}

export default App;
