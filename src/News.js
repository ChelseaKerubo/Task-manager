import React, { useEffect, useState } from "react";


let apiUrl = "https://api.nytimes.com/svc/topstories/v2";
let apiKey = "ptSlPRliLYsVadkaLMQEbU07GIhUzDAr";
let type ="world.json";

function News() {
  const [news, setNews] = useState(null);
  useEffect(() => {
    let api = `${apiUrl}/${type}?api-key=${apiKey}`;
    fetch(api).then(response => response.json()).then(data => {
      setNews(data);
    })
  }, []);

  return (
    news && news.results.splice(0,3).map((article, index) => {
      return (
      <article key={article.url}>
        <img alt={index} height="100px" src={article.multimedia[0].url} />

        <div  > <a href={article.url}>{article.title}</a> </div>
       
      </article>
      )
    })
  );
}

export default News;
