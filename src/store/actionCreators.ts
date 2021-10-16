import * as actionTypes from "./actionTypes"

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  }

  return simulateHttpRequest(action)
}

export function removeArticle(id:number) {
  const action: ArticleDeleteAction = {
    type: actionTypes.REMOVE_ARTICLE,
    id,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: articleAct) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
  }
}