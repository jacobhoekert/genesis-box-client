import { BlogCard } from '../BlogCard/BlogCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { formatDate, formatAmpsCorrectly, articleTitleToUrl } from '../../../lib/articles'
import ClipLoader from "react-spinners/ClipLoader";

export const BlogGrid = ({data}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      setIsLoading(true);
      const result = await axios.get('http://localhost:3000/api/blogs');
      console.log(result.data);
      setArticles(result.data);
      setIsLoading(false);
    }
    fetchArticles();
  },[])

  return (
    <div className="blog-grid">
      {
        isLoading ? (
          <div className="loader-container">
            <ClipLoader
            size={30}
            color={"#124658"}
            loading={true}
            />
          </div>
        ) : 
          articles.map((article, index) => {
            const formattedDate = formatDate(article.article.published_at);
            const formattedSummary = formatAmpsCorrectly(article.article.summary_html);
            const articleUrlPath = "/the-garden/" + articleTitleToUrl(article.article.title);
            return (
              <BlogCard
                key={index}
                linkUrl={articleUrlPath}
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