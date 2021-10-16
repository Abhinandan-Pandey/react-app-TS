interface IArticle{
    id:number;
    title:string;
    body:string;
}

type ArticleState = {
    articles: IArticle[]
}

type ArticleAction = {
    type: "ADD_ARTICLE"
    article: IArticle
}
type ArticleDeleteAction={
   type:"REMOVE_ARTICLE"
   id:number
}
type articleAct= 
 |ArticleAction
 |ArticleDeleteAction
  
type DispatchType = (args: articleAct) => articleAct

interface ApplicationState {
    articles: ArticleState
}