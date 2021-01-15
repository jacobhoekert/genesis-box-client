import { BlogCard } from '../BlogCard/BlogCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const BlogGrid = ({data}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const result = await axios.get('http://localhost:3000/api/blogs');
      console.log(result.data);
      setArticles(result.data);
    }
    fetchArticles();

   
  },[])

  const formatDate = (dateFromArticle) => {
    console.log(dateFromArticle);
    const date = new Date(dateFromArticle).toDateString();
    const dateArray = date.split(' ');
    const newDateArray = dateArray.slice(1, 4);
    newDateArray.splice(1, 1, newDateArray[1].concat('', ','));
    const newDate = newDateArray.join(' ');
    return newDate;
  }

  const formatAmpsCorrectly = (summaryFromArticle) => {
    if ((summaryFromArticle===null) || (summaryFromArticle===''))
      return false;
    else {
      summaryFromArticle = summaryFromArticle.toString();
    }
    return summaryFromArticle.replace(/(amp;)/ig, '');
  }

  return (
    <div className="blog-grid">
      {
        articles.map(article => {
          const formattedDate = formatDate(article.article.published_at);
          const formattedSummary = formatAmpsCorrectly(article.article.summary_html);
          return (
            <BlogCard
              linkUrl="/"
              image={article.article.image.src}
              alt="asdf"
              title={article.article.title}
              author={article.article.author}
              date={formattedDate}
              summary={formattedSummary}
            />
          )
        })
      }
    </div>
  )
}