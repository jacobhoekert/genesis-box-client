import { BlogCard } from '../BlogCard/BlogCard'
import { useState, useEffect } from 'react'
import { formatDate, formatAmpsCorrectly, articleTitleToUrl } from '../../../lib/articles'

export const BlogGrid = ({allArticles}) => {
  const [ tagNames, setTagNames ] = useState([])
  const [ tagArticles, setTagArticles ] = useState([])
  const [ activeArticles, setActiveArticles ] = useState([])

  useEffect(() => {
    setActiveArticles(allArticles)
    const tags = GetArticleTags(allArticles)
    setTagNames(tags.names)
    setTagArticles(tags.articles)
  },[])

  const handleTagChange = (tag) => {
    const relevantArticles = tagArticles[tagNames.indexOf(tag)]
    console.log(relevantArticles)
    setActiveArticles(relevantArticles)
  }

  const GetArticleTags = articles => {
    let tagNames = ['All topics']
    let tagArticles = [articles]
    for (const article of articles) {
      const tagList = article.tags.split(', ')
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
          activeArticles.map((article, index) => {
            const formattedDate = formatDate(article.published_at);
            const formattedSummary = formatAmpsCorrectly(article.summary_html);
            const articleUrlPath = "/the-garden/" + articleTitleToUrl(article.title);
            return (
              <BlogCard
                key={index}
                linkUrl={articleUrlPath}
                image={article.image.src}
                alt="asdf"
                title={article.title}
                author={article.author}
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