import { BlogCard } from '../BlogCard/BlogCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { formatDate, formatAmpsCorrectly, articleTitleToUrl } from '../../../lib/articles'
import ClipLoader from "react-spinners/ClipLoader";

export const BlogGrid = ({data}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ tagNames, setTagNames ] = useState([])
  const [ tagArticles, setTagArticles ] = useState([])
  const [ activeArticles, setActiveArticles ] = useState([])

  useEffect(() => {
    async function fetchArticles() {
      setIsLoading(true);
      const result = await axios.get('https://genesis-box-client-b1tl6mk0t.vercel.app/blogs');
      const articles = result.data;
      console.log(articles);
      setActiveArticles(articles)

      const tags = GetArticleTags(articles)
      console.log(tags)
      setTagNames(tags.names)
      setTagArticles(tags.articles)

      setIsLoading(false);
    }
    fetchArticles();
  },[])

  const handleTagChange = (tag) => {
    const relevantArticles = tagArticles[tagNames.indexOf(tag)]
    console.log(relevantArticles)
    setIsLoading(true)
    setActiveArticles(relevantArticles)
    setIsLoading(false)  
  }

  const GetArticleTags = articles => {
    let tagNames = ['All topics']
    let tagArticles = [articles]
    for (const article of articles) {
      const tagList = article.article.tags.split(', ')
      for (const tag of tagList) {
        if (!tagNames.includes(tag)) {
          tagArticles[tagNames.length] = []
          tagNames.push(tag)
        }
        tagArticles[tagNames.indexOf(tag)].push(article)
      }
    }
    return {
      names: tagNames,
      articles: tagArticles
    }
  }

  return (
    <>
      <div id="blog-title-container">
        <h1 id="title">The Garden</h1>
      </div>
      <div id="blog-filter-bar">
        <div id="filter-menus">
          <span>FILTER BY</span>
          <select id="tag-selection" onChange={event => handleTagChange(event.target.value)}>;
            { 
              tagNames.map(tag => {
                return (<option value={tag}>{tag}</option>)
              })
            }
          </select>
        </div>
      </div>
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
            activeArticles.map((article, index) => {
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
    </>
  )
}