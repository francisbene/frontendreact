import React, {Container} from "react";

function Article(props) {
  return (
    <div>
        <container fluid>
          <h1 class="display-4">Titulo do artigo</h1>
          <p class="lead">Conteúdo do artigo ... Este é um jumbotron modificado que ocupa todo o espaço horizontal de seu elemento pai.</p>
        </container>
    </div>
  )
};

export default Article;
